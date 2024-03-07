import { FullWidthButton } from '../FullWidthButton/FullWidthButton';
import { Input } from '../Input/Input';
import { InputSelect } from '../InputSelect/InputSelect';
import styles from './Form.module.scss';

let quizGenre : string;
let quizDiff : string;
let quizLenght: string = '15';

export const Form = () => {


	const saveAnswers = () => {
		console.log(quizGenre);
		console.log(quizDiff);
		console.log(quizLenght);
	};

	return (
		<div className={styles.formContainer}>
			<Input
				inputValue={(genre) => {
					quizGenre = genre;
				}}
				type='text'
				popup='Np: Biologia, Chemia, JavaScript, Python'
				label='Podaj dziedzine quizu:'></Input>
			<InputSelect
				sendDiff={diff => {
					quizDiff = diff
				}}
				label='Wybierz poziom trudności:'
				popup='Wybrany poziom odpowiada za zaawansowanie pytań w quizie'
				faq={true}
			/>
			<Input
				inputValue={length => {
					quizLenght = length;
				}}
				type='range'
				popup='Od 1 do 30'
				label='Ustal długość quizu'
			/>
			<FullWidthButton onClick={saveAnswers}>Wyślij</FullWidthButton>
		</div>
	);
};
