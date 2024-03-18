import { useForm, SubmitHandler } from 'react-hook-form';

export const FormComponent = () => {
	const { register, handleSubmit } = useForm();

	return (
		<form
			onSubmit={handleSubmit(data => {
				console.log(data);
			})}
			className='flex gap-4 flex-col'>
			<input
				{...register('genre')}
				type='text'
				placeholder='Type here'
				className='input input-bordered input-primary w-full max-w-xs'
			/>
			<select
				{...register('difficult')}
				className='select select-primary w-full max-w-xs'>
				<option
					disabled
					selected>
					What is the best TV show?
				</option>
				<option>Game of Thrones</option>
				<option>Lost</option>
				<option>Breaking Bad</option>
				<option>Walking Dead</option>
			</select>
			<input
				{...register('lenght')}
				type='range'
				min={0}
				max='100'
				// value='40'
				className='range range-primary'
			/>
			<button type='submit'>costam</button>
		</form>
	);
};
