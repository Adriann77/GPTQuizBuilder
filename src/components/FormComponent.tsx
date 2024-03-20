import { useForm } from 'react-hook-form';

interface Props {
	userAnswer: (genre: string, difficult: string, length: number) => void;
}

export const FormComponent = ({ userAnswer }: Props) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
		reset,
	} = useForm({
		defaultValues: {
			genre: '',
			difficult: 'chooseDiff',
			length: 10,
		},
	});

	return (
		<form
			onSubmit={handleSubmit(data => {
				userAnswer(data.genre, data.difficult, data.length);
				reset();
			})}
			className='flex gap-4 flex-col'>
			<input
				{...register('genre', { required: 'this is required', maxLength: 10 })}
				type='text'
				placeholder='Type here'
				className='input input-bordered input-primary w-full max-w-xs'
			/>
			<p>{errors.genre?.message}</p>
			{watch('genre').length > 12 && <p>Za długie</p>}
			<select
				defaultValue={watch('difficult')}
				{...register('difficult', {
					required: 'Musisz wybrać poziom trudności.',
					validate: value => value !== 'chooseDiff' || 'Wybierz poziom trudnosci',
				})}
				className='select select-primary w-full max-w-xs'>
				<option
					disabled
					value='chooseDiff'>
					Wybierz poziom trudności
				</option>
				<option value='basic'>Podstawowe pytania</option>
				<option value='intermediate'>Średnio-zaawansowane</option>
				<option value='expert'>Expert w dziedzinie</option>
			</select>
			<p>{errors.difficult?.message}</p>
			<input
				{...register('length', { min: 5, max: 15 })}
				type='range'
				min={5}
				max={15}
				className='range range-primary'
			/>
			<p>{watch('length')}</p>
			<input type='submit' />
		</form>
	);
};
