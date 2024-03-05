import { Input } from '../Input/Input';
import { InputSelect } from '../InputSelect/InputSelect';
import styles from "./Form.module.scss"

export const Form = () => {
	return (
		<div className={styles.formContainer}>
			<Input
				popup='Np: Biologia, Chemia, JavaScript, Python'
				label='Podaj dziedzine quizu:'></Input>
			<InputSelect
				label='Wybierz poziom trudności:'
				popup='Wybrany poziom odpowiada za poziom zaawansowania i trudność pytań w quizie'
				faq={true}
			/>
			<Input
				popup='Od 1 do 50'
				label='Ustal długość quizu'
			/>
		</div>
	);
};
