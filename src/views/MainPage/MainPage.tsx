
import { Header } from '../../components/Header/Header';
import { Input } from '../../components/Input/Input';
import { MainLayout } from '../../components/MainLayout/MainLayout';

export const MainPage = () => {
	return (
		<MainLayout>
            <Header />
                  <Input label='Podaj dziedzine quizu:'></Input> 
		</MainLayout>
	);
};
