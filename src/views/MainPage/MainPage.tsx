import { useState } from 'react';
import { QuizFetcher } from '../../components/QuizFetcher';
import { FormComponent } from '../../components/FormComponent';
import { Header } from '../../components/Header';
import { MainLayout } from '../../components/MainLayout';

export const MainPage = () => {
	const [quizParams, setQuizParams] = useState({ genre: '', diff: '', length: 0 });
	const [isFormShown, setIsFormShown] = useState<boolean>(true);

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
