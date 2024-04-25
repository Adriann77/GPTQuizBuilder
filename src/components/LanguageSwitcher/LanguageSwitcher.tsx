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
    <div className=" left-4 flex items-center gap-2 p-3 text-[10px] ">
      <p>ENG</p>
      <input
        onClick={toggleLanguage}
        type="checkbox"
        className="toggle border-primary  bg-primary [--tglbg:[#000]] hover:bg-primary"
        checked={currLang === 'pl'}
        readOnly
      />
      <p>PL</p>
    </div>
  );
};
