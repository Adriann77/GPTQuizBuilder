import { Wrapper } from '../Wrapper/Wrapper';
import { Link } from 'react-router-dom';

export default function Header() {
	return (
		<>
			<header className=' w-screen min-h-[91vh] '>
				<Wrapper>
					<div className='flex flex-col w-[100%] h-[100%] '>
						<div className='flex flex-col  gap-3 items-center justify-center p-4 mt-[10vh] mb-[5vh]'>
							<h1 className='text-xl '>Witaj w GPT-QuizBuilder</h1>
							<p className='text-sm text-center'>
								GPT-QuizBuilder to innowacyjna aplikacja edukacyjna, która wykorzystuje potężne możliwości sztucznej
								inteligencji, w tym API ChatGPT, aby umożliwić Ci szybkie i łatwe tworzenie quizów dostosowanych do
								Twoich potrzeb.
							</p>
						</div>

						<div className='flex flex-col  h-[100%] items-center justify-center text-sm'>
							<h2 className='text-lg'>Dlaczego warto używać GPT-QuizBuilder?</h2>
							<ul className='flex flex-wrap gap-2 mt-4 text-center'>
								<li className='w-[48%]'>
									<div className='flex flex-col gap-4 w-52'>
										<div className='flex gap-4 items-center'>
											<div className='skeleton w-16 h-16 rounded-full shrink-0'>
												{' '}
												<i className='fa-solid fa-puzzle-piece m-2'></i>
											</div>
											<div className='flex flex-col gap-4'> 
												<div className='skeleton h-4 w-20'>personalizacja bez granic</div>

											</div>
										</div>
										<div className='skeleton h-32 w-full'></div>
									</div>
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
						<Link
							to={'/form'}
							className=' btn btn-primary mt-[5vh] '>
							Stwórz swój Quiz
						</Link>
					</div>
				</Wrapper>
			</header>
		</>
	);
}
