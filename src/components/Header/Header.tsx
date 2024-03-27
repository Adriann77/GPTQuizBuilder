
import logoIcon from '../../assets/logo.png'

export const Header = () => {
	return (
		<header className='navbar bg-[#1A202C] absolute top-0 '>
			<div className='flex justify-between items-center max-w-[1400px] mx-auto w-full px-4'>
				<a
					href='#'
					className='btn btn-ghost text-2xl text-white'>
					GPT-QuizBuilder
				</a>
				<img
					className=' absolute top-0 lg:h-[200px] right-0 h-[120px] '
					src={logoIcon}
					alt='Logo Icon'
				/>
			</div>
		</header>
	);
};
