import { useForm } from 'react-hook-form';

export const LoginForm = () => {
	const { register, handleSubmit, reset } = useForm();

	return (
		<form
			onSubmit={handleSubmit(data => {
				console.log(data.login);
				reset();
			})}>
			<input
				type='text'
				{...register('login')}
			/>
		</form>
	);
};
