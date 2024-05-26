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
    <div className="my-10 flex max-w-[600px] flex-col gap-5 p-2">
      {questionBank.map((question: any, key: number) => (
        <div
          key={key}
          className="collapse collapse-arrow relative  self-center border-2 border-primary bg-[rgb(0,0,0,.8)] p-2 backdrop-blur-sm "
        >
          <input className="" type="checkbox" />
          <button
            onClick={() => {
              deleteQuestion(question);
            }}
            className="btn  absolute   h-[100%] "
          >
            <i className="fa-solid fa-trash text-error absolute"></i>
          </button>
          <div className="collapse-title  text-center text-xl font-medium pl-12">{question.question}</div>

          <div className="collapse-content whitespace-pre-wrap text-wrap">
            <hr className="" />
            <p className="text-md mt-4 p-2 text-xl pl-8">{question.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
