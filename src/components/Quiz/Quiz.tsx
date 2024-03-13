import styles from './Quiz.module.scss';
import { useState } from 'react';

interface Question {
	treść: string;
	odpowiedzi: {
		a: string;
		b: string;
		c: string;
		d: string;
	};
	poprawna: keyof Question['odpowiedzi'];
	opis_poprawnej?: string;
}

interface QuizProps {
	questions: Question[];
}

export const Quiz = ({ questions }: QuizProps) => {
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [selectedAnswer, setSelectedAnswer] = useState('');
	const [showExplanation, setShowExplanation] = useState(false);

	const question = questions[currentQuestionIndex];

	const handleAnswerSelect = (answer: string) => {
		setSelectedAnswer(answer);
		setShowExplanation(true);
	};

	const goToNextQuestion = () => {
		if (currentQuestionIndex < questions.length - 1) {
			setCurrentQuestionIndex(currentQuestionIndex + 1);
			setSelectedAnswer('');
			setShowExplanation(false);
		} else {
			alert('Koniec quizu!');
		}
	};

	return (
		<div className={styles.quizContainer}>
			<div className={styles.questionHeading}>{question.treść}</div>
			<ul>
				{Object.entries(question.odpowiedzi).map(([key, value]) => (
					<li
						className={`${
							showExplanation
								? key === question.poprawna
									? styles.questionCorrectGuess
									: selectedAnswer === key
									? styles.questionCorrectBad
									: styles.questionCorrectBad
								: styles.question
						} `}
						key={key}
						onClick={() => !showExplanation && handleAnswerSelect(key)}>
						{value}
					</li>
				))}
			</ul>
			{showExplanation && (
				<>
					<p>{question.opis_poprawnej}</p>
					<button onClick={goToNextQuestion}>Następne pytanie</button>
				</>
			)}
		</div>
	);
};
