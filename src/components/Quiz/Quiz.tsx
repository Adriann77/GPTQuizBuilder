import { useState } from 'react';
import { Summary } from '../Summary/Summary';
import { useTranslation } from 'react-i18next';


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
        <div
          className="relative bg-cover bg-center pb-4 lg:p-12"
        
			  >
				  
          <p className=" text-success  ">
            {t('global:questionNumber')} {questionNumber}:
          </p>

          <div className=" text-md my-4 w-[300px] rounded bg-[#1d1e20] p-3 text-center lg:w-[400px] lg:text-lg">
            {question.content}
          </div>
          <ul className="flex flex-col gap-3">
            {Object.entries(question.answers).map(([key, value]) => (
              <li
                className={`text-md mx-auto my-0   min-h-[70px] w-[300px]  lg:min-h-[70px] lg:w-[400px] lg:text-lg  ${
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
              <p className="text-md mx-auto my-4 w-[300px] rounded bg-[#1d1e20] p-3 text-center text-white lg:w-[400px] lg:text-xl">
                {question.description_correct}
              </p>
              <button
                className="btn btn-primary  h-[70px]  w-[300px] text-sm lg:w-[400px] lg:text-lg"
                onClick={goToNextQuestion}
              >
                {t('global:nextQuestion')}
              </button>
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
