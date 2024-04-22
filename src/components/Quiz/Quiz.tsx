import { useState } from 'react';
import { Summary } from '../Summary/Summary';
import { useTranslation } from 'react-i18next';

interface Question {
	content: string;
	answers: {
		a: string;
		b: string;
		c: string;
		d: string;
	};
	correct: keyof Question['answers'];
	description_correct?: string;
}

interface QuizProps {
	questions: Question[];
	restartQuiz: () => void;
}

export const Quiz = ({ questions, restartQuiz }: QuizProps) => {
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [selectedAnswer, setSelectedAnswer] = useState('');
	const [showExplanation, setShowExplanation] = useState(false);
	const [questionNumber, setQuestionNumber] = useState<number>(1);
	const [wrongAnswers, setWrongAnswers] = useState<any[]>([]);
	const [showSummary, setShowSummary] = useState<boolean>(false);

	const question = questions[currentQuestionIndex];

	const { t } = useTranslation();

	const handleAnswerSelect = (answer: string) => {
		setSelectedAnswer(answer);
		setShowExplanation(true);
		if (answer !== question.correct) {
			setWrongAnswers(prevAnswers => [...prevAnswers, question]);
		}
	};

	const goToNextQuestion = () => {
		if (currentQuestionIndex < questions.length - 1) {
			setCurrentQuestionIndex(currentQuestionIndex + 1);
			setSelectedAnswer('');
			setShowExplanation(false);
			setQuestionNumber(prevNumb => prevNumb + 1);
		} else {
			setShowSummary(true);
		}
	};

	return (
		<>
			{!showSummary && (
				<div className='container:sm relative xl:bg-[#1A202C] mt-5  lg:p-10 p-4 flex flex-col gap-1 rounded-2xl'>
					<div className='lg:self-end self-center text-white'>
						<p className='absolute top-0 right-6 '>
							{t('global:questionNumber')} {questionNumber}
						</p>
					</div>

					<div className=' lg:text-xl text-md text-center my-4 text-warning'>{question.content}</div>
					<ul className='flex flex-col gap-3'>
						{Object.entries(question.answers).map(([key, value]) => (
							<li
								className={`text-md  h-[60px] lg:text-lg lg:h-[70px]   w-[80%]  my-0 mx-auto  ${
									showExplanation
										? key === question.correct
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
							<p className='my-4 mx-auto lg:text-xl text-center text-lg text-white p-2 max-w-[600px] '>
								{question.description_correct}
							</p>
							<button
								className='btn btn-[100%] lg:text-lg h-[70px] text-sm  btn-primary '
								onClick={goToNextQuestion}>
								{t('global:nextQuestion')}
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
