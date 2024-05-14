import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { Loader } from '../Loader/Loader';
import { Quiz } from '../Quiz/Quiz';
import { useTranslation } from 'react-i18next';

const OPEN_AI_KEY = import.meta.env.VITE_OPEN_AI_KEY;

export const QuizFetcher = ({ data, restartQuiz }: { data: any; restartQuiz: any }) => {
  const [error, setError] = useState('');
  const requestSent = useRef(false);
  const [gptAnswer, setGptAnswer] = useState<any>([]);
  const [showLoader, setShowLoader] = useState<boolean>(true);
  const [showQuiz, setShowQuiz] = useState<boolean>(false);
  const prevDataRef = useRef();

  const { t } = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      if (
        !requestSent.current &&
        (!prevDataRef.current || JSON.stringify(prevDataRef.current) !== JSON.stringify(data))
      ) {
        requestSent.current = true;
        prevDataRef.current = data;
        const difficultyDescriptions: any = {
          basic:
            'The questions should be straight forward and the answers clearly distinguishable, suitable for beginners.',
          intermediate:
            'The questions should require a moderate level of understanding, with answers that may need some thought to differentiate.',
          expert:
            'The questions should be complex and challenging, with answers that are closely related and might be misleading to ensure a thorough understanding.',
        };
        try {
          const response = await axios.post(
            `https://api.openai.com/v1/chat/completions`,
            {
              model: 'gpt-3.5-turbo',
              messages: [
                {
                  role: 'user',
                  content: `Proszę o stworzenie quizu w języku ${t('global:quizLanguage')} skupiającego się na temacie ${data.genre}. Jeżeli temat może być potencjalnie szkodliwy, proszę stworzyć quiz o tematyce "jak być dobrym człowiekiem". Poziom trudności quizu to "${data.diff}", co oznacza ${difficultyDescriptions[data.diff]}. Quiz powinien składać się z ${data.length} pytań. Każde pytanie powinno być jasno sformułowane w języku ${t('global:quizLanguage')} i zawierać cztery różne odpowiedzi (opcje a, b, c oraz d), z jedną poprawną odpowiedzią. Proszę o zwrócenie wyników wyłącznie formatu JSON bezadnych znakow przed i za, zgodnie z poniższym przykładem:

[
  {
    "content": "Które miasto jest stolicą największego kraju świata pod względem powierzchni?",
    "answers": {
      "a": "Moskwa",
      "b": "Ottawa",
      "c": "Pekin",
      "d": "Nowy Delhi"
    },
    "correct": "a",
    "topic": "geografia"
  },
  {
    "content": "W którym państwie znajduje się najwyżej położona stolica na świecie?",
    "answers": {
      "a": "Ekwador",
      "b": "Boliwia",
      "c": "Nepal",
      "d": "Etiopia"
    },
    "correct": "b",
    "topic": "geografia"
  },
  {
    "content": "Jak nazywa się forma erozji gleby, która występuje wskutek działania wiatru w suchym klimacie?",
    "answers": {
      "a": "Korazja",
      "b": "Deflacja",
      "c": "Abrazja",
      "d": "Glacjacja"
    },
    "correct": "b",
    "topic": "geografia"
  },
  {
    "content": "Który z poniższych krajów nie ma dostępu do Morza Śródziemnego?",
    "answers": {
      "a": "Egipt",
      "b": "Hiszpania",
      "c": "Portugalia",
      "d": "Libia"
    },
    "correct": "c",
    "topic": "geografia"
  },
  {
    "content": "Które z poniższych jezior jest najgłębszym jeziorem na świecie?",
    "answers": {
      "a": "Jezioro Wiktorii",
      "b": "Jezioro Bajkał",
      "c": "Jezioro Tanganika",
      "d": "Jezioro Superior"
    },
    "correct": "b",
    "topic": "geografia"
  }
]
`,
                },
              ],
            },
            {
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${OPEN_AI_KEY}`,
              },
            },
          );

          const parsedData = JSON.parse(response.data.choices[0].message.content);
          setGptAnswer(parsedData);
          setShowLoader(false);
          setShowQuiz(true);
          requestSent.current = true;
        } catch (error) {
          console.error('Error:', error);
          const errorMessage = error instanceof Error ? error.message : 'Unknown error';
          setError(errorMessage);
        }
      }
    };

    fetchData();
  }, [data]);

  if (error) {
    return (
      <div className="flex flex-col gap-4">
        <div>{t('global:errorFetchQuiz')}</div>
        <button onClick={() => restartQuiz()} className="btn btn-primary">
          {t('global:tryAgainBtn')}
        </button>
      </div>
    );
  }

  if (showLoader) {
    return <Loader currentQuizLength={data.length} />;
  }

  if (showQuiz) {
    return <Quiz restartQuiz={restartQuiz} questions={gptAnswer} />;
  }
};
