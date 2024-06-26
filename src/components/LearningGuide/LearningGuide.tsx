import { Wrapper } from '../MainLayout/Wrapper/Wrapper';
import Card from './Card/Card';
import { NavLink } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

export default function LearningGuide() {

  const {t} = useTranslation()

  return (
    <>
      <section id="how-to-learn" className=" relative flex h-[84.5vh] pt-14 items-center   ">
        <Wrapper>
          <Card />
          <NavLink className='btn btn-primary mt-10 w-[100%] ' to={'/form'}>{ t('global:nav:createNewQuiz')}</NavLink>
        </Wrapper>
      </section>
    </>
  );
}
