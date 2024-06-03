import styles from './Hamburger.module.scss';

export default function Hamburger({ active, setActive }: { active: boolean; setActive: (active: boolean) => void }) {
  return (
    <button
      className={styles.hamburger}
      onClick={() => {
        setActive(!active);
      }}
    >
      <div aria-label='hamburger' className={`${styles.box} ${active ? styles.active : ''}`}>
        <div className={styles.inner}></div>
      </div>
    </button>
  );
}
