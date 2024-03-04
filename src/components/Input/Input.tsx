import { useState } from 'react';
import styles from './Input.module.scss';

interface Props {
	// inputValue: string;
	label: string;
}

export const Input = ({ label }: Props) => {
	const [value, setValue] = useState('');

	return (
		<>
			<div className={styles.container}>
				<label htmlFor=''>{label}</label>
				<input
					className={styles.input}
					onChange={e => {
						setValue(e.target.value);
					}}
					type='text'
                />
                <button className={styles.faq}>?</button>
			</div>
		</>
	);
};
