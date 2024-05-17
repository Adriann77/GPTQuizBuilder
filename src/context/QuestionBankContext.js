import  { createContext, useState } from 'react';

export const QuestionBankContext = createContext();

export const QuestionBankProvider = ({ children }) => {
  const [savedQuestions, setSavedQuestions] = useState([]);

  const addQuestion = (question) => {
    setSavedQuestions((prevQuestions) => [...prevQuestions, question]);
  };

  return (
    <QuestionBankContext.Provider value={{ savedQuestions, addQuestion }}>
      {children}
    </QuestionBankContext.Provider>
  );
};
