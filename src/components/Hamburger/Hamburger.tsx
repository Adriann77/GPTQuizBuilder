import { useState } from 'react';
import styles from './Hamburger.module.scss';
import { act } from 'react-dom/test-utils';

export default function Hamburger({ active, setActive }) {


  return (
    <button
      className={styles.hamburger}
      onClick={() => {
        setActive(!active);
      }}
    >
      <div className={`${styles.box} ${active ? styles.active : ''}`}>
        <div className={styles.inner}></div>
      </div>
    </button>
  );
}
