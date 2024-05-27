
import { Wrapper } from '../MainLayout/Wrapper/Wrapper';
import Card from './Card/Card';

export default function LearningGuide() {
  return (
    <>
      <section id="how-to-learn" className=" relative flex  h-[70vh] items-start ">
        <Wrapper>
          <div className="flex flex-col">
            <Card />
           
          </div>
        </Wrapper>
      </section>
    </>
  );
}
