import { Wrapper } from '../Wrapper/Wrapper';
import { NavLink } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher';
import LOGO_ICON from '../../../public/gptquizlogo.png';
import Hamburger from '../Hamburger/Hamburger';

export const Nav = () => {
  // const { t } = useTranslation();

  return (
    <>
      <nav className="navbar fixed top-0 z-10 bg-[#1A202C] ">
        <Wrapper>
          <div className="flex w-screen justify-between">
            <div className="flex-1 ">
              <NavLink to={'/'} className="btn btn-ghost relative ml-5 text-sm lg:text-2xl">
                <img src={LOGO_ICON} className="absolute -left-[60px] -top-5 w-[90px] md:w-[130px] " alt="logo" />
                GPT-QuizBuilder
              </NavLink>
            </div>
            <div className="hidden md:flex">
              <LanguageSwitcher />

              <NavLink className="btn btn-outline btn-primary mr-3 text-center" to={'form'}>
                {' '}
                Stwórz nowy quiz <i className="fa-solid fa-circle-plus text-2xl"></i>
              </NavLink>
              <NavLink className="btn btn-outline btn-primary text-center" to={'stats'}>
                {' '}
                Pokaz statystyki <i className="fa-solid fa-chart-simple text-2xl"></i>
              </NavLink>
            </div>
            <div className="">
              <Hamburger/>
              <div>

                {/* <LanguageSwitcher />
                <NavLink className="btn btn-outline btn-primary mr-3 text-center" to={'form'}>
                  {' '}
                  Stwórz nowy quiz <i className="fa-solid fa-circle-plus text-2xl"></i>
                </NavLink>
                <NavLink className="btn btn-outline btn-primary text-center" to={'stats'}>
                  {' '}
                  Pokaz statystyki <i className="fa-solid fa-chart-simple text-2xl"></i>
                </NavLink> */}
              </div>
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
