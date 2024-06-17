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
	imgGlobe,
	imgYevgen,
	imgOleksandr,
	imgAndrew,
	imgYankoDesign,
	imgTechCrunch,
	imgInterSolar,
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

export type WhyUsCardIcon = { src: string; description: string };

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

export type ProductCard = typeof productsSection.products.blinds;

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

export type MilestoneCard = (typeof milestonesSection.cards)[0];

export const milestonesSection = {
	header: 'Milestones',
	cards: [
		{
			year: '2016',
			description: 'NASA AMES Center\nSingularity University\nFirst Patent Received',
		},
		{
			year: '2017',
			description: 'Top Silicon Valley Startups HAX Accelerator\nSvief Star Award',
		},
		{
			year: '2017',
			description: 'CE Certification\nDeclaration Of Performance\nDeclaration Of Conformity\nAmazon Innovation Award',
		},
		{
			year: '2018',
			description: 'PCT Patent\nSmarterE Award\nFull-Scale Manufacturing',
		},
		{
			year: '2019',
			description: 'Horizon 2020 EUR 1M Grant\nGerman Design Award\nKaterva Sustainability Award',
		},
		{
			year: '2020',
			description: 'B2B Product Development\nDubai World Expo 2020\nNaN Arquitectura Award',
		},
	],
};

export type BulletsKeys = keyof typeof partnershipsSection.cards.bullets;

export const partnershipsSection = {
	header: 'Partnerships',
	paragraph1:
		'We are actively pursuing partnership around the world to assure our solution is available worldwide. Our marketing team will provide you with a line of customers to your showroom, while we expect professional installation and service from you.',
	paragraph2: 'Join our team! With SolarGaps your building can become one step closer to Net Zero..',
	cards: {
		img: {
			src: `${imgGlobe}`,
			description: 'Global partnership map',
		},
		bullets: [
			{ title: 'Headquarters', iconColor: `brand-yellow` },
			{ title: 'Manufacturing', iconColor: `brand-blue-primary` },
			{ title: 'Distributors', iconColor: `brand-green-primary` },
		],
		distributor: {
			title: 'Distributor',
			description:
				'authorized representative in a designated country, who performs full-cycle operations from imports to installation and after-service service',
			button: 'APPLY',
		},
		sales: {
			title: 'Sales Partner',
			description:
				'local sales team, who will refer new customers to us and bring exciting deals, but the execution of the project will be forwarded to an authorized distributor',
			button: 'APPLY',
		},
	},
};

export type MissionTeamCard = (typeof missionTeamSection.cards)[0];

export const missionTeamSection = {
	header: 'Mission & Team',
	title: 'Since 2016 SolarGaps has been on a mission to make energy free and accessible to all',
	paragraph1:
		'We are pioneering a method of energy distribution that will power the offices, homes and cities of the future. By exploring innovative concepts and adopting new technologies, we can help move every city closer to their Net Zero goals.',
	paragraph2:
		'JIt is our vision that one day, the home will not be connected to the grid, but rather the grid will be connected to the homes. Together we can create a brighter future.',
	cards: [
		{
			title: 'Yevgen Erik',
			subtitle: 'CEO',
			img: { src: `${imgYevgen}`, description: 'Photo of CEO' },
		},
		{
			title: 'Oleksandr Krotenko',
			subtitle: 'COO',
			img: { src: `${imgOleksandr}`, description: 'Photo of COO' },
		},
		{
			title: 'Andrew Koval',
			subtitle: 'CTO',
			img: { src: `${imgAndrew}`, description: 'Photo of CTO' },
		},
	],
};

export const pressAboutUsSection = {
	header: 'Press About us',
	cards: [
		{
			title: 'Your windows become powerful with SolarGaps',
			subtitle: 'TechCrunch',
			button: 'READ MORE',
			date: 'May 31, 2017',
			img: { src: `${imgTechCrunch}`, description: '' },
		},
		{
			title: 'Charge your Tesla and lower your electric bill with these Solar blinds',
			subtitle: 'Yanko Design',
			button: 'READ MORE',
			date: 'February 2, 2020',
			img: { src: `${imgYankoDesign}`, description: '' },
		},
		{
			title: `The finalist of ‘The smarter Eʼ 2019in the category ‘Smart Renewable Energy`,
			subtitle: 'InterSolar',
			button: 'READ MORE',
			date: 'February 2, 2020',
			img: { src: `${imgInterSolar}`, description: '' },
		},
	],
};
