import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import '../../i18n'
import { Outlet } from "react-router-dom";

export const MainLayout = ({ children }: React.PropsWithChildren) => {
	return (
		<div className='flex h-[90vh] items-center justify-center mt-[3vh]  bg-[#263238] flex-col poppins text-white '>
			{children}
			<Header  />

			<Outlet/>
			<Footer />
		</div>
	);
};
