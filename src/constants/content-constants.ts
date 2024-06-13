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
	imgBlinds,
	imgInverter,
	imgMotor,
	imgPanel,
  loftHome,
  ecoHouse,
  patio,
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

// TODO: reneme svg to img or icon

export const productsSection = {
	header: 'Products',
	products: [
		{
			title: 'Blinds',
			svg: `${imgBlinds}`,
		},
		{
			title: 'Panel',
			svg: `${imgPanel}`,
		},
		{
			title: 'Motor',
			svg: `${imgMotor}`,
		},
		{
			title: 'Inverter',
			svg: `${imgInverter}`,
		},
	],
};

export type ForHomeCard = (typeof forHomeSection.cards)[0];

export const forHomeSection = {
	header: 'For home',
	paragraph:
		'SolarGaps smart external blinds are being installed worldwide. At the moment we have more than 300 installations in 35 countries and this number increases every month. Here you will find some photos that show installations in various locations. SolarGaps facade blinds with built-in PV panels is a perfect solution both for homes and businesses. Available in various color solutions, SolarGaps will match any interior and exterior design.',
	cards: [
		{
			title: 'Loft apartment in Hengelo',
			subtitle: 'Netherlands',
			svg: `${loftHome}`,
		},
		{
			title: 'Eco House',
      subtitle: "Lithuania",
			svg: `${ecoHouse}`,
		},
		{
			title: 'Patio in Hengelo',
			svg: `${patio}`,
      subtitle: 'Netherlands',
		},
	],
};
