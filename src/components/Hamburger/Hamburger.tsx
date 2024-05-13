import { useState } from 'react';
import styles from './Hamburger.module.scss';

export default function Hamburger() {
  const [active, setActive] = useState(false);

  return (
    <button
      className={styles.hamburger}
      onClick={() => {
        setActive((prev) => !prev);
      }}
    >
      <div className={`${styles.box} ${active ? styles.active : ''}`}>
        <div className={styles.inner}></div>
      </div>
    </button>
  );
}
