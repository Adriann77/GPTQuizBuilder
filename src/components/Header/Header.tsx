import { Wrapper } from '../Wrapper/Wrapper';

export const Header = () => {
	return (
		<header className='navbar bg-[#1A202C] absolute top-0 '>
			<Wrapper>
				<div className='flex-1'>
					<a className='btn btn-ghost text-xl'>GPT-QuizBuilder</a>
				</div>
				<div className='flex-none'>
					<ul className='menu menu-horizontal px-1'>
						<li>
							<a>Link</a>
						</li>
						<li>
							<details>
								<summary>Parent</summary>
								<ul className='p-2 bg-[#1A202C]rounded-t-none'>
									<li>
										<a>Link 1</a>
									</li>
									<li>
										<a>Link 2</a>
									</li>
								</ul>
							</details>
						</li>
					</ul>
				</div>
			</Wrapper>
		</header>
	);
};
