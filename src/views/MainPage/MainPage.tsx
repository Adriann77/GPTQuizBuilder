import { useState } from 'react';
import { QuizFetcher } from '../../API/QuizFetcher';
import { FormComponent } from '../../components/FormComponent';
import { Header } from '../../components/Header/Header';
import { MainLayout } from '../../components/MainLayout/MainLayout';


export const MainPage = () => {
	const [quizParams, setQuizParams] = useState({ genre: '', diff: '', length: 0 });
	const [isFormShown, setIsFormShown] = useState<boolean>(true);
	const [quizData, setQuizData] = useState(null);
	const [error, setError] = useState(null);

	const getData = (genre: string, diff: string, length: number) => {
		if (genre && diff !== '' && length > 0) {
			setQuizParams({ genre, diff, length });
			setIsFormShown(false);
		}
	};

	return (
		<MainLayout>
			<Header />
			{isFormShown && <FormComponent userAnswer={getData} />}
			{!isFormShown && <QuizFetcher data={quizParams} />}
		</MainLayout>
	);
};
