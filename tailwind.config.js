/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				poppins: 'Poppins',
				montserrat: 'Montserrat',
			},
		},

		container: {
			center: true,
			screens: {
				sm: { min: '640px' },
				md: { min: '768px' },
				lg: { min: '1024px' },
				xl: { min: '1280px' },
				'2xl': { min: '1480px' },
			},
		},

		colors: {
			primary: '#F9F1E7',
		},
	},
	plugins: [],
}
