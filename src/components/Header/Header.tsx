import { useState } from 'react';
import { LoginForm } from '../LoginForm/LoginForm';
// import { RegisterForm } from '../RegisterForm/RegisterForm';
import { Wrapper } from '../Wrapper/Wrapper';
import { Link } from 'react-router-dom';
import { RegisterForm } from '../RegisterForm/RegisterForm';

export const Header = () => {
	const [isLoginFormShown, setIsLoginFormShown] = useState<boolean>(true);

	const changeViewToRegister = () => {
		setIsLoginFormShown(false);
	};
	const changeViewToLogin = () => {
		setIsLoginFormShown(true);
	};

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
					className='btn btn-primary'
					//@ts-ignore
					onClick={() => document.getElementById('my_modal_3').showModal()}>
					Sign In
				</button>
				<dialog
					id='my_modal_3'
					className='modal backdrop-blur-sm '>
					<div className='modal-box'>
						<form method='dialog'>
							{/* <RegisterForm /> */}
							<button className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>✕</button>
						</form>
						{isLoginFormShown ? (
							<LoginForm changeViewToRegister={changeViewToRegister} />
						) : (
							<RegisterForm changeViewToLogin={changeViewToLogin} />
						)}
					</div>
				</dialog>
			</Wrapper>
		</header>
	);
};
