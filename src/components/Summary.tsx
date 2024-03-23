import { useState } from 'react';
import { Quiz } from './Quiz';

interface Props {
	wrongAnsweredQuestionsNumber: any[];
	currentQuizLenght: number;
	restartQuiz?: () => void;
}

let res = 0;

export const Summary = ({ wrongAnsweredQuestionsNumber, currentQuizLenght, restartQuiz }: Props) => {
	const [startOver, setStartOver] = useState<boolean>(false);

	const xd = () => {
		res = currentQuizLenght - wrongAnsweredQuestionsNumber?.length;
	};

	xd();

	return (
		<>
			{!startOver && (
				<div>
					<div>
						<p>
							Udało Ci się poprawnie odpowiedzieć na {res} z {currentQuizLenght} pytań.{' '}
						</p>
						<p className='text-center'>Czy chcesz spróbować ponownie?</p>
					</div>
					<div className='flex gap-4 m-4 '>
                        <button onClick={() => {
                            setStartOver(true)
                        }} className='btn btn-primary p4-4'>Chcę spróbować ponownie.</button>
						<button
							onClick={restartQuiz}
							className='btn btn-primary p-4'>
							Stwórz nowy quiz
						</button>
					</div>
				</div>
			)}
			{startOver && <Quiz questions={wrongAnsweredQuestionsNumber}/>}
		</>
	);
};
