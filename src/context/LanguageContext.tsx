import { createContext, useContext, ReactNode, useState, FunctionComponent } from 'react';


interface LanguageContextType {
	language: string;
	changeLanguage: (lang: string) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
	const context = useContext(LanguageContext);
	if (context === undefined) {
		throw new Error('useLanguage must be used within a LanguageProvider');
	}
	return context;
};

interface LanguageProviderProps {
	children: ReactNode;
}

export const LanguageProvider: FunctionComponent<LanguageProviderProps> = ({ children }) => {
	const [language, setLanguage] = useState('pl');

	const changeLanguage = (lang: string) => {
		setLanguage(lang);
		// Dodatkowa logika zmiany języka
	};

	return <LanguageContext.Provider value={{ language, changeLanguage }}>{children}</LanguageContext.Provider>;
};
