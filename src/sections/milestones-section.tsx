import { styles } from '../constants/style-constants';
import { milestonesSection, type MilestoneCard as MilestoneCardType } from '../constants/content-constants';
import { SectionHeader } from '../components/section-header/section-header.component';
import { FC } from 'react';
import { lineBreak } from '../utils/line-break';

export const MilestonesSection = () => {
	const { header, cards } = milestonesSection;
	return (
		<section className={styles.sectionLayout}>
			<SectionHeader header={header} headerStyles={`${styles.paddings.headerSection}`} />
			<div className="grid grid-cols-1 gap-10 xl:grid-cols-6">
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
		<div className="flex flex-col gap-9">
			<h4 className="border-b-4 border-brand-yellow pb-3 text-3.5xl font-semibold">{year}</h4>

			<span className="text-base text-brand-grey-tertiary">{lineBreak(description)}</span>
		</div>
	);
};
