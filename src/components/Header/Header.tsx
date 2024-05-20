import { Wrapper } from '../MainLayout/Wrapper/Wrapper';
import { Link } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';
import LOGO from '../../../public/gptquizlogo.png';

export default function Header() {
  // const { t } = useTranslation();

  return (
    <>
      <header className=" flex h-screen max-w-[100%] items-center justify-center  ">
        <Wrapper>
          <img src={LOGO} className="absolute left-[50%] max-w-[600px] top-4 z-[-1] -translate-x-1/2" alt="" />
          <section id="home" className="hero py-20 ">
            <div className="container mx-auto text-center">
              <h1 className="mx-auto mt-8 max-w-[300px] md:max-w-[600px] rounded-xl text-wrap text-3xl font-bold shadow-md shadow-primary md:text-5xl ">
                Create Personalized <span className="text-primary">Quizzes</span> easily with{' '}
                <span className="text-primary">GPT</span>
              </h1>
              <p className="mx-auto mt-6 max-w-[300px] md:max-w-[500px] text-lg md:text-xl ">
                Generate <span className="text-primary">quizzes</span> on any topic with adjustable difficulty and
                length in minutes<span className="text-primary">!</span>
              </p>
              <Link
                to={'/form'}
                className="btn btn-primary  my-6 w-[280px] font-normal md:mt-12 md:h-[80px] md:text-xl"
              >
                Get Started
              </Link>

              <p className="divider divider-primary max-w-[100%]">OR</p>

              <a
                className=" btn  btn-primary -mb-12   mt-6 max-w-[280px] font-normal md:h-[100px] md:text-xl"
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
