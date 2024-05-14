import { useState } from 'react';
import { Summary } from '../Summary/Summary';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

const OPEN_AI_KEY = import.meta.env.VITE_OPEN_AI_KEY;

interface Question {
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

interface QuizProps {
  questions: Question[];
  restartQuiz: () => void;
}

export const Quiz = ({ questions, restartQuiz }: QuizProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [showExplanation, setShowExplanation] = useState(false);
  const [questionNumber, setQuestionNumber] = useState<number>(1);
  const [wrongAnswers, setWrongAnswers] = useState<any[]>([]);
  const [showSummary, setShowSummary] = useState<boolean>(false);
  const [extendAnswer, setExtendAnswer] = useState<string>();
  const [loader, setLoader] = useState<boolean>(true);

  const question = questions[currentQuestionIndex];

  const { t } = useTranslation();

  const data = {
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'system',
        content:
          'You are a knowledgeable teacher tasked with providing direct and clear answers without any introductory phrases or filler words. Your responses should be straightforward, focusing solely on the content requested by the user. Use examples if necessary to clarify your points but keep the explanations concise. Avoid numbering your explanations, but you may use numbered examples when necessary to clarify points. Do not use code block syntax for examples, use plain text instead. Do not try to make text bolder using "**bold text**" instead of this you can use dot or number. If u give an examples remeber to use double plain text before and after. At the end you can use some comparisons to explain in easier language with double plain text before',
      },
      {
        role: 'user',
        content: `Could you explain this topic more clearly? Here is my question: ${question.content}. Please provide the answer in ${t('global:quizLanguage')}, you can use numbered examples or direct explanations as needed. Remember the context of this question is ${question.topic}. for example in biology topic and question about blood functions your answer should look like this : Blood performs several functions in the body, including: 
         
            - Transporting oxygen from the lungs to the body's tissues and organs, and transporting carbon dioxide from the body's tissues and organs back to the lungs.
            - Carrying nutrients such as glucose and amino acids from the digestive system to cells throughout the body.
            - Removing waste products like urea and lactic acid from cells to be excreted by the kidneys and lungs.
            - Regulating body temperature by distributing heat produced by muscles during activity throughout the body.
            - Defending the body against infections and diseases by transporting white blood cells, antibodies, and other immune system components.
         
        These functions help maintain the body's overall health and wellbeing by ensuring that all organs and tissues receive what they need and are protected from harm. Comparing blood to a delivery service in the body can make it easier to understand its role in keeping everything running smoothly.`,
      },
    ],
  };

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${OPEN_AI_KEY}`,
  };

  const showModal = () => {
    setLoader(true);
    //@ts-ignore
    document.getElementById('my_modal_5').showModal();
    axios
      .post('https://api.openai.com/v1/chat/completions', data, { headers: headers })
      .then((response) => {
        const apiAnswer = response.data.choices[0].message.content;
        const formattedAnswer = apiAnswer.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');
        const answerWithHr = formattedAnswer.replace(/```typescript([\s\S]*?)```/g, '<hr>$1<hr>');
        setExtendAnswer(answerWithHr);
        setLoader(false);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
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
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer('');
      setShowExplanation(false);
      setQuestionNumber((prevNumb) => prevNumb + 1);
    } else {
      setShowSummary(true);
    }
  };

  const saveExplanation = () => {
    alert('zapisano');
  };

  return (
    <>
      {!showSummary && (
        <div className="relative bg-cover bg-center pb-4 lg:p-12">
          <p className=" text-success  ">
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
                  {t('global:quiz:modalBtn')}
                </button>
                <dialog id="my_modal_5" className="modal backdrop-blur-sm">
                  <div className="modal-box flex flex-col text-center">
                    {!loader ? (
                      <>
                        <button className="btn btn-outline btn-primary mb-3 self-end" onClick={saveExplanation}>
                          {t('global:quiz:modalSave')}
                          <i className="fa-solid fa-floppy-disk"></i>
                        </button>
                        <div
                          className="whitespace-pre-wrap break-words text-left"
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
