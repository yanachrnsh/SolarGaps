import { styles } from '../constants/style-constants';
import { frequentlyAskedQuestionsSection } from '../constants/content-constants';
import { SectionHeader } from '../components/section-header/section-header.component';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMinus, FaPlus } from 'react-icons/fa6';

// import { Collapse } from 'antd';

export const FrequentlyAskedQuestionsSection = () => {
	const { header, cards } = frequentlyAskedQuestionsSection;
	const [activeItem, setActiveItem] = useState<number>(0);

	const toggleCollapse = (index: number) => {
		if (activeItem !== index) {
			setActiveItem(index);
		}
	};
	return (
		<section className={styles.sectionLayout}>
			<div className="flex flex-col xl:flex-row">
				<div className={styles.sectionLeft}>
					<SectionHeader header={header} />
				</div>
				<div className={styles.sectionRight}>
					<div className="grid grid-cols-1">
						{cards.map((card, index) => (
							<Collapse
								key={card.title}
								card={card}
								toggleCollapse={toggleCollapse}
								isCollapsed={activeItem !== index}
								index={index}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

interface QuestionCardProps {
	card: {
		title: string;
		description: string;
	};
	toggleCollapse: (index: number) => void;
	index: number;
	isCollapsed: boolean;
}

// TODO: fix Collapse component add animation
// TODO: add icon

const Collapse: React.FC<QuestionCardProps> = ({ card, toggleCollapse: toggleCollapse, isCollapsed, index }) => {
	const variants = {
		open: { maxHeight: '1000px', transition: { duration: 7 } },
		closed: { maxHeight: '0', transition: { duration: 0 } },
	};
	return (
		<div className="border-b py-8 first:pt-0">
			<button
				className={`flex w-full cursor-pointer justify-between overflow-hidden border-none bg-none text-start ${isCollapsed ? '' : 'pb-6'}`}
				onClick={() => toggleCollapse(index)}
			>
				<h5 className={`${styles.h5}`}> {card.title}</h5>
				{isCollapsed ? (
					<FaMinus size={24} className="pr-2 text-brand-yellow" />
				) : (
					<FaPlus size={24} className="pr-2 text-light-primary" />
				)}
			</button>
			<motion.div
				aria-expanded={isCollapsed}
				initial={isCollapsed ? 'closed' : 'open'}
				animate={isCollapsed ? 'closed' : 'open'}
				variants={variants}
				transition={{ duration: 0.3 }}
				className="overflow-hidden"
				// className={`overflow-hidden transition-[max-height] duration-300  ${isCollapsed ? 'max-h-0 ' : `max-h-[1000px] `}`}
			>
				<div className="">
					<p className="text-start font-semibold tracking-tight text-brand-grey-tertiary">{card.description}</p>
				</div>
			</motion.div>
		</div>
	);
};

export default Collapse;
