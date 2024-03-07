import { useState } from 'react';
import styles from './Input.module.scss';

interface Props {
	// inputValue: string;
	label: string;
	popup: string;
	type: string;
	inputValue: (genre: string) => void;
}
export const Input = ({ label, popup, type, inputValue }: Props) => {
	const [value, setValue] = useState('');
	const [showPopup, setShowPopup] = useState(false);

	const sendInputValue = (e: any) => {
		const currValue = e.target.value;
		setValue(currValue)
		inputValue(currValue)
	}

	return (
		<>
			<div className={styles.container}>
				<label htmlFor=''>{label}</label>
				<input
					max={30}
					className={styles.input}
					onChange={sendInputValue}
					type={type}
				/>
				{type == 'range' && <div className={styles.range}>{value ? value : '15'}</div>}
				<button
					onMouseEnter={() => {
						setShowPopup(true);
					}}
					onMouseLeave={() => {
						setShowPopup(false);
					}}
					className={styles.faq}>
					?
				</button>
				{showPopup && <div className={styles.popup}>{popup}</div>}
			</div>
		</>
	);
};
