export const DaisyTest = () => {
	return (
		<select
			defaultValue={'What is the best TV show?'}
			className='select select-primary w-full max-w-xs'>
			<option disabled>What is the best TV show?</option>
			<option>Game of Thrones</option>
			<option>Lost</option>
			<option>Breaking Bad</option>
			<option>Walking Dead</option>
		</select>
	);
};
