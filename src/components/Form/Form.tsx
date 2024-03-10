import { useState } from 'react';
import { ErrorParaph } from '../ErrorParaph/ErrorParaph';
import { FullWidthButton } from '../FullWidthButton/FullWidthButton';
import { Input } from '../Input/Input';
import { InputSelect } from '../InputSelect/InputSelect';
import styles from './Form.module.scss';
import { OPEN_AI_KEY } from '../../../API/ApiKey';
import { Loader } from '../Loader/Loader';

export const Form = () => {
	const [showInputError, setShowInputError] = useState(false);
	const [showSelectError, setShowSelectError] = useState(false);
	const [gptAnswer, setGptAnswer] = useState<any>('');
	const [quizGenre, setQuizGenre] = useState('');
	const [quizLenght, setQuizLenght] = useState('15');
	const [quizDiff, setQuizDiff] = useState('start');
	const [isLoader, setIsLoader] = useState(false);

	const saveAnswers = async () => {
		console.log(quizGenre, quizLenght, quizDiff);

		if (quizGenre !== '') {
			setShowInputError(false);
		} else {
			setShowInputError(true);
		}

		if (quizDiff !== 'start') {
			setShowSelectError(false);
		} else {
			setShowSelectError(true);
		}

		if (quizDiff !== 'start' && quizGenre !== '') {
			setQuizGenre('');
			setQuizDiff('start');
			setIsLoader(true);
		}

		try {
			const apiKey = OPEN_AI_KEY;
			const message = `Stworz dla mnie quiz w języku Polskim w dziedzinie ${quizGenre} o ${quizDiff} poziomie trudności.
		    Ma się składać z ${quizLenght} pytań, do każdego pytania 4 różne odpowiedzi z jedną prawidłową. Prosze zwróc to w formacie JSON w stylu:
		    pytanie1: {
		        treść: 'Jakie są funkcje enzymów?',
		        odpowiedzi: {
		            a: 'Transport materiałów wewnątrzkomórkowych',
		            b: 'Regulacja temperatury ciała',
		            c: 'Udział w procesach metabolicznych',
		            d: 'Synteza DNA',
		        },
		        poprawna: 'c',
		        opis_poprawnej:
		            'Enzymy są białkami, które uczestniczą w procesach metabolicznych, przyspieszając reakcje chemiczne w organizmie.',
		    },`;

			const response = await fetch(`https://api.openai.com/v1/chat/completions`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${apiKey}`,
				},
				body: JSON.stringify({
					model: 'gpt-3.5-turbo',
					messages: [
						{
							role: 'user',
							content: message,
						},
					],
				}),
			});

			const data = await response.json();
			console.log(data.choices[0].message.content);
			setGptAnswer(data.choices[0].message.content);
			setIsLoader(false);
		} catch (error) {
			console.error('Błąd:', error);
			setIsLoader(false);
		}
	};

	if (isLoader) {
		return (
			<div>
				<Loader />
			</div>
		);
	}

	return (
		<>
			<div className={styles.formContainer}>
				<Input
					inputValue={setQuizGenre}
					type='text'
					popup='Np: Biologia, Chemia, JavaScript, Python'
					label='Podaj dziedzine quizu:'
					value={quizGenre}
				/>
				{showInputError && <ErrorParaph>Musisz podać dziedzine</ErrorParaph>}
				<InputSelect
					sendDiff={setQuizDiff}
					label='Wybierz poziom trudności:'
					popup='Wybrany poziom odpowiada za zaawansowanie pytań w quizie'
					faq={true}
					value={quizDiff}
				/>
				{showSelectError && <ErrorParaph>Wybierz poziom trudności</ErrorParaph>}
				<Input
					inputValue={setQuizLenght}
					type='range'
					popup='Od 1 do 30'
					label='Ustal długość quizu'
					value={quizLenght}
				/>
				<FullWidthButton onClick={saveAnswers}>Wyślij</FullWidthButton>
			</div>
			{isLoader && <Loader />}
		</>
	);
};
