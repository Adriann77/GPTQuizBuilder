import { useState } from 'react';
import styles from './Input.module.scss';

interface Props {
	// inputValue: string;
	label: string;
	popup: string;
}

export const Input = ({ label, popup }: Props) => {
	const [value, setValue] = useState('');
	const [showPopup, setShowPopup] = useState(false);

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
				<button
					onMouseEnter={() => {
						setShowPopup(true);
                    }}
                    onMouseLeave={() => {
                        setShowPopup(false)
                    }}
					className={styles.faq}>
					?
				</button>
                {showPopup && <div className={styles.popup}>{popup}</div>}
			</div>
		</>
	);
};
