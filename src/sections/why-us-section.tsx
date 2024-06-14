import { styles } from '../constants/style-constants';
import { whyUsSection, WhyUsCardIcon } from '../constants/content-constants';
import { FC } from 'react';
import { SectionHeader } from '../components/section-header/section-header.component';
import { Icon } from '../components/icon/icon.component';

export const WhyUsSection = () => {
	const { header, cards } = whyUsSection;
	return (
		<section className={styles.sectionLayout}>
			<div className="flex">
				<div className="flex-40">
					<SectionHeader header={header} headerStyles={'max-w-56'} />
				</div>

				<div className="grid grid-cols-3 grid-rows-2 gap-10 flex-60">
					{cards.map(card => (
						<CategoryCard key={card.title} title={card.title} icon={card.icon} />
					))}
				</div>
			</div>
		</section>
	);
};

// TODO: write generic T?

interface CategoryCardProps {
	title: string;
	icon: WhyUsCardIcon;
}

const CategoryCard: FC<CategoryCardProps> = ({ title, icon }) => {
	return (
		<div className="flex flex-col gap-8">
			<Icon icon={icon} styles="w-16 h-16" />
			<span className="text-xl font-semibold">{title}</span>
		</div>
	);
};
