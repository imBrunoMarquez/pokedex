/** @type {import('tailwindcss').Config} */
export const content = ['./src/**/*.tsx', './index.html'];
export const theme = {
	extend: {
		colors: {
			onyx: '#0F0F0F',
			night: '#0D0F12',
			'baltic-sea': '#272727',
			'rangoon-green': '#19191B',
			'quill-grey': '#D4D4D4',
			'dark-jungle-green': '#191B1E',
			fire: '#F08030cc',
			water: '#6890F0cc',
			grass: '#78C850cc',
			poison: '#A040A0cc',
			normal: '#A8A878cc',
			electric: '#F8D030cc',
			ice: '#98D8D8cc',
			fighting: '#C03028cc',
			ground: '#E0C068cc',
			flying: '#A890F0cc',
			psychic: '#F85888cc',
			bug: '#A8B820cc',
			rock: '#B8A038cc',
			ghost: '#705898cc',
			dark: '#705848cc',
			dragon: '#7038F8cc',
			steel: '#B8B8D8cc',
			fairy: '#905F63cc',
			unkown: '#6AA596cc',
		},
		borderColor: {
			fire: '#F08030cc',
			water: '#6890F0cc',
			grass: '#78C850cc',
			poison: '#A040A0cc',
			normal: '#A8A878cc',
			electric: '#F8D030cc',
			ice: '#98D8D8cc',
			fighting: '#C03028cc',
			ground: '#E0C068cc',
			flying: '#A890F0cc',
			psychic: '#F85888cc',
			bug: '#A8B820cc',
			rock: '#B8A038cc',
			ghost: '#705898cc',
			dark: '#705848cc',
			dragon: '#7038F8cc',
			steel: '#B8B8D8cc',
			fairy: '#905F63cc',
			unkown: '#6AA596cc',
		},
		animation: {
			tilt: 'tilt 10s infinite linear',
			blob: 'blob 7s infinite',
		},
		keyframes: {
			tilt: {
				'0%, 50%, 100%': {
					transform: 'rotate(0deg)',
				},
				'25%': {
					transform: 'rotate(0.5deg)',
				},
				'75%': {
					transform: 'rotate(-0.5deg)',
				},
			},
			blob: {
				'0%': {
					transform: 'translate(0px, 0px) scale(1)',
				},
				'33%': {
					transform: 'translate(30px, -50px) scale(1.1)',
				},
				'66%': {
					transform: 'translate(-20px, 20px) scale(0.9)',
				},
				'100%': {
					transform: 'tranlate(0px, 0px) scale(1)',
				},
			},
		},
	},
};
export const plugins = [];
