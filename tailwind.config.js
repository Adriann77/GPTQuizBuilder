module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	plugins: [require('daisyui')],
	extend: {
		fontFamily: {
			poppins: ['Poppins', 'sans-serif'],
		},
		fontWeight: {
			regular: 400,
			medium: 500,
			semibold: 600,
		},
		fontSize: {
			h1: ['42px', { lineHeight: '34px', letterSpacing: 0, fontWeight: '400' }],
			h2: ['30px', { lineHeight: '24px', letterSpacing: 0 }],
			h3: ['14px', { lineHeight: '16px', letterSpacing: 0 }],
			body: ['14px', { lineHeight: '20px', letterSpacing: 0 }],
			button: ['14px', { lineHeight: '16px', letterSpacing: 0 }],
		},
		colors: {
			'dark-granat': '#1A202C',
		},
		body: {

			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
			},
		},
	},
	daisyui: {
		themes: ["cupcake", "dark", "light"]
	}
};
