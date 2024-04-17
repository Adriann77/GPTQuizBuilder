import { Footer } from "../Footer/Footer";
import {  Nav } from "../Nav/Nav";
import '../../i18n'
import { Outlet } from "react-router-dom";

export const MainLayout = ({ children }: React.PropsWithChildren) => {
	return (
		<div className='flex min-h-[91vh] items-center justify-center mt-[3vh]  bg-[#263238] flex-col poppins text-white '>
			{children}
			<Nav  />
			<Outlet/>
			<Footer />
		</div>
	);
};
