import { Wrapper } from '../MainLayout/Wrapper/Wrapper';
import Card from './Card/Card';

export default function LearningGuide() {
  return (
    <>
      <section id="how-to-learn" className=" flex h-[70vh]  items-start ">
        <Wrapper>
        <Card/>
        </Wrapper>
      </section>
    </>
  );
}
