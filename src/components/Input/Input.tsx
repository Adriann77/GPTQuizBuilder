import { useState } from 'react';
import styles from './Input.module.scss';

interface Props {
	// inputValue: string;
	label: string;
	popup: string;
	type: string;
	inputValue: (genre: string) => void;
	value: string;
	
}
export const Input = ({ label, popup, type, inputValue, value }: Props) => {
	const [inputValueState, setInputValueState] = useState(value);
	const [showPopup, setShowPopup] = useState(false);

	const sendInputValue = (e: any) => {
		const currValue = e.target.value;
		setInputValueState(currValue);
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
					value={value}
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
