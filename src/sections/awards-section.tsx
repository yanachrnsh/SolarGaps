import { styles } from '../constants/style-constants';
import { awardsSection, type AwardCard as AwardCardType } from '../constants/content-constants';
import { SectionHeader } from '../components/section-header/section-header.component';
import { FC } from 'react';
import { Icon } from '../components/icon/icon.component';
import Slider from 'react-slick';

// TODO: change arrows

export const AwardsSection = () => {
	const { header, cards } = awardsSection;
	const settings = {
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		variableWidth: true,
	};

	return (
		<section className={styles.sectionLayout}>
			<SectionHeader header={header} headerStyles={`${styles.paddings.headerSection}`} />
			<div className="3xl:grid grid-cols-awards hidden gap-10">
				{cards.map((award: AwardCardType) => (
					<AwardCard key={award.title} title={award.title} subtitle={award.subtitle} icon={award.icon} />
				))}
			</div>
			<Slider {...settings} className="3xl:hidden block max-h-[260px] lg:max-h-80">
				{cards.map(item => (
					<AwardCard key={item.title} title={item.title} subtitle={item.subtitle} icon={item.icon} />
				))}
			</Slider>
		</section>
	);
};

const AwardCard: FC<AwardCardType> = ({ title, subtitle, icon }) => {
	return (
		<div className="3xl:w-auto xl:[14.5rem] 3xl:h-[16.5rem] box-border flex h-[16.25rem] w-[14rem] flex-col justify-between rounded-xl border border-brand-grey px-8 pb-8 pt-12 lg:h-80">
			<Icon icon={icon} styles="w-max" />
			<div className="gap-px">
				<h4 className="text-base font-semibold">{title}</h4>
				<span className="text-xxs text-brand-grey-tertiary">{subtitle}</span>
			</div>
		</div>
	);
};
