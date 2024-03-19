import { useForm } from 'react-hook-form';

export const FormComponent = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
	} = useForm({
		defaultValues: {
			genre: '',
			difficult: '',
			lenght: 10,
		},
	});

	return (
		<form
			onSubmit={handleSubmit(data => {
				console.log(data.genre);
			})}
			className='flex gap-4 flex-col'>
			<input
				{...register('genre', { required: 'this is required', maxLength: 10 })}
				type='text'
				placeholder='Type here'
				className='input input-bordered input-primary w-full max-w-xs'
			/>
			<p>{errors.genre?.message}</p>
			<select
				defaultValue='chooseDiff'
				defaultChecked='chooseDiff'
				{...register('difficult')}
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
			<input
				{...register('lenght', { min: 5, max: 15 })}
				type='range'
				min={5}
				max={15}
				className='range range-primary'
			/>
			<p>{watch('lenght')}</p>
			<input type='submit' />
		</form>
	);
};
