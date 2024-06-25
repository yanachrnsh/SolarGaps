import { styles } from '../constants/style-constants';
import { partnershipsSection } from '../constants/content-constants';
import { SectionHeader } from '../components/section-header/section-header.component';
import { FC } from 'react';
import { FaCircle } from 'react-icons/fa';

export const PartnershipsSection = () => {
	const { header, cards, paragraph1, paragraph2 } = partnershipsSection;
	const { sales, distributor, bullets, img } = cards;
	return (
		<section className={styles.sectionLayout}>
			<SectionHeader header={header} headerStyles={`${styles.paddings.headerSection}`} />

			<div className={styles.flexSection}>
				<div className={`${styles.sectionLeft} pb-[25.75rem]`}>
					<p className="pb-6 text-base">{paragraph1}</p>
					<p className="text-base">{paragraph2}</p>
				</div>
				<div className={`${styles.sectionRight} grid grid-cols-2 grid-rows-2 gap-x-12 gap-y-8`}>
					<div className="flex">
						<img src={img.src} alt="" className="w-full" />
						<span className="sr-only">{img.description}</span>
					</div>
					<div className="flex flex-col gap-10">
						{bullets.map((bullet, index) => (
							<BulletRow key={index} bullet={bullet} />
						))}
					</div>
					<PartnershipsCard card={distributor} />
					<PartnershipsCard card={sales} />
				</div>
			</div>
		</section>
	);
};

// TODO: Cards flex: 1 1 auto;
type PartnershipsCardType = {
	card: {
		title: string;
		description: string;
		button: string;
	};
};

const PartnershipsCard: FC<PartnershipsCardType> = ({ card }) => {
	const { title, description, button } = card;
	return (
		<div className="flex flex-col justify-between gap-3 rounded-lg border border-brand-grey p-8">
			<h5 className="text-2xl font-semibold text-brand-yellow">{title}</h5>

			<span className="text-base">{description}</span>
			<a href="#" className="pt-3 text-base font-semibold text-brand-yellow">
				{button}
			</a>
		</div>
	);
};

// TODO: type change for Bullets
type BulletRowType = {
	bullet: {
		title: string;
		iconColor: string;
	};
};

// TODO: fix colors of bullets
const BulletRow: FC<BulletRowType> = ({ bullet }) => {
	return (
		<div className="flex gap-4">
			<FaCircle className={` text-${bullet.iconColor} `} size={24} />
			<span className="text-base text-light-secondary">{bullet.title}</span>
		</div>
	);
};
