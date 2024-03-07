import styles from './ErrorParaph.module.scss';
import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
}

export const ErrorParaph = ({ children }: Props) => {
	return <p className={styles.errorParaph}>{children}</p>;
};
