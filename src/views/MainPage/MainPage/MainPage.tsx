import { useState } from 'react';
import { QuizFetcher } from '../../../components/QuizFetcher/QuizFetcher';
import { Form } from '../../../components/Form/Form';
import { Header } from '../../../components/Header/Header';
import { MainLayout } from '../../../components/MainLayout/MainLayout';
import { Footer } from '../../../components/Footer/Footer';
import { LanguageSwitcher } from '../../../components/LanguageSwitcher/LanguageSwitcher';

export const MainPage = () => {
	const [quizParams, setQuizParams] = useState({ genre: '', diff: '', length: 0 });
	const [isFormShown, setIsFormShown] = useState<boolean>(true);

	const getData = (genre: string, diff: string, length: number) => {
		if (genre && diff !== '' && length > 0) {
			setQuizParams({ genre, diff, length });
			setIsFormShown(false);
		}
	};

	const restartQuiz = () => {
		setIsFormShown(true);
	};

	return (
		<>
			<MainLayout>
				<LanguageSwitcher />
				<Header />
				{isFormShown && <Form userAnswer={getData} />}
				{!isFormShown && (
					<QuizFetcher
						restartQuiz={restartQuiz}
						data={quizParams}
					/>
				)}
			</MainLayout>
			<Footer />
		</>
	);
};
