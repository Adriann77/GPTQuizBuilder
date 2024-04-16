import { useState } from 'react';
import { LoginForm } from '../LoginForm/LoginForm';
// import { RegisterForm } from '../RegisterForm/RegisterForm';
import { Wrapper } from '../Wrapper/Wrapper';
import { Link } from 'react-router-dom';
import { RegisterForm } from '../RegisterForm/RegisterForm';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher';

export const Nav = () => {
	const [isLoginFormShown, setIsLoginFormShown] = useState<boolean>(true);
	const { t } = useTranslation();

	const changeViewToRegister = () => {
		setIsLoginFormShown(false);
	};
	const changeViewToLogin = () => {
		setIsLoginFormShown(true);
	};

	return (
		<>
			<nav className='navbar bg-[#1A202C] fixed top-0 '>
				<Wrapper>
					<div className='flex justify-between w-screen'>
						<div className='flex-1'>
							<Link
								to={'/'}
								className='btn btn-ghost text-sm'>
								GPT-QuizBuilder
							</Link>
						</div>
						<LanguageSwitcher/>
						<button
							className='btn btn-primary text-xs w-[100px]'
							//@ts-ignore
							onClick={() => document.getElementById('my_modal_3').showModal()}>
							{t('global:loginBtn')}
						</button>
					</div>
					<dialog
						id='my_modal_3'
						className='modal backdrop-blur-sm '>
						<div className='modal-box'>
							<form method='dialog'>
								{/* <RegisterForm /> */}
								<button className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2 '>✕</button>
							</form>
							{isLoginFormShown ? (
								<LoginForm changeViewToRegister={changeViewToRegister} />
							) : (
								<RegisterForm changeViewToLogin={changeViewToLogin} />
							)}
						</div>
					</dialog>
				</Wrapper>
			</nav>
		</>
	);
};
