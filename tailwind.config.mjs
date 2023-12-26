/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily : {
				advantage: ['./public/fonts/advantageregular.ttf', 'serif'],
			},
			colors : {
				'darkcolor': '#265073',
				'interdarkcolor': '#2D9596',
				'interlightcolor': '#9AD0C2',
				'lightcolor': '#ECF4D6',
			}
		},
	},
	plugins: [],
}
