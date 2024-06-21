import { styles } from '../constants/style-constants';
import { quoteSection } from '../constants/content-constants';
import { IoArrowForward } from 'react-icons/io5';
import { lineBreak } from '../utils/line-break';

export const QuoteSection = () => {
	const { quote, author } = quoteSection;
	return (
		<section className={styles.sectionLayout}>
			<div className="flex justify-end">
				<div className={styles.sectionRight}>
					<p className="text-3xl font-medium -tracking-tight">{lineBreak(quote)}</p>
					<div className="mt-8 flex gap-x-5">
						<span className="text-base text-brand-yellow font-extrabold ">{author}</span>
						<IoArrowForward size={24} />
					</div>
				</div>
			</div>
		</section>
	);
};
