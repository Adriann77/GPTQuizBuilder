import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const Loader = ({ currentQuizLength }: { currentQuizLength: number }) => {
  const [loaderValue, setLoaderValue] = useState<number>(0);
  const [isLoaderFull, setIsLoaderFull] = useState<boolean>(false);

  useEffect(() => {
    let intervalLength;
    if (currentQuizLength >= 5 && currentQuizLength <= 8) {
      intervalLength = 120;
    } else if (currentQuizLength >= 9 && currentQuizLength <= 13) {
      intervalLength = 165;
    } else {
      intervalLength = 225;
    }

    const interval = setInterval(() => {
      setLoaderValue((prevVal) => {
        if (prevVal >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prevVal + 1;
      });
    }, intervalLength);

    return () => clearInterval(interval);
  }, [currentQuizLength]);

  useEffect(() => {
    if (loaderValue >= 100) {
      setIsLoaderFull(true);
    }
  }, [loaderValue]);

  const { t } = useTranslation();

  return (
    <div className="flex flex-col  items-center gap-3">
      <div className="flex gap-1">
        {!isLoaderFull ? <p>{t('global:quizLoader')}</p> : <p>{t('global:quizLoader2')}</p>}
        <span className="loading loading-dots loading-xs self-end"></span>
      </div>
      {!isLoaderFull && (
        <div
          className="radial-progress text-primary"
          //@ts-ignore
          style={{ '--value': loaderValue }}
          role="progressbar"
        >
          {loaderValue}%
        </div>
      )}
    </div>
  );
};
