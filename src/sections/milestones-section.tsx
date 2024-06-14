import { styles } from '../constants/style-constants';
import { milestonesSection, type MilestoneCard as MilestoneCardType } from '../constants/content-constants';
import { SectionHeader } from '../components/section-header/section-header.component';
import { FC } from 'react';
import { linesBreak } from '../utils/linesBreak';

export const MilestonesSection = () => {
	const { header, cards } = milestonesSection;
	return (
		<section className={styles.sectionLayout}>
			<SectionHeader header={header} headerStyles={`${styles.paddings.headerSection}`} />
			<div className="grid grid-cols-6 gap-10">
				{cards.map((card: MilestoneCardType) => (
					<MilestoneCard key={card.description} year={card.year} description={card.description} />
				))}
			</div>
		</section>
	);
};

// TODO: Cards flex: 1 1 auto;

const MilestoneCard: FC<MilestoneCardType> = ({ year, description }) => {
	return (
		<div className="flex flex-col gap-9 ">
			<h4 className="text-3.5xl font-semibold border-b-4 border-brand-yellow pb-3">{year}</h4>

			<span className="text-base text-brand-grey-tertiary">{linesBreak(description)}</span>
		</div>
	);
};
