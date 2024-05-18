import { useContext } from 'react';
import { QuestionBankContext, QuestionBankContextType, SavedQuestion } from '../../context/QuestionBankContext';

export default function SavedQuestionsList() {
  const context = useContext<QuestionBankContextType | undefined>(QuestionBankContext);

  if (!context) {
    throw new Error('QuestionBankContext must be used within a QuestionBankProvider');
  }

  const { questionBank, setQuestionBank } = context;

  const deleteQuestion = (questionToDelete: SavedQuestion) => {
    setQuestionBank((prevQuestionBank) => prevQuestionBank.filter((question) => question !== questionToDelete));
  };
  return (
    <div className="my-10 flex max-w-[500px] flex-col gap-2">
      {questionBank.map((question: any, key: number) => (
        <div key={key} className="collapse collapse-arrow relative max-w-[80%] self-center bg-base-200 p-2">
          <input type="checkbox" />
          <div className="collapse-title  text-center text-xl font-medium">{question.question}</div>
          <button
            onClick={() => {
              deleteQuestion(question);
            }}
            className="btn btn-outline "
          >
            <i className="fa-solid fa-trash text-error"></i>
          </button>
          <div className="collapse-content whitespace-pre-wrap text-wrap">
            <hr />
            <p className="text-md mt-2">{question.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
