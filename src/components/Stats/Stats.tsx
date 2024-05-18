import { useEffect, useState } from 'react';
import { stats } from '../../constants/stats';
import { useTranslation } from 'react-i18next';


export default function Stats() {
  const [difference, setDifference] = useState(0);
  const [isLessThanCorrect, setIsLessThanCorrect] = useState<boolean>(false)

  const { t } = useTranslation();
  


  useEffect(() => {
    const correctAnswers = stats[0].correctAnswers;
    const wrongAnswers = stats[0].wrongAnswers;


    if (correctAnswers + wrongAnswers > 0 && correctAnswers > wrongAnswers) {
      const xdee = ((correctAnswers - wrongAnswers) / wrongAnswers) * 100;
      const finalDiff = Math.round(xdee);
      setDifference(finalDiff);
      setIsLessThanCorrect(false)
    } else {
      const xdee = ((wrongAnswers - correctAnswers) / correctAnswers) * 100;
      const finalDiff = Math.round(xdee);
      setDifference(finalDiff);
      setIsLessThanCorrect(true)
    }
  }, [stats]);

  return (
    <>

      <div className=" relative mt-[10vh] flex flex-col rounded-xl bg-[#1d232a]">
        <div className="stats stats-vertical shadow md:stats-horizontal">
          <div className="stat md:w-[360px]">
            <div className="stat-figure text-4xl text-primary">
              <i className="fa-solid fa-chart-simple"></i>
            </div>
            <div className="stat-title">{t('global:nav:topTopic')} </div>
            <div className="stat-value text-primary">{stats[0].mostChoosedTopic}</div>
          </div>

          <div className="stat md:w-[360px]">
            <div className="stat-figure text-4xl text-info">
              <i className="fa-solid fa-layer-group"></i>
            </div>
            <div className="stat-title">{t('global:nav:totalQuiz')}</div>
            <div className="stat-value text-info">{stats[0].totalQuiz}</div>
          </div>
        </div>

        <div className="h-[2px] w-[100%] bg-[black] "></div>
        <div className="rotate-90deg absolute right-[50%] hidden h-[100%] w-[2px] bg-[black] md:block "></div>

        <div className="stats stats-vertical shadow md:stats-horizontal">
          <div className="stat md:w-[360px] ">
            <div className="stat-figure text-4xl text-accent">
              <i className="fa-solid fa-check"></i>
            </div>
            <div className="stat-title">{t('global:nav:correctAnswers')}</div>
            <div className="stat-value text-accent">{stats[0].correctAnswers}</div>
            <div className="stat-desc">
              {difference}% {isLessThanCorrect ? t(`global:nav:correctDescr2`) : t(`global:nav:correctDescr`)}
            </div>
          </div>
          <div className="stat w-[360px]">
            <div className="stat-figure text-4xl text-error">
              <i className="fa-solid fa-x"></i>
            </div>
            <div className="stat-title">{t('global:nav:wrongAnswers')}</div>
            <div className="stat-value text-error">{stats[0].wrongAnswers}</div>
          </div>
        </div>
      </div>
    </>
  );
}
