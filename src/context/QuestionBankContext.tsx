import { createContext, useState, ReactNode, Dispatch, SetStateAction, useEffect } from 'react';

export interface Question {
  content: string;
  answers: {
    a: string;
    b: string;
    c: string;
    d: string;
  };
  correct: keyof Question['answers'];
  topic: string;
}

interface SavedQuestion {
  question: string;
  answer: string | undefined;
}

export interface QuestionBankContextType {
  questionBank: SavedQuestion[];
  setQuestionBank: Dispatch<SetStateAction<SavedQuestion[]>>;
}

const initialQuestionBank: SavedQuestion[] = [];

export const QuestionBankContext = createContext<QuestionBankContextType | undefined>(undefined);

interface QuestionBankProviderProps {
  children: ReactNode;
}

export const QuestionBankProvider = ({ children }: QuestionBankProviderProps) => {
  const [questionBank, setQuestionBank] = useState<SavedQuestion[]>(() => {
    const savedQuestions = localStorage.getItem('questionBank');
    return savedQuestions ? JSON.parse(savedQuestions) : initialQuestionBank;
  });

  useEffect(() => {
    localStorage.setItem('questionBank', JSON.stringify(questionBank));
  }, [questionBank]);

  return (
    <QuestionBankContext.Provider value={{ questionBank, setQuestionBank }}>{children}</QuestionBankContext.Provider>
  );
};
