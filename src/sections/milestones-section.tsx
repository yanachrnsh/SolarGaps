import { styles } from '../constants/style-constants';
import { milestonesSection, type MilestoneCard as MilestoneCardType } from '../constants/content-constants';
import { SectionHeader } from '../components/section-header/section-header.component';
import { FC } from 'react';

export const MilestonesSection = () => {
	const { header, cards } = milestonesSection;
	return (
		<section className={styles.sectionLayout}>
			<SectionHeader header={header} headerStyles={`${styles.paddings.headerSection}`} />
			<div className="grid grid-cols-1 gap-10 lg:grid-cols-2 xl:grid-cols-6">
				{cards.map((card: MilestoneCardType) => (
					<MilestoneCard key={card.description} year={card.year} description={card.description} />
				))}
			</div>
		</section>
	);
};

const MilestoneCard: FC<MilestoneCardType> = ({ year, description }) => {
	return (
		<div className="flex flex-col gap-8 xl:gap-9">
			<h4 className="w-fit border-b-4 border-brand-yellow pb-3 text-3.5xl font-semibold">{year}</h4>

			<span className="text-base text-brand-grey-tertiary">{description}</span>
		</div>
	);
};
