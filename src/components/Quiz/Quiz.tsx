import { useState } from 'react';
import { Summary } from '../Summary/Summary';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
const OPEN_AI_KEY = import.meta.env.VITE_OPEN_AI_KEY;

interface Question {
  content: string;
  answers: {
    a: string;
    b: string;
    c: string;
    d: string;
  };
  correct: keyof Question['answers'];
  description_correct?: string;
}

interface QuizProps {
  questions: Question[];
  restartQuiz: () => void;
}

export const Quiz = ({ questions, restartQuiz }: QuizProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [showExplanation, setShowExplanation] = useState(false);
  const [questionNumber, setQuestionNumber] = useState<number>(1);
  const [wrongAnswers, setWrongAnswers] = useState<any[]>([]);
  const [showSummary, setShowSummary] = useState<boolean>(false);

  const question = questions[currentQuestionIndex];

  const { t } = useTranslation();


  // Przygotowanie danych zapytania
  const data = {
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'system',
        content: 'You are a poetic assistant, skilled in explaining complex programming concepts with creative flair.',
      },
      {
        role: 'user',
        content: 'Compose a poem that explains the concept of recursion in programming.',
      },
    ],
  };

  // Przygotowanie nagłówków
  const headers = {
    'Content-Type': 'application/json',
    Authorization:  `Bearer ${OPEN_AI_KEY}`
  };

  // Wykonanie zapytania POST


  const showModal = () => {
    //@ts-ignore
    document.getElementById('my_modal_2').showModal();
      axios
        .post('https://api.openai.com/v1/chat/completions', data, { headers: headers })
        .then((response) => {
          console.log('Response:', response.data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });


  };

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
    setShowExplanation(true);
    if (answer !== question.correct) {
      setWrongAnswers((prevAnswers) => [...prevAnswers, question]);
    }
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer('');
      setShowExplanation(false);
      setQuestionNumber((prevNumb) => prevNumb + 1);
    } else {
      setShowSummary(true);
    }
  };

  return (
    <>
      {!showSummary && (
        <div className="relative bg-cover bg-center pb-4 lg:p-12">
          <p className=" text-success  ">
            {t('global:questionNumber')} {questionNumber}:
          </p>

          <div className=" text-md my-4 w-[300px] rounded bg-[#1d1e20] p-3 text-center lg:w-[400px] lg:text-lg">
            {question.content}
          </div>
          <ul className="flex flex-col gap-3 leading-tight">
            {Object.entries(question.answers).map(([key, value]) => (
              <li
                className={`text-md mx-auto my-0   min-h-[70px] w-[300px]  p-2 lg:min-h-[90px] lg:w-[400px] lg:text-lg  ${
                  showExplanation
                    ? key === question.correct
                      ? 'btn btn-success cursor-default'
                      : selectedAnswer === key
                        ? 'btn btn-error cursor-default'
                        : 'btn btn-neutral hidden cursor-default'
                    : 'btn btn-primary'
                } `}
                key={key}
                onClick={() => !showExplanation && handleAnswerSelect(key)}
              >
                {value}
              </li>
            ))}
          </ul>
          {showExplanation && (
            <>
              <div className="relative">
                <p className="text-md mx-auto my-4 flex w-[300px] flex-col gap-2 rounded bg-[#1d1e20] p-3 text-center text-white lg:w-[400px] lg:text-xl">
                  {question.description_correct}

                  <button className="btn btn-outline btn-primary" onClick={showModal}>
                    Extend
                  </button>
                  <dialog id="my_modal_2" className="modal">
                    <div className="modal-box">
                      <p className="py-4">Press ESC key or click outside to close</p>
                    </div>
                    <form method="dialog" className="modal-backdrop">
                      <button>close</button>
                    </form>
                  </dialog>
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <button
                  className="btn btn-primary  h-[70px]  w-[300px] text-sm lg:w-[400px] lg:text-lg"
                  onClick={goToNextQuestion}
                >
                  {t('global:nextQuestion')}
                </button>
              </div>
            </>
          )}
        </div>
      )}
      {showSummary && (
        <Summary
          wrongAnsweredQuestionsNumber={wrongAnswers}
          currentQuizLenght={questions.length}
          restartQuiz={restartQuiz}
        />
      )}
    </>
  );
};
