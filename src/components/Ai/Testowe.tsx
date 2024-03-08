import { useEffect, useState } from 'react';

export const Testowe = () => {
	const [response, setResponse] = useState<any>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const apiKey = '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';
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
			{response && response.choices && response.choices.length > 0 &&
				<p>{response.choices[0].message.content}</p>}
		</div>
	);
};
