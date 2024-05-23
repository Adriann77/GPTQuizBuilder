import { Link } from 'react-router-dom';
import { Wrapper } from '../MainLayout/Wrapper/Wrapper';
import Card from './Card/Card';

export default function LearningGuide() {
  return (
    <>
      <section id="how-to-learn" className=" flex h-[70vh]  items-start relative ">
        <Wrapper>
          <div className='flex flex-col'>

          <Card />
          <Link className=" btn btn-primary self-center justify-self-center mt-10 h-[70px] w-[250px] " to={'/form'}>
            Stwórz swój quiz
          </Link>
          </div>
        </Wrapper>
      </section>
    </>
  );
}
