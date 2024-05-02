// i18n.js
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import global_en from './translations/en/global.json';
import global_pl from './translations/pl/global.json';

//@ts-ignore
const language: string = JSON.parse(localStorage.getItem('lang')) || 'en';

i18next.use(initReactI18next).init({
  interpolation: { escapeValue: false },
  lng: language,
  resources: {
    en: {
      global: global_en,
    },
    pl: {
      global: global_pl,
    },
  },
});

export default i18next;
