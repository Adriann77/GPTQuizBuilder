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
        className="fixed top-0 z-[-1] h-[100%]  w-[100%] overflow-hidden"
        style={{
          background: `linear-gradient(45deg, rgba(0,0,.0,.7) 0%, rgba(0,0,10,.9) 35%, rgba(0,0,255,.2) 100%`,
        }}
      >
        <BgLayout1 />
      </div>

      <main>
        <div className="poppins my-6  flex mt-[6.3vh] min-h-[84.5vh]  flex-col  items-center justify-center  text-white  ">
          {children}
          <Outlet />
        </div>
      </main>

      <Footer />
    </>
  );
};
