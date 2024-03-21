
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
		<div className='container flex flex-col gap-3'>
			<p>Pytanie {questionNumber}</p>
			<progress
				className=' progress progress-primary w-56'
				value={questionNumber}
				max={questions.length}></progress>

			<div>{question.treść}</div>
			<ul className='flex flex-col gap-3'>
				{Object.entries(question.odpowiedzi).map(([key, value]) => (
					<>
						<li
							className={`${
								showExplanation
									? key === question.poprawna
										? 'btn btn-success'
										: selectedAnswer === key
										? 'btn btn-warning'
										: 'btn'
									: 'btn btn-primary'
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
					<p>{question.opis_poprawnej}</p>
					<button
						className='btn btn-wide btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-outline btn-info'
						onClick={goToNextQuestion}>
						Następne
					</button>
				</>
			)}
		</div>
	);
};
