import { Wrapper } from '../Wrapper/Wrapper';
import { Link } from 'react-router-dom';

export default function Header() {
	return (
		<>
			<header className=' w-screen  '>
				<Wrapper>
					<div className='flex flex-col mb-5 mt-5 p-2 gap-3 '>
						<h1 className='text-xl  text-center'>Witaj w GPT-QuizBuilder</h1>

						<p className='text-sm text-center mt-4'>
							GPT-QuizBuilder to innowacyjna aplikacja edukacyjna, która wykorzystuje potężne możliwości sztucznej
							inteligencji, w tym API ChatGPT, aby umożliwić Ci szybkie i łatwe tworzenie quizów dostosowanych do Twoich
							potrzeb.
						</p>

						<Link
							to={'/form'}
							className=' btn btn-primary   max-w-[300px] my-2 mx-auto'>
							Stwórz swój Quiz
						</Link>
						<div className='flex flex-col  h-[100%] items-center justify-center text-sm'>
							<h2 className='text-lg'>Dlaczego warto używać GPT-QuizBuilder?</h2>
							<ul className='flex flex-wrap gap-2 mt-4 text-center'>
								<li className='w-[48%]'>
									<i className='fa-solid fa-puzzle-piece m-2'></i>Personalizacja bez granic
								</li>
								<li className='w-[48%]'>
									<i className='fa-regular fa-object-group m-2'></i> Prosty interfejs użytkownika
								</li>
								<li className='w-[48%]'>
									{' '}
									<i className='fa-regular fa-comments m-2'></i>Zintegrowane API ChatGPT
								</li>
								<li className='w-[48%]'>
									{' '}
									<i className='fa-solid fa-eraser m-2'></i>Elastyczność
								</li>
							</ul>
						</div>
					</div>
				</Wrapper>
			</header>
		</>
	);
}
