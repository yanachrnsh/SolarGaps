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
				xxs: ['0.75rem', '1.25rem'], //12px - 20px keep this 
				xs: ['0.75rem', '1.5rem'], //12px - 24px 
				sm: ['0.875rem'], //14px 14 24 
				'text-base-l': ['1rem', '1.25em'], //16px - 20px TODO: keep 16 24 and remove 16 20, check 16 16 in button 
				'3xl': ['1.75rem', '2.55rem'], //28px - 41px
				'3.5xl': ['2rem', '2rem'], //32px
				'4xl': ['2.25rem', '2.5rem'], //36px - 40px
				'5xl': ['3rem', '4rem'], //48px - 60px - TODO: keep this 
				'6xl': ['3rem', '3.75rem'], //48px - 64px
				'8xl': ['5.75rem', '7rem'], //92px - 112px
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
				40: '1 1 32%',
				60: '1 1 59%',
			},
			maxWidth: {
				128: '32rem',
			},
			screens: {
				xs: '375px',
				'3xl': '1600px',
				// 'sm': '640px',
				// // => @media (min-width: 640px) { ... }

				// 'md': '768px',
				// // => @media (min-width: 768px) { ... }

				// 'lg': '1024px',
				// // => @media (min-width: 1024px) { ... }

				// 'xl': '1280px',
				// // => @media (min-width: 1280px) { ... }

				// '2xl': '1536px',
				// // => @media (min-width: 1536px) { ... }
			},
			letterSpacing: {},
			gridTemplateColumns:{
				"awards": "repeat(5, minmax(224px, 1fr))",
			}
		},
	},
	plugins: [],
};
