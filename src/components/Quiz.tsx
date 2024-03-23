import { useState } from 'react';
import { Summary } from './Summary';

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
	restartQuiz?: () => void;
}

export const Quiz = ({ questions, restartQuiz }: QuizProps) => {
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [selectedAnswer, setSelectedAnswer] = useState('');
	const [showExplanation, setShowExplanation] = useState(false);
	const [questionNumber, setQuestionNumber] = useState<number>(1);
	const [wrongAnswers, setWrongAnswers] = useState<any[]>([]);
	const [showSummary, setShowSummary] = useState<boolean>(false);

	const question = questions[currentQuestionIndex];

	

	const handleAnswerSelect = (answer: string) => {
		setSelectedAnswer(answer);
		setShowExplanation(true);
		if (answer !== question.poprawna) {
			setWrongAnswers(prevAnswers => [...prevAnswers, question]);
		}
	};

	const goToNextQuestion = () => {
		if (currentQuestionIndex < questions.length - 1) {
			setCurrentQuestionIndex(currentQuestionIndex + 1);
			setSelectedAnswer('');
			setShowExplanation(false);
			setQuestionNumber(prevNumb => prevNumb + 1);

			console.log(wrongAnswers);
		} else {
			setShowSummary(true);
		}
	};

	return (
		<>
			{!showSummary && (
				<div className='container:lg xl:bg-base-200 lg:p-16 p-4 flex flex-col gap-3 rounded-2xl'>
					<div className='lg:self-end self-center'>
						<p className='self-end'>Pytanie {questionNumber}</p>
						<progress
							className=' progress progress-success w-56 self-end'
							value={questionNumber}
							max={questions.length}
						/>
					</div>

					<div className=' lg:text-xl text-md text-start my-4 text-white'>{question.treść}</div>
					<ul className='flex flex-col gap-3 '>
						{Object.entries(question.odpowiedzi).map(([key, value]) => (
							<li
								className={`text-md  h-[50px] lg:text-xl lg:h-[70px] ${
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
						))}
					</ul>
					{showExplanation && (
						<>
							<p className='my-4 lg:text-xl text-sm text-white/80 p-2 '>{question.opis_poprawnej}</p>
							<button
								className='btn btn-[100%] lg:text-xl text-sm  btn-info '
								onClick={goToNextQuestion}>
								Następne
							</button>
						</>
					)}
				</div>
			)}
			{showSummary && (
				<Summary
					wrongAnsweredQuestionsNumber={wrongAnswers}
					currentQuizLenght={questions.length}
					restartQuiz={restartQuiz}
				/>
			)}
		</>
	);
};
