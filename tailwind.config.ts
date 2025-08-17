import type { Config } from 'tailwindcss';

const config: Config = {
	darkMode: 'class',
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			keyframes: {
				moveDiagonal: {
					'0%': {
						top: '-150%',
						left: '-150%',
					},
					'100%': {
						top: '100%',
						left: '100%',
					},
				},
			},
			animation: {
				moveDiagonal: 'moveDiagonal 3s ease-in-out infinite',
			},
			colors: {
				'dark-color': 'rgba(6, 5, 15, 1)',
			},
			fontFamily: {
				sans: ['var(--font-inter)'],
				mono: ['var(--font-roboto-mono)'],
			},
		},
	},
	plugins: [],
};
export default config;
