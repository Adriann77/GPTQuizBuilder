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
        className="fixed z-[-1] top-0 h-[100%]  w-[100%] overflow-hidden"
        style={{
          background: `linear-gradient(45deg, rgba(0,0,.0,.7) 0%, rgba(0,0,10,.9) 35%, rgba(0,0,255,.2) 100%`,
        }}
      >
        <BgLayout1 />
      </div>

      <main>
        <div className="poppins mt-[6vh] flex min-h-[85vh]   flex-col my-6  items-center justify-center  text-white  ">
          {children}
          <Outlet />
        </div>
      </main>

      <Footer />
    </>
  );
};
