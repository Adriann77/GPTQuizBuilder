import { useState } from 'react';
import { MainLayout } from './components/MainLayout/MainLayout';

import { Header } from './components/Header/Header';
import { QuizFetcher } from './components/QuizFetcher/QuizFetcher';
import { Footer } from './components/Footer/Footer';
import { Form } from './components/Form/Form';

import './i18n'


function App() {
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
				
				
					<Header />
					{isFormShown && <Form  updateQuizParams={getData} />}
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
}

export default App;
