/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			// TODO: rename colors to brand-colors
			colors: {
				'light-primary': '#ffffff',
				'light-secondary': '#E0E0E9',
				'dark-primary': '#000000',
				'dark-secondary': '#010101',
				'background-primary': '#111111',
				'brand-yellow': '#F9CD56',
				'brand-yellow-secondary': '#FFC423',
				'brand-grey': '#66666B',
				'brand-grey-secondary': '#1F1F1F',
				'brand-grey-tertiary': '#777E90',
				'brand-blue-primary': 'rgba(27, 231, 255, 1)',
				'brand-green-primary': '#00FFA3',
			},
			fontSize: {
				xxs: ['0.75rem', '1.25rem'],
				xs: ['0.75rem', '1.5rem'],
				sm: ['0.875rem'],
				'text-base-l': ['1rem', '1.25em'],
				'3xl': ['1.75rem', '2.55rem'],
				'3.5xl': ['2rem', '2rem'],
				'4xl': ['2.25rem', '2.5rem'],
				'5xl': ['3rem', '3.75rem'],
				'8xl': ['5.75rem', '7rem'],
				// base: ['1rem', '1.5rem'],
				// lg: ['1.125rem', '1.69rem'],
				// xl: ['1.25rem', '1.81rem'],
				// '2xl': ['1.5rem', '1.875rem'],
				// '3xl': ['1.75rem', '2.1rem'],
				// '4xl': ['2rem', '2.187rem'],
				// '5xl': ['2.75rem', '3.3rem'],
				// '6xl': ['3.5rem', '3.8125rem']
			},
			backgroundImage: {
				'background-hero': "url('./assets/hero-bg-img.svg')",
				'background-building': "url('./assets/bg-building.svg')",
			},
			dropShadow: {
				hero: ' 0px 12px 24px 0px rgba(249, 205, 86, 0.25)',
			},
			flex: {
				20: '1 1 20%',
				40: '1 1 40%',
				60: '1 1 60%',
			},
			maxWidth: {
				128: '32rem',
			},
			
		},
	},
	plugins: [],
};
