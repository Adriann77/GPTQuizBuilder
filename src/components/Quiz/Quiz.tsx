import { useState, useEffect } from 'react';
import styles from './Quiz.module.scss';

export const Quiz = ({ quiz }: any) => {
	const [isQuiz, setIsQuiz] = useState<any>(null);

	useEffect(() => {
		if (quiz && quiz.length > 0 && quiz[0].hasOwnProperty('treść')) {
			setIsQuiz(quiz);
		}
	}, [quiz]);

	if (!isQuiz) {
		return <p>Ładowanie quizu lub brak danych...</p>;
	}

	return (
		<>
			<div className={styles.quizContainer}>
				{isQuiz.map((pytanie: any, index: number) => (
					<div key={index}>
						<p className={styles.questionHeading}>
							{index +1}. {''}
							{pytanie.treść}
						</p>
						<ul>
							{Object.keys(pytanie.odpowiedzi).map((odpowiedz, index) => (
								<li
									className={styles.questionAnswers}
									key={index}>{`${odpowiedz}: ${pytanie.odpowiedzi[odpowiedz]}`}</li>
							))}
						</ul>
						<p className={styles.correctAnswer1}>Poprawna odpowiedź: {pytanie.poprawna}</p>
						<p className={styles.correctAnswer}>Opis poprawnej odpowiedzi: {pytanie.opis_poprawnej}</p>
					</div>
				))}
			</div>
		</>
	);
};
