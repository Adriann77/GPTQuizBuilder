import { Wrapper } from '../Wrapper/Wrapper';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Header() {
  const { t } = useTranslation();
  return (
    <>
      <header className=" w-screen  ">
        <Wrapper>
          <div className="my-5 flex flex-col gap-6 p-2 ">
            <div className=" flex flex-col items-center justify-center ">
              <h1 className="text-center  text-2xl lg:text-4xl">{t('global:landingPage:header')}</h1>
              <p className="m-6 max-w-[800px] text-center text-xs lg:text-lg">{t('global:landingPage:description')}</p>

              <Link
                to={'/form'}
                className=" btn btn-primary   mx-auto my-2 max-w-[300px] lg:h-[80px] lg:w-[100%] lg:text-xl"
              >
                {t('global:landingPage:createQuizBtn')}
              </Link>
            </div>
            <div className="flex h-[100%]  flex-col items-center justify-center text-sm lg:text-lg">
              <h2 className="text-md text-center lg:text-2xl ">{t('global:landingPage:whyWorth')}</h2>
              <ul className="mt-4 flex flex-wrap gap-2 text-center">
                <li className="w-[48%]">
                  <i className="fa-solid fa-puzzle-piece m-2"></i>
                  {t('global:landingPage:one')}
                </li>
                <li className="w-[48%]">
                  <i className="fa-regular fa-object-group m-2"></i> {t('global:landingPage:two')}
                </li>
                <li className="w-[48%]">
                  {' '}
                  <i className="fa-regular fa-comments m-2"></i> {t('global:landingPage:three')}
                </li>
                <li className="w-[48%]">
                  {' '}
                  <i className="fa-solid fa-eraser m-2"></i> {t('global:landingPage:four')}
                </li>
              </ul>
            </div>
          </div>
        </Wrapper>
      </header>
    </>
  );
}
