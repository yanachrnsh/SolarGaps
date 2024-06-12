import {
	iconWallet,
	iconAuto,
	iconCO2,
	iconFlash,
	iconLeaf,
	iconPhone,
	videoPlaceholder,
	awardsSmarter,
	awardsAmazon,
	awardsTechtour,
	awardsCop,
	awardsSvief,
} from '../assets';

export const navLinks = [
	{
		id: 'products',
		title: 'products',
	},
	{
		id: 'for-home',
		title: 'for home',
	},
	{
		id: 'for-office',
		title: 'for office',
	},
	{
		id: 'partnership',
		title: 'partnership',
	},
	{
		id: 'mission-and-team',
		title: 'mission & team',
	},
	{
		id: 'contact-us',
		title: 'contact us',
	},
];

export const buttons = [
	{
		id: 'get-a-quote',
		title: 'Get a GUOTE',
	},
	{
		id: 'learn-more',
		title: 'learn more',
	},
];

export const heroSection = {
	button: 'Get a GUOTE',
	header: 'SolarGaps - world`s first smart solar blinds',
};

export const quoteSection = {
	quote: `“The idea to combine solar panels and blinds struck me when I saw sunflowers in the field turning to face the sun.\nWith my invention, I wanted to claim that everyone is responsible for saving our planet.”`,
	author: 'YEVGEN ERIK, CEO',
};

export const whyUsSection = {
	header: 'Why choose\nSolarGaps?',
	categories: [
		{
			title: 'Lower your bills by 30%',
			icon: {
				svg: `${iconWallet}`,
				alt: 'wallet',
			},
		},
		{
			title: 'Generate up to 100Wh',
			icon: {
				svg: `${iconFlash}`,
				alt: 'flash',
			},
		},
		{
			title: 'Smart auto shading mode',
			icon: {
				svg: `${iconAuto}`,
				alt: 'auto',
			},
		},
		{
			title: 'Control with Mobile App',
			icon: {
				svg: `${iconPhone}`,
				alt: 'phone',
			},
		},
		{
			title: 'Eco lifestyle',
			icon: {
				svg: `${iconLeaf}`,
				alt: 'wallet',
			},
		},
		{
			title: 'Reducing carbon footprint',
			icon: {
				svg: `${iconCO2}`,
				alt: 'co2',
			},
		},
	],
};

export const howItWorksSection = {
	header: 'How it works',
	paragraph:
		'SolarGaps smart blinds are the first blinds that automatically track the sun and generate electricity from its energy while keeping your apartment or office cool. Installed on the outside of the building, our blinds will not only lower your power bills but also provide active shading to reduce air conditioning usage and consequently, reduce your carbon footprint.',
	video: `${videoPlaceholder}`,
};

export type AwardCard = (typeof awardsSection.cards)[0];

export const awardsSection = {
	header: 'Awards',
	cards: [
		{
			title: 'The Smarter E',
			icon: {
				svg: `${awardsSmarter}`,
				alt: 'awards-smarter',
			},
			subtitle: '2019, Germany',
		},
		{
			title: 'Amazon',
			icon: {
				svg: `${awardsAmazon}`,
				alt: 'awards-amazons',
			},
			subtitle: '2018, China',
		},
		{
			title: 'TechTour',
			icon: {
				svg: `${awardsTechtour}`,
				alt: 'awards-techTour',
			},
			subtitle: '2018, Poland',
		},
		{
			title: 'COP 24',
			icon: {
				svg: `${awardsCop}`,
				alt: 'awards-cop',
			},
			subtitle: '2018, Poland',
		},
		{
			title: 'Svief Star',
			icon: {
				svg: `${awardsSvief}`,
				alt: 'awards-smarter',
			},
			subtitle: '2017, China',
		},
	],
};
