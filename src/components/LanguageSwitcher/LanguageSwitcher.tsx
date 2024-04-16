import { useState } from 'react';
import { useTranslation } from 'react-i18next';


export const LanguageSwitcher = () => {
	const { i18n } = useTranslation();
	const [currLang, setCurrLang] = useState(i18n.language);

	const toggleLanguage = () => {
		const newLang = i18n.language === 'pl' ? 'en' : 'pl';
		setCurrLang(newLang);
		i18n.changeLanguage(newLang);

		localStorage.setItem('lang', JSON.stringify(newLang));
	};

	return (
		
			<div className=' left-4 flex gap-2 text-[10px] items-center p-3 '>
				<p>ENG</p>
				<input
					onClick={toggleLanguage}
					type='checkbox'
					className='toggle [--tglbg:[#000]]  bg-primary hover:bg-primary border-primary'
					checked={currLang === 'pl'}
					readOnly
				/>
				<p>PL</p>
			</div>
		
	);
};
