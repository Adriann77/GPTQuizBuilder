export const Footer = () => {
	const currYear = new Date().getFullYear();

	return (
		<footer
			className='footer footer-center p-4 bg-[#1A202C]
         text-[#fff] text-xs h-[7vh] bottom-0 fixed '>
			<aside>
				<p>Copyright © {currYear} - All right reserved by GPT-QuizBuilder</p>
			</aside>
		</footer>
	);
};
