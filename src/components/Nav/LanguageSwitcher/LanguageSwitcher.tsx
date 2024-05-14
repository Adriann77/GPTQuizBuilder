import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const [currLang, setCurrLang] = useState(() => {
    //@ts-ignore
    const savedLang = JSON.parse(localStorage.getItem('lang'));
    return savedLang || i18n.language;
  });

  useEffect(() => {
    i18n.changeLanguage(currLang);
    localStorage.setItem('lang', JSON.stringify(currLang));
  }, [currLang]);

  const toggleLanguage = () => {
    const newLang = currLang === 'pl' ? 'en' : 'pl';
    setCurrLang(newLang);
  };

  return (
    <div className=" btn btn-outline btn-primary left-4  flex items-center gap-2 p-3 text-[10px] " onClick={toggleLanguage}>
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
