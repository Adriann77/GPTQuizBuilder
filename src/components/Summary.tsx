

interface Props{
    wrongAnsweredQuestionsNumber?: string[];
    currentQuizLenght: number
}

let res = 0;

export const Summary = ({ wrongAnsweredQuestionsNumber, currentQuizLenght }: Props) => {
    
    // const calculateGoodAnsweredQuestions = ()=> {
    //      res =  wrongAnsweredQuestionsNumber?.length - currentQuizLenght
    // }


    return (
        <div>Udało Ci się poprawnie odpowiedzieć na: { res}</div>
  )
}
