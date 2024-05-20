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
              <h1 className="mx-auto max-w-[600px] text-4xl mt-8 font-bold shadow-md shadow-primary md:text-5xl p-3 rounded-xl ">
                Create Personalized <span className="text-primary">Quizzes</span> easily with{' '}
                <span className="text-primary">GPT</span>
              </h1>
              <p className="mt-4 text-lg md:text-xl">
                Generate <span className="text-primary">quizzes</span> on any topic with adjustable difficulty and
                length in minutes<span className="text-primary">!</span>
              </p>
              <Link to={'/form'} className="btn btn-primary  my-6 md:mt-12 md:h-[80px] w-[280px] font-normal md:text-xl">
                Get Started
              </Link>

              <p className="divider divider-primary">OR</p>

              <a
                className=" btn  btn-primary   mt-6 md:h-[100px] max-w-[280px] font-normal md:text-xl"
                href="#how-to-learn"
              >
                Learn how to maximize GPT-QuizBuilder potential
              </a>
            </div>
          </section>
        </Wrapper>
      </header>
    </>
  );
}
