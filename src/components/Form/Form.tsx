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

	let quizGenre: string;
	let quizLenght: string;
	let quizDiff: string;

	const saveAnswers = async () => {
		if (!quizGenre) {
			setShowInputError(true);
			return;
		} else {
			setShowInputError(false);
		}

		if (!quizDiff) {
			setShowSelectError(true);
			return;
		} else {
			setShowSelectError(false);
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
		} catch (error) {
			console.error('Błąd:', error);
		}
	};

	return (
		<div className={styles.formContainer}>
			<Input
				inputValue={(genre: string) => {
					quizGenre = genre;
				}}
				type='text'
				popup='Np: Biologia, Chemia, JavaScript, Python'
				label='Podaj dziedzine quizu:'></Input>
			{showInputError && <ErrorParaph>Musisz podać dziedzine</ErrorParaph>}
			<InputSelect
				sendDiff={(diff: string) => {
					quizDiff = diff;
				}}
				label='Wybierz poziom trudności:'
				popup='Wybrany poziom odpowiada za zaawansowanie pytań w quizie'
				faq={true}
			/>
			{showSelectError && <ErrorParaph>Wybierz poziom trudności</ErrorParaph>}
			<Input
				inputValue={(length: string) => {
					quizLenght = length;
				}}
				type='range'
				popup='Od 1 do 30'
				label='Ustal długość quizu'
			/>
			<FullWidthButton onClick={saveAnswers}>Wyślij</FullWidthButton>
			<p>{gptAnswer}</p>
			<Loader/>
		</div>
	);
};
