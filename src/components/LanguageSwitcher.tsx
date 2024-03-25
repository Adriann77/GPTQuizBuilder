export const LanguageSwitcher = () => {
	return (
		<div className='absolute top-[10%] left-5 flex gap-3 text-xs items-center'>
			<p>POL</p>
			<input
				type='checkbox'
				className=' toggle [--tglbg:black] bg-primary hover:bg-primary border-primary'
			/>
			<p>ENG</p>
		</div>
	);
};
