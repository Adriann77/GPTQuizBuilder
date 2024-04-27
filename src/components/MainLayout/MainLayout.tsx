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
        className="absolute z-[-1] h-[86vh] w-screen overflow-hidden"
        style={{
          background: `linear-gradient(90deg, rgba(2,0,.6,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,.5) 100%`,
        }}
      >
        <BgLayout1 />
      </div>

      <main>
        <div className="poppins mt-[6vh] flex min-h-[86vh]  w-screen flex-col   items-center justify-center  text-white  ">
          {children}
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
};
