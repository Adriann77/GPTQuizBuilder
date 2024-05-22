import { Wrapper } from '../MainLayout/Wrapper/Wrapper';
import { Link } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';
import LOGO from '/gptquizlogo.png';

export default function Header() {
  // const { t } = useTranslation();

  return (
    <>
      <header className=" flex h-screen max-w-[100%] items-center justify-center  ">
        <Wrapper>
          <header id="home" className="hero -mt-10">
            <div className="container mx-auto text-center">
              <div className='relative'>
                <img
                  src={LOGO}
                  className="absolute left-[50%] -bottom-5  z-[-1] w-[300px] -translate-x-1/2 "
                  alt=""
                />
                <h1 className="mx-auto mt-4 max-w-[300px] text-wrap rounded-xl text-3xl font-bold shadow-md shadow-primary md:max-w-[600px] md:text-5xl ">
                  Create Personalized <span className="text-primary">Quizzes</span> easily with{' '}
                  <span className="text-primary">GPT</span>
                </h1>
              </div>
              <p className="mx-auto my-6 max-w-[300px] text-lg md:max-w-[500px] md:text-xl ">
                Generate <span className="text-primary">quizzes</span> on any topic with adjustable difficulty and
                length in minutes<span className="text-primary">!</span>
              </p>
              <Link to={'/form'} className="btn btn-primary  w-[280px]  md:mt-12 md:h-[80px] md:text-">
                Get Started
              </Link>
              <p className="divider divider-primary max-w-[100%]">OR</p>
              <a
                className=" btn  btn-primary btn-outline -mb-12  max-w-[280px]  md:h-[100px] md:text-lg"
                href="#how-to-learn"
              >
                Learn how to maximize GPT-QuizBuilder potential
              </a>
            </div>
          </header>
        </Wrapper>
      </header>
    </>
  );
}
