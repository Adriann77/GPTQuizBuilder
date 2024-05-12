import { stats } from '../constants/stats';

export default function StatsPage() {
  return (
    <>
      <div className=" relative flex flex-col bg-[#1d232a] rounded-xl">
        <div className="stats shadow">
          <div className="stat w-[300px]">
            <div className="stat-figure text-4xl text-primary">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className="stat-title">Most choosed </div>
            <div className="stat-value text-primary">{stats[0].mostChoosedTopic}</div>
            <div className="stat-desc">21% more than others</div>
          </div>
          <div className="stat w-[300px]">
            <div className="stat-figure text-4xl text-info">
              <i className="fa-solid fa-chart-simple"></i>
            </div>
            <div className="stat-title">Total quizes</div>
            <div className="stat-value text-info">{stats[0].totalQuiz}</div>
            <div className="stat-desc">For last 30days average 5 per day</div>
          </div>
        </div>

        <div className="h-[2px] w-[100%] bg-[black] "></div>
        <div className="h-[100%] w-[2px] rotate-90deg absolute right-[50%] bg-[black] "></div>


        <div className="stats shadow">
          <div className="stat w-[300px]">
            <div className="stat-figure text-4xl text-accent">
              <i className="fa-solid fa-check"></i>
            </div>
            <div className="stat-title">Correct answers</div>
            <div className="stat-value text-accent">{stats[0].correctAnswers}</div>
            <div className="stat-desc">41% more than wrong</div>
          </div>
          <div className="stat w-[300px]">
            <div className="stat-figure text-4xl text-error">
              <i className="fa-solid fa-x"></i>
            </div>
            <div className="stat-title">Wrong answers</div>
            <div className="stat-value text-error">{stats[0].wrongAnswers}</div>
            <div className="stat-desc">You can be better if u dont make mistakes</div>
          </div>
        </div>
      </div>
    </>
  );
}
