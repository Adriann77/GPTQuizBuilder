import { ReactNode } from 'react';
import styles from "./FullWidthButton.module.scss"


interface Props {
	children: ReactNode;
	onClick: () => void;
}

export const FullWidthButton = ({ children, onClick }: Props) => {
	return (
		<button
			className={styles.fullWidthButton}
			onClick={onClick}>
			{children}
		</button>
	);
};
