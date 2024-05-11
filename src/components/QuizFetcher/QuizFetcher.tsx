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
            'The questions should be straightforward and the answers clearly distinguishable, suitable for beginners.',
          intermediate:
            'The questions should require a moderate level of understanding, with answers that may need some thought to differentiate.',
          expert:
            'The questions should be complex and challenging, with answers that are closely related and might be misleading to ensure a thorough understanding.',
        };
        try {
          const response = await axios.post(
            `https://api.openai.com/v1/chat/completions`,
            {
              model: 'gpt-4',
              messages: [
                {
                  role: 'user',
                  content: `Please, create a quiz for me in ${t('global:quizLanguage')} language focused on the topic of ${data.genre}. (If topic is potentially harmful create quiz about "how to be kind man" ) The difficulty level of the quiz is "${data.diff}", 
                  which means ${difficultyDescriptions[data.diff]}. The quiz should consist of ${data.length} questions. Each question should be written clearly in ${t('global:quizLanguage')} 
                  Each question should include four different answers (options a, b, c, and d), with one correct answer. Please return it in JSON format. For example:

                      [
                        {
                          "content": "What are the functions of enzymes?",
                          "answers": {
                            "a": "Transport of intracellular materials.",
                            "b": "Regulation of body temperature",
                            "c": "Participation in metabolic processes",
                            "d": "DNA synthesis"
                          },
                          "correct": "c",
                          "topic": "biology",
                          
                        }
                      ]`,
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
