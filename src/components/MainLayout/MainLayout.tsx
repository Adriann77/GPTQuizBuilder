import { Footer } from '../Footer/Footer';
import { Nav } from '../Nav/Nav';
import '../../i18n';
import { Outlet } from 'react-router-dom';

export const MainLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <Nav />
      <main>
        <div className="poppins flex min-h-[92vh]  w-screen flex-col   items-center justify-center bg-[#263238] text-white  ">
          {children}

          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
};
