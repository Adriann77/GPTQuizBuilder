import { useLanguage } from '../context/LanguageContext';

export const LanguageSwitcher = () => {
    const { language, changeLanguage } = useLanguage();
    console.log(language);

	const toggleLanguage = () => {
		changeLanguage(language === 'pl' ? 'en' : 'pl');
	};

	return (
		<div className='absolute top-[10%] left-5 flex gap-3 text-xs items-center'>
			<p>ENG</p>
			<input
				onClick={toggleLanguage}
				type='checkbox'
				className='toggle [--tglbg:[#000]] bg-primary hover:bg-primary border-primary'
				
				readOnly
			/>
			<p>PL</p>
		</div>
	);
};
