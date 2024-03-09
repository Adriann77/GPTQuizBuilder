import { useEffect, useState } from 'react';
import { OPEN_AI_KEY } from '../../../API/ApiKey';

export const Testowe = () => {
	const [response, setResponse] = useState<any>(null);
	const [gptAnswer, setGptAnswer] = useState<any>('');
	const [requestCount, setRequestCount] = useState<number>(0);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const apiKey = OPEN_AI_KEY;
				const message =
					'Stworz dla mnie quiz w dziedzinie biologi w experckim stopniu zaawansowania o długości 3 pytan, chce zeby były 4 pytania do kazdego zapytania z czego 1 prawidlowe, quiz ma byc po "';

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
				setResponse(data);
				console.log(data.choices[0].message);
			
			} catch (error) {
				console.error('Błąd:', error);
			}
		};

		const timer = setTimeout(() => {
			fetchData();
			setRequestCount(requestCount + 1);
		}, 21000); // 21 sekund

		// Ustawia czyszczenie interwału
		return () => clearTimeout(timer);
	}, [requestCount]); // Dodaje requestCount jako zależność, aby wywoływać useEffect ponownie po każdym zakończonym zapytaniu

	return <div>{gptAnswer && <div>{gptAnswer}</div>}</div>;
};
