import { styles } from '../constants/style-constants';
import { partnershipsSection } from '../constants/content-constants';
import { SectionHeader } from '../components/section-header/section-header.component';
import { FC } from 'react';
import { linesBreak } from '../utils/linesBreak';

export const PartnershipsSection = () => {
	const { header, cards, paragraph1, paragraph2 } = partnershipsSection;
	return (
		<section className={styles.sectionLayout}>
			<SectionHeader header={header} headerStyles={`${styles.paddings.headerSection}`} />

			<div className="flex">
				<div className="flex-40 pb-[25.75rem]">
					<p className="text-base max-w-[70%]">{paragraph1}</p>
					<p className="text-base max-w-[70%]">{paragraph2}</p>
				</div>
				<div className="flex-60 grid grid-cols-2 grid-rows-2 gap-y-8 gap-x-12">
					<div>Card IMg</div>
					<div>Card IMg</div>
					<div>Card IMg</div>
					<div>Card IMg</div>
				</div>
			</div>
		</section>
	);
};

// TODO: Cards flex: 1 1 auto;

// const MilestoneCard: FC<MilestoneCardType> = ({ year, description }) => {
// 	return (
// 		<div className="flex flex-col gap-9 ">
// 			<h4 className="text-3.5xl font-semibold border-b-4 border-brand-yellow pb-3">{year}</h4>

// 			<span className="text-base text-brand-grey-tertiary">{linesBreak(description)}</span>
// 		</div>
// 	);
// };
