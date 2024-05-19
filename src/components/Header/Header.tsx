import { Wrapper } from '../MainLayout/Wrapper/Wrapper';
import { Link } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';
import LOGO from '../../../public/gptquizlogo.png'

export default function Header() {
  // const { t } = useTranslation();

  return (
    <>
      <header className=" flex h-screen w-screen items-center justify-center  ">
        <Wrapper>
          <img src={LOGO} className="absolute left-[50%] top-4 z-[-1] w-[700px] -translate-x-1/2" alt="" />
          <section id="home" className="hero py-20 ">
            <div className="container mx-auto text-center">
              <h1 className="text-4xl font-bold shadow-md shadow-primary ">
                Create Personalized <span className="text-primary">Quizzes</span> Easily with{' '}
                <span className="text-primary">GPT</span>
              </h1>
              <p className="mt-4 text-lg">
                Generate <span className="text-primary">quizzes</span> on any topic with adjustable difficulty and
                length in minutes<span className='text-primary'>!</span>
              </p>
              <Link to={'/form'} className="btn btn-primary my-6">
                Get Started
              </Link>
              <hr  className=''/>
              <p className='my-2'>or</p>
              <hr />
              <a className=" btn btn-primary  mt-6 " href="#how-to-learn">
                Learn how to maximize potential with GPTQuiz Builder
              </a>
            </div>
          </section>
        </Wrapper>
      </header>
    </>
  );
}
