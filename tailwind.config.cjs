/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			sans: ['archivo', 'ui-sans-serif']
		},
		extend: {
			colors: {
				'bg-primary-1': '#5D5B5D',
				'bg-primary-2': '#292728',
				'custom-primary-1': '#DEB35B',
				'custom-primary-2': '#C2A461'
			}
		}
	},
	plugins: []
};
