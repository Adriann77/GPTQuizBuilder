import { useState, useContext } from 'react';
import { Summary } from '../Summary/Summary';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { QuestionBankContext, Question } from '../../context/QuestionBankContext';

const OPEN_AI_KEY = import.meta.env.VITE_OPEN_AI_KEY;

interface QuizProps {
  questions: Question[];
  restartQuiz: () => void;
}

export const Quiz = ({ questions, restartQuiz }: QuizProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [showExplanation, setShowExplanation] = useState(false);
  const [questionNumber, setQuestionNumber] = useState<number>(1);
  const [wrongAnswers, setWrongAnswers] = useState<Question[]>([]);
  const [showSummary, setShowSummary] = useState<boolean>(false);
  const [extendAnswer, setExtendAnswer] = useState<string>();
  const [loader, setLoader] = useState<boolean>(true);
  const [isSaved, setIsSaved] = useState(false);
  const [isExplained, setIsExplained] = useState(false);

  const question = questions[currentQuestionIndex];

  const context = useContext(QuestionBankContext);

  if (!context) {
    throw new Error('QuestionBankContext must be used within a QuestionBankProvider');
  }

  //@ts-ignore
  const { questionBank, setQuestionBank } = context;

  const { t } = useTranslation();

  const data = {
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'system',
        content: `You are a knowledgeable teacher tasked with providing direct and clear answers without any introductory phrases or filler words. Your responses should be straightforward, focusing solely on the content requested by the user. Use examples if necessary to clarify your points but keep the explanations concise. Avoid numbering your explanations, but you may use numbered examples when necessary to clarify points. Do not use code block syntax for examples, use plain text instead. Do not try to make text bolder using '**bold text**' instead of this you can use dot or number. If you give examples, remember to use double plain text before and after. Do not make a single paragraph longer than 300 characters. Each paragraph should be separated by white space, and important words or phrases should be bolded using **important word**. Examples should start with 'Example 1:' depending on the context. After you finish a quote, use double plain text after always. If the question asks for identification, such as 'Which of the following is a mammal?', provide interesting facts about the correct answer and categorize the other options. If the question asks for choosing the correct one, just return some facts about the answer, but never return something like 'for this question the answer is "b"'. Also, if the question is about choosing the correct one like capital cities or dog types, do not provide comparisons after. Provide comparisons only if the question is hard or complex, such as in biology or chemistry topics. For easier questions, like 'Which one is the most popular dog breed?', you don't need to provide comparisons. Make sure the answer is returned in the ${t('global:quizLanguage')} language.`,
      },
      {
        role: 'user',
        content: `Could you explain this topic more clearly? Here is my question: ${question.content} and correct answer for this is ${question.correct} So keep the context of this. For example, in a biology topic and a question 'Which of the following is not a type of blood cell?' with answer 'Neuron', your answer should look like this: 

      **Red blood cells**, also called erythrocytes, are a type of blood cell that carries oxygen from the lungs to the rest of the body. **White blood cells**, also known as leukocytes, are involved in the immune response by defending the body against infections. **Platelets** are cell fragments that help in blood clotting to prevent excessive bleeding. **Plasma** is the liquid component of blood that carries various substances like hormones, nutrients, and waste products. 

      **Example 1:** 
      
      -The heart pumps blood throughout the body, delivering oxygen and nutrients while removing waste products.

      In the context of blood cells, the correct answer to your question 'Which of the following is not a type of blood cell?' is plasma. Plasma is not a blood cell but rather the fluid in which the blood cells are suspended. It makes up about 55% of the total blood volume in the body and plays a crucial role in transporting nutrients, hormones, and waste products throughout the body's circulatory system. 

      Comparing blood cells to a team in the body can help simplify their roles: red blood cells deliver oxygen like a specialized courier service, white blood cells act as the body's defense team against invaders, platelets are the first responders in case of injury to prevent excessive bleeding, and plasma is like a fluid carrier transporting essential substances to various parts of the body.`,
      },
    ],
  };

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${OPEN_AI_KEY}`,
  };

  const showModal = () => {
    //@ts-ignore
    document.getElementById('my_modal_5').showModal();
    {
      !isExplained &&
        axios
          .post('https://api.openai.com/v1/chat/completions', data, { headers: headers })
          .then((response) => {
            const apiAnswer = response.data.choices[0].message.content;
            const formattedAnswer = apiAnswer.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');
            const answerWithHr = formattedAnswer.replace(/```typescript([\s\S]*?)```/g, '<hr>$1<hr>');
            setExtendAnswer(answerWithHr);
            setLoader(false);
            setIsExplained(true);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
    }
  };

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
    setShowExplanation(true);
    if (answer !== question.correct) {
      setWrongAnswers((prevAnswers) => [...prevAnswers, question]);
    }
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setLoader(true);
      setIsExplained(false);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer('');
      setShowExplanation(false);
      setQuestionNumber((prevNumb) => prevNumb + 1);
      setIsSaved(false);
    } else {
      setShowSummary(true);
    }
  };

  const saveExplanation = () => {
    setIsSaved(true);
    setQuestionBank((prev) => [...prev, { question: question.content, answer: extendAnswer }]);
  };

  return (
    <>
      {!showSummary && (
        <div className="relative bg-cover bg-center pb-4 lg:p-12">
          <p className=" text-primary ">
            {t('global:questionNumber')} {questionNumber}:
          </p>

          <div className=" text-md my-4 w-[300px] rounded bg-[#1d1e20] p-3 text-center tracking-[1px] lg:w-[400px] lg:text-lg">
            {question.content}
          </div>
          <ul className="flex flex-col gap-3 leading-tight">
            {Object.entries(question.answers).map(([key, value]) => (
              <li
                className={`text-md mx-auto my-0   min-h-[70px] w-[300px]  p-2 lg:min-h-[90px] lg:w-[400px] lg:text-lg  ${
                  showExplanation
                    ? key === question.correct
                      ? 'btn btn-success cursor-default'
                      : selectedAnswer === key
                        ? 'btn btn-error cursor-default'
                        : 'btn btn-neutral hidden cursor-default'
                    : 'btn btn-primary'
                } `}
                key={key}
                onClick={() => !showExplanation && handleAnswerSelect(key)}
              >
                {value}
              </li>
            ))}
          </ul>
          {showExplanation && (
            <>
              <div className="relative">
                <button
                  className="btn  btn-outline btn-primary my-2 h-[70px] w-[300px] text-sm lg:w-[400px] lg:text-lg"
                  onClick={showModal}
                >
                  {!isExplained ? `${t('global:quiz:modalBtn')}` : 'show explanation'}
                </button>
                <dialog id="my_modal_5" className="modal backdrop-blur-sm">
                  <div className="modal-box flex flex-col text-center">
                    {!loader ? (
                      <>
                        {!isSaved ? (
                          <button className="btn btn-outline btn-primary mb-3 self-end" onClick={saveExplanation}>
                            {t('global:quiz:modalSave')}
                            <i className="fa-solid fa-floppy-disk"></i>
                          </button>
                        ) : (
                          <p className="mb-3 self-end text-primary">
                            {t('global:quiz:modalSaveConfirm')} <i className="fa-regular fa-circle-check"></i>
                          </p>
                        )}
                        <div
                          className="max-h-[400px] overflow-auto whitespace-pre-wrap break-words text-left"
                          dangerouslySetInnerHTML={{ __html: extendAnswer || '' }}
                        />
                      </>
                    ) : (
                      <>
                        <span className="loading loading-dots loading-lg text-center"></span>
                      </>
                    )}

                    <form method="dialog" className="">
                      <button className="btn btn-outline btn-primary my-3 mt-6 w-[100%]">
                        {t('global:quiz:modalInfo')}
                      </button>
                    </form>
                  </div>
                </dialog>
              </div>

              <div className="flex flex-col gap-3">
                <button
                  className="btn btn-primary  h-[70px]  w-[300px] text-sm lg:w-[400px] lg:text-lg"
                  onClick={goToNextQuestion}
                >
                  {t('global:nextQuestion')}
                </button>
              </div>
            </>
          )}
        </div>
      )}
      {showSummary && (
        <Summary
          wrongAnsweredQuestionsNumber={wrongAnswers}
          currentQuizLenght={questions.length}
          restartQuiz={restartQuiz}
        />
      )}
    </>
  );
};
