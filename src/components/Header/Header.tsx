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
          <img src={LOGO} className="absolute left-[50%] top-12 z-[-1] w-[700px] -translate-x-1/2" alt="" />
          <section id="home" className="hero py-20 ">
            <div className="container mx-auto text-center">
              <h1 className="text-4xl font-bold ">Create Personalized Quizzes Easily with GPT</h1>
              <p className="mt-4 text-lg">
                Generate quizzes on any topic with adjustable difficulty and length in minutes!
              </p>
              <Link to={'/form'} className="btn btn-primary mt-6">
                Get Started
              </Link>
              <a className="absolute bottom-16 left-1/2 -translate-x-1/2" href="#how-to-learn">
                How to Maximize your learning potential with GPTQuiz Builder
              </a>
            </div>
          </section>
        </Wrapper>
      </header>
    </>
  );
}
