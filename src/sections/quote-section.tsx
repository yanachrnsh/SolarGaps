import { styles } from '../constants/style-constants';
import { quoteSection } from '../constants/content-constants';

export const QuoteSection = () => {
	const { quote1, quote2, author } = quoteSection;
	return (
		<section className={styles.sectionLayout}>
			<div className="flex justify-end pt-6 xl:pt-0">
				<div className={styles.sectionRight}>
					<p className="pb-6 text-xl font-medium -tracking-tight xl:text-3xl">{quote1}</p>
					<p className="text-xl font-medium -tracking-tight xl:text-3xl">{quote2}</p>
					<div className="mt-8 flex gap-x-5">
						<span className="text-base font-extrabold text-brand-yellow">{author}</span>
					</div>
				</div>
			</div>
		</section>
	);
};
