export const styles = {
	text: ``,

	header: `mx-auto flex max-w-[120rem] items-center justify-between px-6 lg:px-14 py-6`,
	navLink: 'inline-block px-3 xl:px-7 py-3 font-extrabold hover:text-brand-yellow',
	navBarDesk: 'hidden items-center lg:flex lg:flex-1 lg:justify-end',
	navBarMob: 'flex flex-1 justify-end lg:hidden',

	sectionLayout: `mx-auto max-w-[120rem] py-6 px-6 lg:px-14 lg:py-14`,
	sectionHero: `mx-auto max-w-[120rem] px-6 py-12 pt-34 lg:py-32 lg:px-14`,
	sectionImgBg: 'bg-no-repeat bg-cover bg-center',

	flexSection: 'flex justify-between flex-wrap gap-12',
	sectionRight: 'w-full  lg:flex-60',
	sectionLeft: ' w-full  lg:flex-40',

	h1: `text-6xl lg:text-8xl font-semibold -tracking-[0.012em]`,
	h2: 'text-4xl font-semibold -tracking-wider pb-12',

	paddings: {
		headerSection: 'pb-4 lg:pb-12',
	},

	input: `outline-none align-middle p-6	m-0 min-w-16 bg-background-primary rounded-xl border border-brand-grey  w-full placeholder:font-semibold placeholder:text-light-secondary`,
	button: `flex gap-3 group rounded-lg bg-brand-yellow px-[4.5rem] py-5 text-xs font-extrabold  text-dark-secondary shadow-sm  hover:bg-brand-yellow-secondary hover:drop-shadow-hero max-h-16`,
};

export const hoverStyles = {
	transition: 'transition-all duration-300 ease-in-out',
};
