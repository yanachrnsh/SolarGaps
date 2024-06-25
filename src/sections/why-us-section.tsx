import { styles } from '../constants/style-constants';
import { whyUsSection, WhyUsCardIcon } from '../constants/content-constants';
import { FC } from 'react';
import { SectionHeader } from '../components/section-header/section-header.component';
import { Icon } from '../components/icon/icon.component';

export const WhyUsSection = () => {
	const { header, cards } = whyUsSection;
	return (
		<section className={styles.sectionLayout}>
			<div className={styles.flexSection}>
				<div className={styles.sectionLeft}>
					<SectionHeader header={header} headerStyles={'max-w-56'} />
				</div>

				<div className={`${styles.sectionRight} grid-cols-2 grid grid-rows-3 gap-10 xl:grid-cols-3 xl:grid-rows-2`}>
					{cards.map(card => (
						<CategoryCard key={card.title} title={card.title} icon={card.icon} />
					))}
				</div>
			</div>
		</section>
	);
};

interface CategoryCardProps {
	title: string;
	icon: WhyUsCardIcon;
}

const CategoryCard: FC<CategoryCardProps> = ({ title, icon }) => {
	return (
		<div className="flex flex-col gap-4 xl:gap-8">
			<Icon icon={icon} styles="w-14 h-14 xl:w-16 xl:h-16" />
			<span className="text-base xl:text-xl font-semibold">{title}</span>
		</div>
	);
};
