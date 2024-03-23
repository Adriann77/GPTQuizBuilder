import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { Loader } from './Loader';
import { OPEN_AI_KEY } from '../../API/ApiKey';
import { Quiz } from './Quiz';

export const QuizFetcher = ({ data, startOver }: { data: any, startOver: any }) => {
	const [error, setError] = useState('');
	const requestSent = useRef(false);
	const [gptAnswer, setGptAnswer] = useState<any>([]);
	const [showLoader, setShowLoader] = useState<boolean>(true);
	const [showQuiz, setShowQuiz] = useState<boolean>(false);
	const prevDataRef = useRef();


	useEffect(() => {
		const fetchData = async () => {
			if (
				!requestSent.current &&
				(!prevDataRef.current || JSON.stringify(prevDataRef.current) !== JSON.stringify(data))
			) {
				requestSent.current = true;
				prevDataRef.current = data;
				try {
					const response = await axios.post(
						`https://api.openai.com/v1/chat/completions`,
						{
							model: 'gpt-3.5-turbo',
							messages: [
								{
									role: 'user',
									content: `Proszę, stwórz dla mnie quiz w języku polskim na temat ${data.genre} o ${data.diff} poziomie trudności. Quiz powinien składać się z ${data.length} pytań. Każde pytanie powinno zawierać cztery różne odpowiedzi (a, b, c, d), z jedną poprawną odpowiedzią. Proszę zwrócić to w formacie JSON, na przykład:

					[
  						{
    					"treść": "Jakie są funkcje enzymów?",
    						"odpowiedzi": {
      						"a": "Transport materiałów wewnątrzkomórkowych",
      						"b": "Regulacja temperatury ciała",
      						"c": "Udział w procesach metabolicznych",
      						"d": "Synteza DNA"
    					},
    						"poprawna": "c",
    						"opis_poprawnej": "Enzymy są białkami, które uczestniczą w procesach metabolicznych, przyspieszając reakcje chemiczne w organizmie."
  						}
					]
						`,
								},
							],
						},
						{
							headers: {
								'Content-Type': 'application/json',
								Authorization: `Bearer ${OPEN_AI_KEY}`,
							},
						},
					);

					const parsedData = JSON.parse(response.data.choices[0].message.content);
					setGptAnswer(parsedData);
					setShowLoader(false);
					setShowQuiz(true);
					requestSent.current = true;
				} catch (error) {
					console.error('Error:', error);
					const errorMessage = error instanceof Error ? error.message : 'Unknown error';
					setError(errorMessage);
				}
			}
		};

		fetchData();
	}, [data]);

	if (error) {
		return (
			<div className='flex flex-col gap-4'>
				<div>Błąd podczas tworzenia quizu.</div>
				<button onClick={()=> startOver()} className='btn btn-primary'>Spróbuj ponownie</button>
			</div>
		);
	}

	if (showLoader) {
		return <Loader />;
	}

	if (showQuiz) {
		return <Quiz questions={gptAnswer} />;
	}
};
