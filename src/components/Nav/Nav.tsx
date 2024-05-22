import { Wrapper } from '../MainLayout/Wrapper/Wrapper';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './LanguageSwitcher/LanguageSwitcher';
import LOGO_ICON from '/gptquizlogo.png';
import Hamburger from './Hamburger/Hamburger';
import { useState } from 'react';

export const Nav = () => {
  const { t } = useTranslation();
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <nav className="navbar fixed top-0 z-10 bg-[#1A202C] ">
        <Wrapper>
          <div className="flex w-screen justify-between">
            <div className="flex-1 ">
              <NavLink
                to={'/'}
                className="btn btn-ghost relative ml-8 text-sm lg:text-2xl"
                onClick={() => setIsActive(false)}
              >
                <img
                  src={LOGO_ICON}
                  className="absolute -left-[55px] -top-4 w-[90px] md:-left-[80px] md:w-[130px] "
                  alt="logo"
                />
                GPT-QuizBuilder
              </NavLink>
            </div>
            <div className="hidden md:flex">
              <LanguageSwitcher />

              <NavLink className="btn btn-outline btn-primary ml-3 mr-3 text-center" to={'form'}>
                {' '}
                {t('global:nav:createNewQuiz')} <i className="fa-solid fa-circle-plus text-2xl"></i>
              </NavLink>
              <NavLink className="btn btn-outline btn-primary text-center" to={'stats'}>
                {' '}
                {t('global:nav:showStats')} <i className="fa-solid fa-chart-simple text-2xl"></i>
              </NavLink>
            </div>
            <div className="md:hidden">
              <Hamburger active={isActive} setActive={setIsActive} />
              {isActive && (
                <div
                  className={`absolute left-0 top-[60px] flex  w-[100%]  
                 flex-col gap-3 bg-[#1A202C] p-4 duration-300 `}
                >
                  <NavLink
                    className="btn btn-outline btn-primary mr-3 w-[100%] text-center"
                    to={'form'}
                    onClick={() => setIsActive(false)}
                  >
                    {' '}
                    Stwórz nowy quiz <i className=" fa-solid fa-circle-plus text-2xl"></i>
                  </NavLink>
                  <div className="flex justify-center gap-3">
                    <div className=" w-[40%]">
                      <LanguageSwitcher />
                    </div>
                    <NavLink
                      className="btn btn-outline btn-primary  w-[59%] text-center"
                      to={'stats'}
                      onClick={() => setIsActive(false)}
                    >
                      {' '}
                      Pokaz statystyki <i className="fa-solid fa-chart-simple text-2xl"></i>
                    </NavLink>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Wrapper>
      </nav>
    </>
  );
};
