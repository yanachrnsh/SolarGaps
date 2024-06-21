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
		<div className="flex border-y border-brand-grey py-8 ">
			<div className="flex-40 flex pr-16">
				<span className="flex-20 text-sm text-brand-grey-tertiary">{date}</span>
				<div className="flex-1 bg-light-primary rounded-lg px-7 pt-[53px] pb-9">
					<img src={img.src} alt={img.description} className="w-full max-w-[14.75rem] max-h-[5.7rem]" />
				</div>
			</div>
			<div className="flex-60 flex flex-col gap-5">
				<h5 className="text-2xl font-semibold">{title}</h5>
				<span className="text-brand-grey-tertiary text-xl">{subtitle}</span>
				<a href="#" className="text-base text-brand-yellow pt-3 font-semibold">
					{button}
				</a>
			</div>
		</div>
	);
};
