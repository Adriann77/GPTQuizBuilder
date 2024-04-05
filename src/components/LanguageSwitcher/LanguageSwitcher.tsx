import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Wrapper } from '../Wrapper/Wrapper';

export const LanguageSwitcher = () => {
	const { i18n } = useTranslation();
	const [currLang, setCurrLang] = useState(i18n.language);

	const toggleLanguage = () => {
		const newLang = i18n.language === 'pl' ? 'en' : 'pl';
		setCurrLang(newLang)
		i18n.changeLanguage(newLang);
	

		localStorage.setItem('lang', JSON.stringify(newLang));
	};


	return (
		<Wrapper>

		<div className='absolute top-[-40px]  flex gap-3 text-xs items-center '>
			<p>ENG</p>
			<input
				onClick={toggleLanguage}
				type='checkbox'
				className='toggle [--tglbg:[#000]] bg-primary hover:bg-primary border-primary'
				checked={currLang === 'pl'}
				readOnly
				/>
			<p>PL</p>
		
		</div>
				</Wrapper>
	);
};
