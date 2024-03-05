import { Header } from '../../components/Header/Header';
import { Input } from '../../components/Input/Input';
import { InputSelect } from '../../components/InputSelect/InputSelect';
import { MainLayout } from '../../components/MainLayout/MainLayout';

export const MainPage = () => {
	return (
		<MainLayout>
			<Header />
			<Input
				popup='Np: Biologia, Chemia, JavaScript, Python'
				label='Podaj dziedzine quizu:'></Input>
			<InputSelect popup='Wybrany poziom odpowiada za poziom zaawansowania i trudność pytań w quizie' />
		</MainLayout>
	);
};
