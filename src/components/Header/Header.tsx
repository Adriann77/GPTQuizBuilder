import styles from './Header.module.scss';
import logoIcon from '../../assets/Tło usunięte (QuizBuilderLogo).png'


export const Header = () => {
	return (
    <header className={styles.header}>
      <img src={ logoIcon} alt="LogoIcon" />
		</header>
	);
};
