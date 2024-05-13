import { useState } from 'react';
import styles from './Hamburger.module.scss';

export default function Hamburger({ active }: { active: (isActive: boolean) => void; }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <button
      className={styles.hamburger}
      onClick={() => {
        active(!isActive);
        setIsActive((prev) => !prev);
      }}
    >
      <div className={`${styles.box} ${isActive ? styles.active : ''}`}>
        <div className={styles.inner}></div>
      </div>
    </button>
  );
}
