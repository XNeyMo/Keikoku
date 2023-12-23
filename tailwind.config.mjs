/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'poppins': ['"Poppins"', 'serif'],
			},
		},

		colors: {
			'lightcolor': '#F8F8F8',
			'interlightcolor': '#3498DB',
			'interdarkcolor': '#1E6A99',
			'darkcolor': '#333333'
		}
	},
	plugins: [],
}
