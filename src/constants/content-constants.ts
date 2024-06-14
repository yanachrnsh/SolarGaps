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
	exampleHouse,
	logo,
	bgBuilding,
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

export const logoIcon = {
	src: `${logo}`,
	description: 'Solar Gaps home page',
};

export const heroSection = {
	button: 'Get a GUOTE',
	header: 'SolarGaps - world`s first smart solar blinds',
};

export const quoteSection = {
	quote: `“The idea to combine solar panels and blinds struck me when I saw sunflowers in the field turning to face the sun.\nWith my invention, I wanted to claim that everyone is responsible for saving our planet.”`,
	author: 'YEVGEN ERIK, CEO',
};

export type WhyUsCardIcon = {src: string, description: string};

export const whyUsSection = {
	header: 'Why choose\nSolarGaps?',
	cards: [
		{
			title: 'Lower your bills by 30%',
			icon: {
				src: `${iconWallet}`,
				description: 'wallet',
			},
		},
		{
			title: 'Generate up to 100Wh',
			icon: {
				src: `${iconFlash}`,
				description: 'flash',
			},
		},
		{
			title: 'Smart auto shading mode',
			icon: {
				src: `${iconAuto}`,
				description: 'auto',
			},
		},
		{
			title: 'Control with Mobile App',
			icon: {
				src: `${iconPhone}`,
				description: 'phone',
			},
		},
		{
			title: 'Eco lifestyle',
			icon: {
				src: `${iconLeaf}`,
				description: 'wallet',
			},
		},
		{
			title: 'Reducing carbon footprint',
			icon: {
				src: `${iconCO2}`,
				description: 'co2',
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
				src: `${awardsSmarter}`,
				description: 'awards-smarter',
			},
			subtitle: '2019, Germany',
		},
		{
			title: 'Amazon',
			icon: {
				src: `${awardsAmazon}`,
				description: 'awards-amazons',
			},
			subtitle: '2018, China',
		},
		{
			title: 'TechTour',
			icon: {
				src: `${awardsTechtour}`,
				description: 'awards-techTour',
			},
			subtitle: '2018, Poland',
		},
		{
			title: 'COP 24',
			icon: {
				src: `${awardsCop}`,
				description: 'awards-cop',
			},
			subtitle: '2018, Poland',
		},
		{
			title: 'Svief Star',
			icon: {
				src: `${awardsSvief}`,
				description: 'awards-smarter',
			},
			subtitle: '2017, China',
		},
	],
};

// TODO: reneme src to img or icon


export type ProductCard = (typeof productsSection.products.blinds);

export const productsSection = {
	header: 'Products',

	products: {
		blinds: {
			title: 'Blinds',
			img: {
				src: `${imgBlinds}`,
				description: 'Black blinds for windows',
			},
		},
		panel: {
			title: 'Panel',
			img: {
				src: `${imgPanel}`,
				description: 'Solar panel',
			},
		},
		motor: {
			title: 'Motor',
			img: {
				src: `${imgMotor}`,
				description: 'Motor',
			},
		},
		inverter: {
			title: 'Inverter',
			img: {
				src: `${imgInverter}`,
				description: 'Inverter',
			},
		},
	},
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
			img: { src: `${loftHome}`, description: 'Loft apartment with a glass roof' },
		},
		{
			title: 'Eco House',
			subtitle: 'Lithuania',
			img: { src: `${ecoHouse}`, description: 'Eco house lined with wood' },
		},
		{
			title: 'Patio in Hengelo',
			img: { src: `${patio}`, description: 'Patio made of brick' },
			subtitle: 'Netherlands',
		},
	],
};

export const imageSection = {
	img: { src: `${bgBuilding}`, description: 'Building with vertical solar' },
};

export type ExampleTableRow = (typeof forOfficeSection.exampleCard.table)[0];

export const forOfficeSection = {
	header: 'For office',
	title: 'Smart Blinds with built-in solar panels for your office building',
	paragraph:
		'Using the abundant vertical space SolarGaps can block heat entering through the windows and produce energy to power main office operations (up to 100 Watt per 1 sq.m.)',
	button: 'Get a GUOTE',
	exampleCard: {
		title: 'Project example',
		img: { src: `${exampleHouse}`, description: 'Modern house with vertical solar panels' },
		table: [
			{
				category: 'Type of commercial property',
				information: 'Hotel',
			},
			{
				category: 'Location',
				information: 'Cyprus',
			},
			{
				category: 'Window area',
				information: '250 sq.m.',
			},
			{
				category: 'Facing',
				information: 'South-East',
			},
			{
				category: 'Daily generation',
				information: '23 kWh',
			},
			{
				category: 'Project cost',
				information: '€ 130000',
			},
			{
				category: 'Annual savings',
				information: '€ 44 000',
			},
		],
	},
};
