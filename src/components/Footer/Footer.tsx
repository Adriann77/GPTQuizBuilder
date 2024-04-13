import GITHUB_ICON from '../../assets/github-mark.png';
import LINKEDIN_ICON from '../../assets/linkedin.svg';

export const Footer = () => {
	return (
		<footer
			className='footer footer-center p-4 bg-[#1A202C]
         text-[#fff] text-xs h-[7vh] bottom-0 fixed '>
			<aside>
				<ul className='flex  gap-11'>
					<li className='w-[30px] bg-white rounded-full border-2'>
						<a
							target='_blank'
							href='https://github.com/Adriann77'>
							<img
								src={GITHUB_ICON}
								alt='github_icon'
							/>
						</a>
					</li>
					<li className='w-[30px] '>
						<a
							target='_blank'
							href='https://www.linkedin.com/in/adrian-klimas-87b169281/'>
							<img
								src={LINKEDIN_ICON}
								alt='github_icon'
							/>
						</a>
					</li>
				</ul>
			</aside>
		</footer>
	);
};
