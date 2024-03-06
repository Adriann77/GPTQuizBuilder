import { FullWidthButton } from '../FullWidthButton/FullWidthButton';
import { Input } from '../Input/Input';
import { InputSelect } from '../InputSelect/InputSelect';
import styles from "./Form.module.scss"

export const Form = () => {


	const showAlert = () => {
		alert('elo')
	}
	return (
		<div className={styles.formContainer}>
			<Input
				popup='Np: Biologia, Chemia, JavaScript, Python'
				label='Podaj dziedzine quizu:'></Input>
			<InputSelect
				label='Wybierz poziom trudności:'
				popup='Wybrany poziom odpowiada za zaawansowanie pytań w quizie'
				faq={true}
			/>
			<Input
				popup='Od 1 do 50'
				label='Ustal długość quizu'
            />
            <FullWidthButton onClick={showAlert}>Wyślij</FullWidthButton>
		</div>
	);
};
