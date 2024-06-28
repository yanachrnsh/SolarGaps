import { styles } from '../constants/style-constants';
import { pressAboutUsSection } from '../constants/content-constants';
import { SectionHeader } from '../components/section-header/section-header.component';
import { FC } from 'react';

export const PressAboutUsSection = () => {
	const { header, cards } = pressAboutUsSection;

	return (
		<section className={styles.sectionLayout}>
			<SectionHeader header={header} headerStyles={`${styles.paddings.headerSection}`} />

			<div className="grid grid-cols-1 grid-rows-3">
				{cards.map(card => (
					<PressCard key={card.subtitle} card={card} />
				))}
			</div>
		</section>
	);
};

// TODO: Cards flex: 1 1 auto;
type PressCardProps = {
	card: {
		title: string;
		subtitle: string;
		button: string;
		date: string;
		img: {
			src: string;
			description: string;
		};
	};
};

// TODO: update font size
// TODO: update padding pr-16 to gap between elements

const PressCard: FC<PressCardProps> = ({ card }) => {
	const { title, subtitle, button, date, img } = card;
	return (
		<div className="flex flex-col justify-center border-y border-brand-grey py-8 xl:flex-row">
			<div className="flex flex-40 flex-col gap-3 xl:flex-row xl:gap-0 xl:pr-16">
				<span className="flex-20 text-sm text-brand-grey-tertiary">{date}</span>
				<div className="flex-1 rounded-lg bg-light-primary px-7 pb-9 pt-[53px]">
					<img src={img.src} alt={img.description} className="max-h-[5.7rem] w-full max-w-[14.75rem]" />
				</div>
			</div>
			<div className="flex flex-60 flex-col justify-between gap-5 pt-5 xl:pt-0">
				<h4 className={styles.h4}>{title}</h4>
				<span className="text-base font-semibold text-brand-grey-tertiary xl:text-xl">{subtitle}</span>
				<a href="#" className="text-base font-semibold text-brand-yellow xl:pt-3">
					{button}
				</a>
			</div>
		</div>
	);
};
