import { FormComponent } from '../../components/FormComponent';
import { Header } from '../../components/Header/Header';
import { MainLayout } from '../../components/MainLayout/MainLayout';

let userChooseDiff;
let userChooseGenre;
let userChooseLenght;

export const MainPage = () => {
	const getData = (genre: string, diff: string, lenght: number) => {
		console.log(genre, diff, lenght);
		userChooseGenre = genre;
		userChooseDiff = diff;
		userChooseLenght = lenght;
	};

	const sendData = () => {
		sendData;
	};

	return (
		<MainLayout>
			<Header />
			<FormComponent userAnswer={getData} />
		</MainLayout>
	);
};
