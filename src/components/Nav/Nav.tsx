import { Wrapper } from '../Wrapper/Wrapper';
import { NavLink } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher';
import LOGO_ICON from '../../../public/gptquizlogo.png';
import Hamburger from '../Hamburger/Hamburger';
import { useState } from 'react';

export const Nav = () => {
  // const { t } = useTranslation();
  const [isActive, setIsActive] = useState(false);
  console.log(isActive);

  return (
    <>
      <nav className="navbar fixed top-0 z-10 bg-[#1A202C] ">
        <Wrapper>
          <div className="flex w-screen justify-between">
            <div className="flex-1 ">
              <NavLink to={'/'} className="btn btn-ghost relative ml-5 text-sm lg:text-2xl">
                <img
                  src={LOGO_ICON}
                  className="absolute -left-[60px] -top-5 w-[90px] md:-left-[80px] md:w-[130px] "
                  alt="logo"
                />
                GPT-QuizBuilder
              </NavLink>
            </div>
            <div className="hidden md:flex">
              <LanguageSwitcher />

              <NavLink className="btn btn-outline btn-primary ml-3 mr-3 text-center" to={'form'}>
                {' '}
                Stwórz nowy quiz <i className="fa-solid fa-circle-plus text-2xl"></i>
              </NavLink>
              <NavLink className="btn btn-outline btn-primary text-center" to={'stats'}>
                {' '}
                Pokaz statystyki <i className="fa-solid fa-chart-simple text-2xl"></i>
              </NavLink>
            </div>
            <div className="md:hidden">
              <Hamburger active={(active: boolean) => setIsActive(active)} />
              {isActive && (
                <div
                  className={`absolute left-0 top-[9vh] flex h-[23vh] w-[100%]  
                 flex-col gap-3 bg-[#1A202C] p-4 duration-300 ${isActive ? 'translate-y-0' : '-translate-y-[300px]'}`}
                >
                  <NavLink className="btn btn-outline btn-primary mr-3 w-[100%] text-center" to={'form'}>
                    {' '}
                    Stwórz nowy quiz <i className=" fa-solid fa-circle-plus text-2xl"></i>
                  </NavLink>
                  <div className="flex justify-center gap-3">
                    <div className=" w-[40%]">
                      <LanguageSwitcher />
                    </div>
                    <NavLink className="btn btn-outline btn-primary  w-[59%] text-center" to={'stats'}>
                      {' '}
                      Pokaz statystyki <i className="fa-solid fa-chart-simple text-2xl"></i>
                    </NavLink>
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* <button
              className="btn btn-primary w-[100px] text-xs"
              //@ts-ignore
              onClick={() => document.getElementById('my_modal_3').showModal()}
            >
              {t('global:loginBtn')}
            </button>
          </div>
          <dialog id="my_modal_3" className="modal backdrop-blur-sm ">
            <div className="modal-box">
              <form method="dialog">
                <button className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2 ">✕</button>
              </form>
              {isLoginFormShown ? (
                <LoginForm changeViewToRegister={changeViewToRegister} />
              ) : (
                <RegisterForm changeViewToLogin={changeViewToLogin} />
              )}
            </div>
          </dialog> */}
        </Wrapper>
      </nav>
    </>
  );
};
