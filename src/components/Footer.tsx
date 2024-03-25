import { useState } from 'react';

export const Footer = () => {
	const currYear = new Date().getFullYear();

	return (
		<footer className='footer footer-center p-4 bg-base-300 text-base-content'>
			<aside>
				<p>Copyright © {currYear} - All right reserved by GPT-QuizBuilder</p>
			</aside>
		</footer>
	);
};
