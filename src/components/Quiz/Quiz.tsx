import { FullWidthButton } from '../FullWidthButton/FullWidthButton';
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
	const [questionNumber, setQuestionNumber] = useState<number>(1);

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
			setQuestionNumber(prevNumb => prevNumb + 1);
		} else {
			alert('Koniec quizu!');
		}
	};

	return (
		<div className={styles.quizContainer}>
			<p className={styles.questionNumber}>Pytanie {questionNumber}</p>
			<div className={styles.questionHeading}>{question.treść}</div>
			<ul>
				{Object.entries(question.odpowiedzi).map(([key, value]) => (
					<>
						<li
							className={`${
								showExplanation
									? key === question.poprawna
										? styles.questionCorrectGuess
										: selectedAnswer === key
										? styles.questionCorrectBad
										: styles.questionRest
									: styles.question
							} `}
							key={key}
							onClick={() => !showExplanation && handleAnswerSelect(key)}>
							{value}
						</li>
					</>
				))}
			</ul>
			{showExplanation && (
				<>
					<p className={styles.questionDescription}>{question.opis_poprawnej}</p>
					<FullWidthButton onClick={goToNextQuestion}> Następne pytanie</FullWidthButton>
				</>
			)}
		</div>
	);
};
