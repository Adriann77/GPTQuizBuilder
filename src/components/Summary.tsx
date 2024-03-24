import { useState } from 'react';
import { Quiz } from './Quiz';

interface Props {
	wrongAnsweredQuestionsNumber: any[];
	currentQuizLenght: number;
	restartQuiz: () => void;
}

let res = 0;

export const Summary = ({ wrongAnsweredQuestionsNumber, currentQuizLenght, restartQuiz }: Props) => {
	const [startOver, setStartOver] = useState<boolean>(false);

	const calculateLeftQuestions = () => {
		res = currentQuizLenght - wrongAnsweredQuestionsNumber?.length;
	};

	calculateLeftQuestions();

	return (
		<>
			{!startOver && (
				<div className='flex flex-col items-center p-2'>
					{currentQuizLenght >= 2 ? (
						<div>
							<p className='text-center'>
								Udało Ci się poprawnie odpowiedzieć na {res} z {currentQuizLenght} pytań.{' '}
							</p>
							<p className='text-center'>Czy chcesz spróbować ponownie?</p>
						</div>
					) : (
						<div className=''>
							<p className='text-center'>Udało Ci się poprawnie odpowiedzieć na wszystkie pytania.</p>
							<p className='text-center'>Gratulacje!!</p>
						</div>
					)}
					<div className='flex gap-4 m-4 lg:max-w-[250px]  justify-center flex-col'>
						{currentQuizLenght >= 2 && (
							<button
								onClick={() => {
									setStartOver(true);
								}}
								className='btn btn-primary p4-4 w-[100%]'>
								Chcę spróbować ponownie.
							</button>
						)}
						<button
							onClick={restartQuiz}
							className='btn btn-primary p-4 w-[100%]'>
							Stwórz nowy quiz
						</button>
					</div>
				</div>
			)}
			{startOver && (
				<Quiz
					restartQuiz={restartQuiz}
					questions={wrongAnsweredQuestionsNumber}
				/>
			)}
		</>
	);
};
