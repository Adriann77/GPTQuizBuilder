export default function Header() {
	return (
		<>
			<header className='flex flex-col gap-4'>
				<h1 className='text-2xl '>Witaj w GPT-QuizBuilder</h1>
				<p>
					GPT-QuizBuilder to innowacyjna aplikacja edukacyjna, która wykorzystuje potężne możliwości sztucznej
					inteligencji, w tym API ChatGPT, aby umożliwić Ci szybkie i łatwe tworzenie quizów dostosowanych do Twoich
					potrzeb.
				</p>
				<button className='btn btn-primary'>Create new Quiz</button>
			</header>
		</>
	);
}
