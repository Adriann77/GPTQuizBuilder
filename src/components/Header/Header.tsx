import { Wrapper } from '../MainLayout/Wrapper/Wrapper';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LOGO from '/gptquizlogo.png';

export default function Header() {
  const { t } = useTranslation();

  return (
    <>
      <header className=" flex h-screen max-w-[100%] items-center justify-center  ">
        <Wrapper>
          <header id="home" className="hero -mt-10">
            <div className="container mx-auto text-center">
              <div className="relative">
                <img src={LOGO} className="absolute -bottom-5 left-[50%]  z-[-1] w-[300px] -translate-x-1/2 " alt="" />
                <h1 className="mx-auto mt-4 max-w-[300px] text-wrap rounded-xl text-3xl font-bold shadow-md shadow-primary md:max-w-[600px] md:text-5xl ">
                  {t('global:landingPage:headerOne')}
                  <span className="text-primary">{t('global:landingPage:quizzes')}</span>{' '}
                  {t('global:landingPage:headerTwo')} <span className="text-primary">GPT</span>
                </h1>
              </div>
              <p className="mx-auto my-6 max-w-[300px] text-lg md:max-w-[500px] md:text-xl ">
                {t('global:landingPage:descriptionOne')}
                <span className="text-primary">{t('global:landingPage:quizzes')}</span>{' '}
                {t('global:landingPage:descriptionTwo')}
                <span className="text-primary">!</span>
              </p>
              <Link to={'/form'} className="md:text- btn  btn-primary  w-[280px] md:mt-12 md:h-[80px]">
                {t('global:nav:createNewQuiz')}
              </Link>
              <p className="divider divider-primary max-w-[100%]">{t('global:landingPage:or')}</p>
              <a
                className=" btn  btn-outline btn-primary -mb-12  max-w-[280px]  md:h-[100px] md:text-lg"
                href="#how-to-learn"
              >
                {t('global:landingPage:learnHowToBtn')}
              </a>
            </div>
          </header>
        </Wrapper>
      </header>
    </>
  );
}
