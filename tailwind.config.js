/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {},

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
