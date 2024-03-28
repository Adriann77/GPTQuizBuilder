import { useTranslation } from 'react-i18next';

export const LanguageSwitcher = () => {
	const { i18n } = useTranslation();

	const toggleLanguage = () => {
		const newLang = i18n.language === 'pl' ? 'en' : 'pl';
		i18n.changeLanguage(newLang);

		localStorage.setItem('lang', JSON.stringify(newLang));
	};


	return (
		<div className='absolute top-[10%] left-5 flex gap-3 text-xs items-center'>
			<p>ENG</p>
			<input
				onClick={toggleLanguage}
				type='checkbox'
				className='toggle [--tglbg:[#000]] bg-primary hover:bg-primary border-primary'
			
			/>
			<p>PL</p>
		
		</div>
	);
};
