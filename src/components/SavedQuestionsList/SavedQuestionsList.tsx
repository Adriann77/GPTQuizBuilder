import { useContext } from 'react';
import { QuestionBankContext, QuestionBankContextType, SavedQuestion } from '../../context/QuestionBankContext';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function SavedQuestionsList() {
  const context = useContext<QuestionBankContextType | undefined>(QuestionBankContext);

  const { t } = useTranslation();

  if (!context) {
    throw new Error('QuestionBankContext must be used within a QuestionBankProvider');
  }

  const { questionBank, setQuestionBank } = context;

  const deleteQuestion = (questionToDelete: SavedQuestion) => {
    setQuestionBank((prevQuestionBank) => prevQuestionBank.filter((question) => question !== questionToDelete));
  };

  console.log(questionBank.length);

  if (questionBank.length > 0) {
    return (
      <div className=" flex max-w-[600px] flex-col gap-5 p-3 py-8">
        {questionBank.map((question: any, key: number) => (
          <div
            key={key}
            className="collapse collapse-arrow relative   self-center border-2 border-primary bg-[rgb(0,0,0,.8)] p-2 backdrop-blur-sm "
          >
            <input className="" name="my-accordion-2" type="checkbox" />
            <button
              onClick={() => {
                deleteQuestion(question);
              }}
              className="btn  absolute  z-10 h-[100%]"
            >
              <i className="fa-solid fa-trash absolute text-error"></i>
            </button>
            <div className="collapse-title  pl-12 text-center text-xl font-medium">{question.question}</div>

            <div className="collapse-content whitespace-pre-wrap text-wrap">
              <hr className="" />
              <p
                className="text-md mt-4 max-h-[400px] overflow-auto p-2 pl-8 text-xl "
                dangerouslySetInnerHTML={{ __html: question.answer }}
              ></p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="hero min-h-[85.5vh]">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <p className="py-6">{t('global:savedQuestionPage:savedQuestionEmptyInfo')}</p>
          <NavLink to={'/form'} className="btn btn-primary">
            {t('global:nav:createNewQuiz')}
          </NavLink>
        </div>
      </div>
    </div>
  );
}
