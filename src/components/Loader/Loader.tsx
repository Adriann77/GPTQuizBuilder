import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const Loader = ({ currentQuizLength }: { currentQuizLength: number }) => {
	const [loaderValue, setLoaderValue] = useState<number>(0);

	useEffect(() => {
		let intervalLength;
		if (currentQuizLength >= 5 && currentQuizLength <= 8) {
			intervalLength = 100;
		} else if (currentQuizLength >= 9 && currentQuizLength <= 13) {
			intervalLength = 135;
		} else if (currentQuizLength >= 14 && currentQuizLength <= 15) {
			intervalLength = 205;
		} else {
			intervalLength = 1000 - currentQuizLength * 40;
		}

		const interval = setInterval(() => {
			setLoaderValue(prevVal => {
				if (prevVal >= 100) {
					clearInterval(interval);
					return 100;
				}
				return prevVal + 1;
			});
		}, intervalLength);

		return () => clearInterval(interval);
	}, [currentQuizLength]);

	const { t } = useTranslation();

	return (
		<div className='flex flex-col  gap-3 items-center'>
			<div className='flex gap-1'>
				<p>{t('global:quizLoader')}</p>
				<span className='self-end loading loading-dots loading-xs'></span>
			</div>
			<div
				className='radial-progress text-primary'
				//@ts-ignore
				style={{ '--value': loaderValue }}
				role='progressbar'>
				{loaderValue}%
			</div>
		</div>
	);
};
