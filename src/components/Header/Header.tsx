import styles from './Header.module.scss';
import logoIcon from '../../assets/Tło usunięte (QuizBuilderLogo).png';

export const Header = () => {
	return (
		<header className='navbar bg-base-100 absolute top-0 '>
			<div className='max-w-7xl m-0'>
				<a
					href='#'
					className='btn btn-ghost text-xl  '>
					GPT-QuizBuilder
				</a>
				<img
					className='absolute top-0 h-[200px] right-0'
					src={logoIcon}
					alt='Logo Icon'
				/>
			</div>
		</header>
	);
};
