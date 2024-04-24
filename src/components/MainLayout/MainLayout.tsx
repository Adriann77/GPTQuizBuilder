import { Footer } from '../Footer/Footer';
import { Nav } from '../Nav/Nav';
import '../../i18n';
import { Outlet } from 'react-router-dom';
import questionMark from '../../assets/bgimage.jpg';

export const MainLayout = ({ children }: React.PropsWithChildren) => {
	return (
		<>
			<Nav />
			<main>
				<div
					className='flex min-h-[92vh] items-center  w-screen justify-center   bg-[#263238] flex-col poppins text-white bg-contain bg-center bg-no-repeat '
					>
					{children}

					<Outlet />
				</div>
			</main>
			<Footer />
		</>
	);
};
