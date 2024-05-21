import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { Loader } from '../Loader/Loader';
import { Quiz } from '../Quiz/Quiz';
import { useTranslation } from 'react-i18next';

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

        try {
          const response = await axios.post('/api/fetchQuiz', {
            data,
            language: t('global:quizLanguage'),
            length: data.length,
            diff: data.diff,
          });

          setGptAnswer(response.data);
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
