import { Footer } from '../Footer/Footer';
import { Nav } from '../Nav/Nav';
import '../../i18n';
import { Outlet } from 'react-router-dom';
import BgLayout1 from '../Background/BgLayout1';

export const MainLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <Nav />
      <div
        className="fixed z-[-1] h-[91vh]  w-[100%] overflow-hidden"
        style={{
          background: `linear-gradient(90deg, rgba(2,0,.6,.7) 0%, rgba(9,9,121,.7) 35%, rgba(0,212,255,.1) 100%`,
        }}
      >
        <BgLayout1 />
      </div>

      <main>
        <div className="poppins mt-[6vh] flex min-h-[89vh]   flex-col   items-center justify-center  text-white  ">
          {children}
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
};
