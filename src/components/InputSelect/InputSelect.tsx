import { useState } from 'react';
import styles from './InputSelect.module.scss';

interface Props {
	popup: string;
}

export const InputSelect = ({ popup }: Props) => {
	const [showPopup, setShowPopup] = useState(false);

	return (
		<div className={styles.selectForm}>
			<label htmlFor='difficult-level'>Wybierz poziom trudności:</label>
			<select
				name='difficult-level'
				id='difficult-level'>
				<option
					className={styles.disabledOption}
					selected
					disabled
					value='start'>
					Wybierz poziom
				</option>
				<option value='easy'>Podstawa</option>
				<option value='medium'>Średnio-zaawansowany</option>
				<option value='hard'>Expert</option>
			</select>
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
	);
};
