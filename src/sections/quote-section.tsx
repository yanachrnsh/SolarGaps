import { styles } from '../constants/style-constants';
import { quoteSection } from '../constants/content-constants';
import { IoArrowForward } from 'react-icons/io5';
import { linesBreak } from '../utils/linesBreak';

export const QuoteSection = () => {
	const { quote, author } = quoteSection;
	return (
		<section className={styles.sectionLayout}>
			<div className="flex justify-end">
				<div className="flex-60">
					<p className="text-3xl font-medium">{linesBreak(quote)}</p>
					<div className="mt-8 flex gap-x-5">
						<span className="text-base text-brand-yellow font-extrabold">{author}</span>
						<IoArrowForward size={24} />
					</div>
				</div>
			</div>
		</section>
	);
};
