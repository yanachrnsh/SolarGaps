import { styles } from '../constants/style-constants';
import { awardsSection, type AwardCard as AwardCardType } from '../constants/content-constants';
import { SectionHeader } from '../components/section-header/section-header.component';
import { FC } from 'react';
import { Icon } from '../components/icon/icon.component';

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

// TODO: move Awards card to a separate
// TODO: Cards flex: 1 1 auto;

const AwardCard: FC<AwardCardType> = ({ title, subtitle, icon }) => {
	return (
		<div className="flex flex-col justify-between border border-brand-grey rounded-xl pt-12 pb-8 px-8 h-80 box-border">
			<Icon icon={icon} styles='w-max' />
			<div className="gap-px">
				<h4 className="text-base font-semibold">{title}</h4>
				<span className="text-xxs text-brand-grey-tertiary">{subtitle}</span>
			</div>
		</div>
	);
};
