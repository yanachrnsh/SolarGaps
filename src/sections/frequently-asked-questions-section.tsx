import { styles } from '../constants/style-constants';
import { frequentlyAskedQuestionsSection } from '../constants/content-constants';
import { SectionHeader } from '../components/section-header/section-header.component';
import { useState } from 'react';
import { motion } from 'framer-motion';
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
			<div className="flex">
				<div className="flex-40">
					<SectionHeader header={header} />
				</div>
				<div className="flex-60">
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
		<div className="py-8 border-b first:pt-0">
			<button
				className={`bg-none border-none w-full cursor-pointer overflow-hidden text-start font-semibold text-2xl ${isCollapsed ? '' : 'pb-6 '}`}
				onClick={() => toggleCollapse(index)}
			>
				{card.title}
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
					<p className="text-start">{card.description}</p>
				</div>
			</motion.div>
		</div>
	);
};

export default Collapse;
