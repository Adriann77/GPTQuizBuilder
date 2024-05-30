import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

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
      <form
        onSubmit={handleSubmit((data) => {
          updateQuizParams(data.genre, data.difficult, data.length);
          reset();
        })}
        className="relative -mt-2 flex h-[80vh] flex-col items-center justify-center gap-2 rounded-3xl text-xl lg:p-16"
      >
        <p className="my-1 text-xs text-[gray]">np. Biologia, Chemia, Psychologia...</p>

        <input
          {...register('genre', {
            required: `${t('global:inputOneError')}`,
            maxLength: 240,
            pattern: {
              value: /^[^{}()\/]*$/,
              message: t('global:genreValidationError'),
            },
          })}
          type="text"
          placeholder={t('global:inputOne')}
          className="input input-bordered input-primary h-16 w-full max-w-xs border-2 bg-[#1A202C] text-xl"
        />
        <p className="text-sm text-error">{errors.genre?.message}</p>
        {watch('genre').length > 50 && <p className="text-sm text-error">Za długie</p>}
        <select
          defaultValue={watch('difficult')}
          {...register('difficult', {
            required: `${t('global:inputOneError')}`,
            validate: (value) => value !== 'chooseDiff' || `${t('global:inputTwoError')}`,
          })}
          className="select select-primary h-16 w-full max-w-xs border-2 bg-[#1A202C] text-xl"
          style={{
            color: `${watch('difficult') !== 'chooseDiff' ? 'white' : 'grey'}`,
          }}
        >
          <option disabled value="chooseDiff">
            {t('global:inputTwo')}
          </option>
          <option value="basic">{t('global:inputTwoOptionOne')}</option>
          <option value="intermediate">{t('global:inputTwoOptionTwo')}</option>
          <option value="expert">{t('global:inputTwoOptionThree')}</option>
        </select>
        <p className="text-sm text-error">{errors.difficult?.message}</p>
        <div className="flex w-[320px] flex-col gap-4 rounded-lg border-2 border-primary bg-[#1A202C] p-4">
          <label className="text-center" htmlFor="">
            {t('global:inputThree')}
          </label>
          <input
            {...register('length', { min: 5, max: 15 })}
            type="range"
            min={5}
            max={15}
            className="range range-primary max-w-[320px]"
          />
          <p className="self-center">{watch('length')}</p>
        </div>
        <button className="btn btn-outline btn-primary m-2 h-16 w-[320px] border-2 bg-[#1A202C] text-xl">
          {t('global:button')}
        </button>
      </form>
    </>
  );
};
