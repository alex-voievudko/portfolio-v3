import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./sections/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				background: '#011627',
				card: '#1c2b3b',
				primary: '#ff9f1c',
				secondary: '#2ec4b6', // e71d36
				typography: '#8b8b8b',
				white: '#fdfffc',
			},
			fontFamily: {
				roboto: ['"Roboto Mono"', 'monospace'],
			},
			backgroundImage: {
				'gradient-linear': 'linear-gradient(rgb(45, 50, 58), rgb(34, 37, 43) 99%)',
				'gradient-primary': 'linear-gradient(rgb(250, 84, 0) -7%, rgb(250, 62, 0) 105%)',
			},
			boxShadow: {
				card: 'rgba(99, 104, 135, 0.5) 0px 1px 0px 0px inset',
			},
		},
	},
	plugins: [],
};
export default config;
