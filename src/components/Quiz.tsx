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
		<div className='container bg-base-200 p-16 flex flex-col gap-3 rounded-2xl'>
			<div className='self-end'>
				<p className='self-end'>Pytanie {questionNumber}</p>
				<progress
					className=' progress progress-success w-56 self-end'
					value={questionNumber}
					max={questions.length}
				/>
			</div>

			<div className='m text-xl text-start my-4 text-white/80'>{question.treść}</div>
			<ul className='flex flex-col gap-3 '>
				{Object.entries(question.odpowiedzi).map(([key, value]) => (
					<>
						<li
							className={`text-lg h-[80px] ${
								showExplanation
									? key === question.poprawna
										? 'btn btn-success cursor-default'
										: selectedAnswer === key
										? 'btn btn-error cursor-default'
										: 'btn cursor-default btn-neutral'
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
					<p className='my-4 text-xl text-white/80 p-2 '>{question.opis_poprawnej}</p>
					<button
						className='btn btn-[100%] text-xl  btn-info '
						onClick={goToNextQuestion}>
						Następne
					</button>
				</>
			)}
		</div>
	);
};
