import { useState, useEffect } from 'react';
import styles from './Card.module.scss';
import { useTranslation } from 'react-i18next';

export default function Card() {
  const { t } = useTranslation();

  const learningCardsPL = [
    {
      title: `${t('global:learning:learnCardOneTitle')}`,
      description: `${t('global:learning:learnCardOneDescription')}`,
    },
    {
      title: `${t('global:learning:learnCardTwoTitle')}`,
      description: `${t('global:learning:learnCardTwoDescription')}`,
    },
    {
      title: `${t('global:learning:learnCardThreeTitle')}`,
      description: `${t('global:learning:learnCardThreeDescription')}`,
    },
    {
      title: `${t('global:learning:learnCardFourTitle')}`,
      description: `${t('global:learning:learnCardFourDescription')}`,
    },
    {
      title: `${t('global:learning:learnCardFiveTitle')}`,
      description: `${t('global:learning:learnCardFiveDescription')}`,
    },
  ];

  let learningCards = learningCardsPL;

  const [hoveredIndex, setHoveredIndex] = useState<number>(0);
  const [animateOut, setAnimateOut] = useState<boolean>(false);

  const [cardContent, setCardContent] = useState(learningCards[0]);

  useEffect(() => {
    setCardContent(learningCards[0]);
  }, [t]);

  useEffect(() => {
    if (!animateOut) {
      setCardContent(learningCards[hoveredIndex]);
    }
  }, [hoveredIndex, animateOut]);

  const onMouseInEvent = (index: number) => {
    if (index !== hoveredIndex) {
      setAnimateOut(true);
      setTimeout(() => {
        setHoveredIndex(index);
        setAnimateOut(false);
      }, 150);
    }
  };

  return (
    <>
      <div className="hidden h-[400px] w-[600px] items-center justify-around md:flex  ">
        <ul className="mt-16 flex h-[100%] flex-col gap-6 text-2xl">
          {learningCards.map((card, index) => (
            <li
              key={index}
              className={`cursor-pointer  ${hoveredIndex === index ? 'translate-x-5   text-primary transition-all' : ' transition-all'}`}
              onMouseEnter={() => onMouseInEvent(index)}
            >
              {index + 1} | {card.title}
            </li>
          ))}
        </ul>
        <div
          className={` flex h-[90%] w-[300px] rotate-3 flex-col rounded-2xl p-6 ${styles.card} ${animateOut ? styles.animateOut : styles.animateIn}`}
        >
          <h3 className="mb-5 text-xl font-[700] text-primary">{cardContent.title}</h3>
          <p className="leading-6">{cardContent.description}</p>
        </div>
      </div>
      <div className="carousel carousel-vertical flex h-[450px] w-[330px] gap-7   md:hidden  ">
        {learningCards.map((card, index) => (
          <div
            key={index}
            className={`carousel-item mb-4 ml-2 flex  h-[80%] w-[300px] flex-col rounded-2xl  ${styles.card}`}
          >
            <span className="my-1 p-3  text-2xl text-primary ">
              {' '}
              {index + 1} {card.title}
            </span>{' '}
            <span className="p-3">{card.description}</span>
          </div>
        ))}
      </div>
    </>
  );
}
