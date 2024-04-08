import { LoginForm } from '../LoginForm/LoginForm';
import { Wrapper } from '../Wrapper/Wrapper';
import { Link } from 'react-router-dom';

export const Header = () => {
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
				<button
					className='btn'
					//@ts-ignore
					onClick={() => document.getElementById('my_modal_3').showModal()}>
					Log in
				</button>
				<dialog
					id='my_modal_3'
					className='modal'>
					<div className='modal-box'>
						<form method='dialog'>
							<LoginForm/>
							<button className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>✕</button>
						</form>
					
					</div>
				</dialog>
			</Wrapper>
		</header>
	);
};
