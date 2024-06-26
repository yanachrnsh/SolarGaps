export const styles = {
	text: ``,

	header: `mx-auto flex max-w-[120rem] items-center justify-between px-6 xl:px-14 py-6`,
	navLink: 'inline-block px-3 xl:px-7 py-3 font-extrabold hover:text-brand-yellow',
	navBarDesk: 'hidden items-center xl:flex xl:flex-1 xl:justify-end',
	navBarMob: 'flex flex-1 justify-end xl:hidden',

	sectionLayout: `mx-auto max-w-[120rem] py-6 px-6 xl:px-14 xl:py-14`,
	sectionHero: `mx-auto max-w-[120rem] pt-32 pb-12 px-6 xl:py-32 xl:px-14`,
	sectionImgBg: 'bg-no-repeat bg-cover bg-center',
	sectionImgLayout: 'mx-auto max-w-[120rem] my-6 mx-6 xl:mx-14 xl:my-14',

	flexSection: 'flex justify-between flex-wrap gap-5 xl:gap-12',
	sectionRight: 'w-full  xl:flex-60',
	sectionLeft: ' w-full  xl:flex-40',

	h1: `text-5xl xl:text-8xl font-semibold -tracking-[0.012em]`,
	h2: 'text-3xl xl:text-5xl font-semibold tracking-tight',
	h3: 'text-2xl xl:text-4xl font-semibold -tracking-wider pb-8 xl:pb-12',
	h4: 'text-brand-yellow text-xl text-center xl:text-start xl:text-2xl font-semibold ',
	h5: 'text-base xl:text-2xl font-semibold tracking-tight',
	h6: 'text-sm xl:text-xl font-semibold tracking-tight',
	// h4: text-base font-semibold

	paddings: {
		headerSection: 'pb-4 xl:pb-12',
	},

	input: `outline-none align-middle p-6	m-0 min-w-16 bg-background-primary rounded-xl border border-brand-grey  w-full placeholder:font-semibold placeholder:text-light-secondary`,
	button: `flex gap-3 group rounded-lg bg-brand-yellow px-[4.5rem] py-5 text-xxs font-extrabold  text-dark-secondary shadow-sm  hover:bg-brand-yellow-secondary hover:drop-shadow-hero max-h-16 w-full max-w-[20.4rem] justify-center items-center`,
};

export const hoverStyles = {
	transition: 'transition-all duration-300 ease-in-out',
};
