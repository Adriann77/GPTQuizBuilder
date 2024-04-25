import { useState } from 'react';
import { Quiz } from '../Quiz/Quiz';
import { useTranslation } from 'react-i18next';

interface Props {
  wrongAnsweredQuestionsNumber: any[];
  currentQuizLenght: number;
  restartQuiz: () => void;
}

let res = 0;

export const Summary = ({ wrongAnsweredQuestionsNumber, currentQuizLenght, restartQuiz }: Props) => {
  const [startOver, setStartOver] = useState<boolean>(false);

  const calculateLeftQuestions = () => {
    res = currentQuizLenght - wrongAnsweredQuestionsNumber?.length;
  };

  const { t } = useTranslation();

  calculateLeftQuestions();

  return (
    <>
      {!startOver && (
        <div className="flex flex-col items-center p-2">
          {res < currentQuizLenght ? (
            <div>
              <p className="text-center">
                {t('global:postQuizMessage1')} {res}
                {t('global:postQuizMessage2')} {currentQuizLenght}
                {t('global:postQuizMessage3')}{' '}
              </p>
              <p className="text-center">{t('global:postQuizMessage4')}</p>
            </div>
          ) : (
            <div className="">
              <p className="text-center">{t('global:postQuizMessage5')}</p>
              <p className="text-center">{t('global:postQuizMessage6')}</p>
            </div>
          )}
          <div className="m-4 flex flex-col justify-center  gap-4 lg:max-w-[250px]">
            {res < currentQuizLenght && (
              <button
                onClick={() => {
                  setStartOver(true);
                }}
                className="btn btn-primary h-[70px] w-[320px] self-center p-4"
              >
                {t('global:tryAgainBtn')}
              </button>
            )}
            <button onClick={restartQuiz} className="btn btn-primary h-[70px] w-[320px] self-center p-4">
              {t('global:createNewQuizBtn')}
            </button>
          </div>
        </div>
      )}
      {startOver && <Quiz restartQuiz={restartQuiz} questions={wrongAnsweredQuestionsNumber} />}
    </>
  );
};
