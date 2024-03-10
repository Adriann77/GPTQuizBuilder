import { useState } from 'react';
import styles from './InputSelect.module.scss';

interface Props {
	popup: string;
	label: string;
	faq?: boolean;
	sendDiff: (odb: string) => void;
	value: string;
}

export const InputSelect = ({ popup, label, faq, sendDiff, value }: Props) => {
	const [showPopup, setShowPopup] = useState(false);
	const [isSelected, setIsSelected] = useState('');

	const selectedDiff = (e: any) => {
		const selectedValue = e.target.value;
		setIsSelected(selectedValue);
		sendDiff(selectedValue);
	};

	return (
		<div className={styles.selectForm}>
			<label htmlFor='difficult-level'>{label}</label>
			<select
				defaultValue={'start'}
				onChange={selectedDiff}
				name='difficult-level'
				id='difficult-level'>
				<option
					className={styles.disabledOption}
					disabled
					value='start'>
					Wybierz poziom
				</option>
				<option value='podstawowym'>Podstawowy</option>
				<option value='średnio-zaawansowanym'>Średnio-zaawansowany</option>
				<option value='experckim'>Expert</option>
			</select>
			{faq && (
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
			)}
			{showPopup && <div className={styles.popup}>{popup}</div>}
		</div>
	);
};
