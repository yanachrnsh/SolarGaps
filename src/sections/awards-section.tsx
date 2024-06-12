import { styles } from '../constants/style-constants';
import { awardsSection, type AwardCard as AwardCardType } from '../constants/content-constants';
import { SectionHeader } from '../components/section-header/section-header.component';
import { FC } from 'react';

export const AwardsSection = () => {
	const { header, cards } = awardsSection;
	return (
		<section className={styles.sectionLayout}>
			<SectionHeader header={header} headerStyles={`${styles.paddings.headerSection}`} />
			<div className="grid grid-cols-5 gap-10">
				{cards.map((award: AwardCardType) => (
					<AwardCard key={award.title} title={award.title} subtitle={award.subtitle} icon={award.icon} />
				))}
			</div>
		</section>
	);
};

const AwardCard: FC<AwardCardType> = ({ title, subtitle, icon }) => {
	const { svg, alt } = icon;
	return (
		<div className="flex flex-col justify-between border border-brand-grey rounded-xl pt-12 pb-8 px-8 h-80 box-border">
			<img src={svg} alt={alt} className={`w-max`} />
			<div className="gap-px">
				<h3 className="text-xl font-semibold">{title}</h3>
				<span className="text-base">{subtitle}</span>
			</div>
		</div>
	);
};
