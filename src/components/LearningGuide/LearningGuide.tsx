import { Wrapper } from "../MainLayout/Wrapper/Wrapper";


export default function LearningGuide() {
  return (
    <>
      <section id="how-to-learn" className="how-to-learn ">
        <Wrapper>
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold ">How to Learn Using This App</h2>
            <p className="mt-4 text-lg ">
              Maximize your learning potential with GPTQuiz Builder by following these steps:
            </p>
            <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="learn-item">
                <i className="icon-select text-4xl text-blue-500"></i>
                <h3 className="mt-4 text-xl font-bold">Step 1: Create Your Quiz</h3>
                <p className="mt-2 ">
                  Choose your topic, set the difficulty level, and decide on the number of questions.
                </p>
              </div>
              <div className="learn-item">
                <i className="icon-answer text-4xl text-blue-500"></i>
                <h3 className="mt-4 text-xl font-bold">Step 2: Answer the Questions</h3>
                <p className="mt-2 ">Select one of the four options provided for each question.</p>
              </div>
              <div className="learn-item">
                <i className="icon-explanation text-4xl text-blue-500"></i>
                <h3 className="mt-4 text-xl font-bold">Step 3: Get Additional Explanations</h3>
                <p className="mt-2 ">
                  If needed, ask for more detailed explanations to understand the topic better.
                </p>
              </div>
              <div className="learn-item">
                <i className="icon-save text-4xl text-blue-500"></i>
                <h3 className="mt-4 text-xl font-bold">Step 4: Save Questions</h3>
                <p className="mt-2 ">
                  Save challenging questions to review them later in your statistics.
                </p>
              </div>
              <div className="learn-item">
                <i className="icon-review text-4xl text-blue-500"></i>
                <h3 className="mt-4 text-xl font-bold">Step 5: Review Your Progress</h3>
                <p className="mt-2 ">
                  Regularly visit the statistics section to review saved questions and track your learning progress.
                </p>
              </div>
            </div>
          </div>
        </Wrapper>
      </section>
    </>
  );
}
