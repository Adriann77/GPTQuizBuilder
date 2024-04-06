import { Footer } from '../components/Footer/Footer';
import { LanguageSwitcher } from '../components/LanguageSwitcher/LanguageSwitcher';

import { LoginForm } from '../components/LoginForm/LoginForm';
import { MainLayout } from '../components/MainLayout/MainLayout';

export const Login = () => {
	return (
		<>
				<LanguageSwitcher />
			<MainLayout>
				<LoginForm />
				<Footer />
			</MainLayout>
		</>
	);
};
