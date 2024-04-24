import { Wrapper } from '../Wrapper/Wrapper';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Header() {
	const { t } = useTranslation();
	return (
		<>
			<header className=' w-screen  '>
				<Wrapper>
					<div className='flex flex-col my-5 p-2 gap-6 '>
						<div className=' flex justify-center items-center flex-col '>
							<h1 className='text-2xl  text-center lg:text-4xl'>{t('global:landingPage:header')}</h1>
							<p className='text-xs text-center m-6 lg:text-lg max-w-[800px]'>{t('global:landingPage:description')}</p>

							<Link
								to={'/form'}
								className=' btn btn-primary   max-w-[300px] my-2 mx-auto lg:text-xl lg:w-[100%] lg:h-[80px]'>
								{t('global:landingPage:createQuizBtn')}
							</Link>
						</div>
						<div className='flex flex-col  h-[100%] items-center justify-center text-sm lg:text-lg'>
							<h2 className='text-md text-center lg:text-2xl '>{t('global:landingPage:whyWorth')}</h2>
							<ul className='flex flex-wrap gap-2 mt-4 text-center'>
								<li className='w-[48%]'>
									<i className='fa-solid fa-puzzle-piece m-2'></i>
									{t('global:landingPage:one')}
								</li>
								<li className='w-[48%]'>
									<i className='fa-regular fa-object-group m-2'></i> {t('global:landingPage:two')}
								</li>
								<li className='w-[48%]'>
									{' '}
									<i className='fa-regular fa-comments m-2'></i> {t('global:landingPage:three')}
								</li>
								<li className='w-[48%]'>
									{' '}
									<i className='fa-solid fa-eraser m-2'></i> {t('global:landingPage:four')}
								</li>
							</ul>
						</div>
					</div>
				</Wrapper>
			</header>
		</>
	);
}
