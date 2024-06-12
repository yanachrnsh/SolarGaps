import { styles } from '../constants/style-constants';
import { whyUsSection } from '../constants/content-constants';
import { FC } from 'react';
import { SectionHeader } from '../components/section-header/section-header.component';

export const WhyUsSection = () => {
	const { header, categories } = whyUsSection;
	return (
		<section className={styles.sectionLayout}>
			<div className="flex">
				<div className="flex-40">
					<SectionHeader header={header} headerStyles={'max-w-56'} />
				</div>

				<div className="grid grid-cols-3 grid-rows-2 gap-10 flex-60">
					{categories.map(category => (
						<CategoryCard key={category.title} title={category.title} icon={category.icon} />
					))}
				</div>
			</div>
		</section>
	);
};

// TODO: write generic T?

interface CategoryCardProps {
	title: string;
	icon: {
		svg: string;
		alt: string;
	};
}

const CategoryCard: FC<CategoryCardProps> = ({ title, icon }) => {
	return (
		<div className="flex flex-col gap-8">
			<img src={icon.svg} alt={icon.alt} className="w-16 h-16" />
			<span className="text-xl font-semibold">{title}</span>
		</div>
	);
};
