import { useEffect, useState } from 'react';
import { OPEN_AI_KEY } from '../../../API/ApiKey';

console.log(OPEN_AI_KEY);

export const Testowe = () => {
	const [response, setResponse] = useState<any>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const apiKey = OPEN_AI_KEY;
				const message = 'Jaka jest dzisiaj pogoda?';

				const response = await fetch(`https://api.openai.com/v1/chat/completions`, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${apiKey}`,
					},
					body: JSON.stringify({
						model: 'gpt-3.5-turbo', // Wybierz odpowiedni model
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
				console.log(data);
			} catch (error) {
				console.error('Błąd:', error);
			}
		};

		fetchData();
	}, []);

	return (
		<div>
			<h1>Odpowiedź od API:</h1>
			{response && response.choices && response.choices.length > 0 && <p>{response.choices[0].message.content}</p>}
		</div>
	);
};
