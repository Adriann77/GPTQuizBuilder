import { useState, useEffect } from 'react';
import styles from './Card.module.scss';
import { learningCards } from '../../../constants/learningCards';

export default function Card() {
  const [hoveredIndex, setHoveredIndex] = useState<number>(0);
  const [animateOut, setAnimateOut] = useState<boolean>(false);
  const [cardContent, setCardContent] = useState(learningCards[0]);

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
    <div className="flex h-[400px] w-[600px] items-center justify-around">
      <ul className="mt-16 flex h-[100%] flex-col gap-6 text-2xl">
        {learningCards.map((card, index) => (
          <li
            key={index}
            className={`cursor-pointer  ${hoveredIndex === index ? 'translate-x-5   text-primary transition-all' : ' transition-all'}`}
            onMouseEnter={() => onMouseInEvent(index)}
          >
            0{index + 1} {card.title}
          </li>
        ))}
      </ul>
      <div
        className={` flex h-[100%] w-[300px] rotate-3 flex-col rounded-2xl p-6 ${styles.card} ${animateOut ? styles.animateOut : styles.animateIn}`}
      >
        <h3 className="mb-5 text-xl font-[700] text-primary">{cardContent.title}</h3>
        <p className="font-thin">{cardContent.description}</p>
      </div>
    </div>
  );
}
