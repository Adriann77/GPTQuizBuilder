import { useContext } from 'react';
import { QuestionBankContext, QuestionBankContextType } from '../../context/QuestionBankContext';

export default function SavedQuestionsList() {
  const context = useContext<QuestionBankContextType | undefined>(QuestionBankContext);

  if (!context) {
    throw new Error('QuestionBankContext must be used within a QuestionBankProvider');
  }

  const { questionBank } = context;

  return (
    <div className="my-10 flex max-w-[500px] flex-col gap-2">
      {questionBank.map((question: any, key: number) => (
        <div key={key} className="collapse collapse-arrow max-w-[80%] self-center bg-base-200">
          <input type="checkbox" />
          <div className="collapse-title text-center text-xl font-medium">{question.question}</div>
          <div className="collapse-content whitespace-pre-wrap text-wrap">
            <hr />
            <p className="mt-2 text-md">{question.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
