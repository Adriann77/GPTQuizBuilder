import { useEffect, useState } from 'react';
import { stats } from '../../constants/stats';

export default function Stats() {
  const [difference, setDifference] = useState(0);

  useEffect(() => {
    const correctAnswers = stats[0].correctAnswers;
    const wrongAnswers = stats[0].wrongAnswers;

    if (correctAnswers + wrongAnswers > 0 && correctAnswers > wrongAnswers) {
      const xdee = ((correctAnswers - wrongAnswers) / (correctAnswers + wrongAnswers)) * 100;
      const finalDiff = Math.round(xdee);
      setDifference(finalDiff);
    }
  }, []);

  return (
    <div className=" relative flex flex-col rounded-xl bg-[#1d232a]">
      <div className="stats stats-vertical shadow md:stats-horizontal">
        <div className="stat md:w-[300px]">
          <div className="stat-figure text-4xl text-primary">
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <div className="stat-title">Most choosed </div>
          <div className="stat-value text-primary">{stats[0].mostChoosedTopic}</div>
        </div>
        <div className="stat md:w-[300px]">
          <div className="stat-figure text-4xl text-info">
            <i className="fa-solid fa-chart-simple"></i>
          </div>
          <div className="stat-title">Total quizes</div>
          <div className="stat-value text-info">{stats[0].totalQuiz}</div>
          <div className="stat-desc">For last 30 days average 5 per day</div>
        </div>
      </div>

      <div className="h-[2px] w-[100%] bg-[black] "></div>
      <div className="rotate-90deg absolute right-[50%] hidden h-[100%] w-[2px] bg-[black] md:block "></div>

      <div className="stats stats-vertical shadow md:stats-horizontal">
        <div className="stat md:w-[300px] ">
          <div className="stat-figure text-4xl text-accent">
            <i className="fa-solid fa-check"></i>
          </div>
          <div className="stat-title">Correct answers</div>
          <div className="stat-value text-accent">{stats[0].correctAnswers}</div>
          <div className="stat-desc">{difference}% more than wrong answers</div>
        </div>
        <div className="stat w-[300px]">
          <div className="stat-figure text-4xl text-error">
            <i className="fa-solid fa-x"></i>
          </div>
          <div className="stat-title">Wrong answers</div>
          <div className="stat-value text-error">{stats[0].wrongAnswers}</div>
        </div>
      </div>
    </div>
  );
}
