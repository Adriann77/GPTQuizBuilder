import { Wrapper } from '../Wrapper/Wrapper';
import { Link } from 'react-router-dom';

export const Header = ({ showLogin }: { showLogin: boolean }) => {
	return (
		<header className='navbar bg-[#1A202C] absolute top-0 '>
			<Wrapper>
				<div className='flex-1'>
					<Link
						to={'/'}
						className='btn btn-ghost text-xl'>
						GPT-QuizBuilder
					</Link>
				</div>
				<div className='flex-none'>
					<ul className='menu menu-horizontal px-1'>
						<li>{showLogin && <Link to={'login'}>Login</Link>}</li>
					</ul>
				</div>
			</Wrapper>
		</header>
	);
};
