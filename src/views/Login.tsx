import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { MainLayout } from '../components/MainLayout/MainLayout';

export const Login = () => {
	return (
		<>
			<MainLayout>
				<Header showLogin={false} />

				<Footer />
			</MainLayout>
		</>
	);
};
