import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher';

interface Props {
	updateQuizParams: (genre: string, difficult: string, length: number) => void;
}

export const Form = ({ updateQuizParams }: Props) => {
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

	const { t } = useTranslation();

	return (
		<>
			<LanguageSwitcher />
			<form
				onSubmit={handleSubmit(data => {
					updateQuizParams(data.genre, data.difficult, data.length);
					reset();
				})}
				className='flex gap-4 flex-col items-center justify-center lg:p-16 lg:bg-black/40 rounded-3xl text-xl'>
				<input
					{...register('genre', { required: `${t('global:inputOneError')}`, maxLength: 50 })}
					type='text'
					placeholder={t('global:inputOne')}
					className='input input-bordered input-primary w-full max-w-xs h-16 text-xl bg-[#1A202C]'
				/>
				<p className='text-error text-sm'>{errors.genre?.message}</p>
				{watch('genre').length > 50 && <p className='text-error text-sm'>Za długie</p>}
				<select
					defaultValue={watch('difficult')}
					{...register('difficult', {
						required: `${t('global:inputOneError')}`,
						validate: value => value !== 'chooseDiff' || `${t('global:inputTwoError')}`,
					})}
					className='select select-primary w-full max-w-xs h-16 bg-[#1A202C] text-xl '
					style={{
						color: 'white',
					}}>
					<option
						disabled
						value='chooseDiff'>
						{t('global:inputTwo')}
					</option>
					<option value='basic'>{t('global:inputTwoOptionOne')}</option>
					<option value='intermediate'>{t('global:inputTwoOptionTwo')}</option>
					<option value='expert'>{t('global:inputTwoOptionThree')}</option>
				</select>
				<p className='text-error text-sm'>{errors.difficult?.message}</p>
				<div className='flex flex-col gap-4 w-[320px] p-4 border-2 border-primary rounded-lg bg-[#1A202C]'>
					<label
						className='text-white'
						htmlFor=''>
						{t('global:inputThree')}
					</label>
					<input
						{...register('length', { min: 5, max: 15 })}
						type='range'
						min={5}
						max={15}
						className='range range-primary max-w-[320px]'
					/>
					<p className='self-center'>{watch('length')}</p>
				</div>
				<button className='btn btn-primary btn-outline w-[320px] h-16 text-xl bg-[#1A202C]'>
					{t('global:button')}
				</button>
			</form>
		</>
	);
};
