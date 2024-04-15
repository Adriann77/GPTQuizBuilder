import Accordion from '../Accordion/Accordion';

export default function Header() {
	return (
		<>
			<header className='flex flex-col gap-3 '>
				<h1 className='text-2xl '>Witaj w GPT-QuizBuilder</h1>
				<p>
					GPT-QuizBuilder to innowacyjna aplikacja edukacyjna, która wykorzystuje potężne możliwości sztucznej
					inteligencji, w tym API ChatGPT, aby umożliwić Ci szybkie i łatwe tworzenie quizów dostosowanych do Twoich
					potrzeb.
				</p>

				<ul>
					Dlaczego warto używać GPT-QuizBuilder?
					<li>
						<i className='fa-solid fa-puzzle-piece'></i>Personalizacja bez granic
					</li>
					<li>
						<i className='fa-regular fa-object-group'></i> Prosty interfejs użytkownika
					</li>
					<li>
						{' '}
						<i className='fa-regular fa-comments'></i>Zintegrowane API ChatGPT
					</li>
					<li>
						{' '}
						<i className='fa-solid fa-eraser'></i>Elastyczność
					</li>
				</ul>
			</header>
		</>
	);
}
