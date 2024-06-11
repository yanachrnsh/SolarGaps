import { styles } from '../constants/style-constants';
import { quoteSection } from '../constants/content-constants';
import { IoArrowForward } from 'react-icons/io5';
import React from 'react';

export const QuoteSection = () => {
	const { quote, author } = quoteSection;
	return (
		<section className={styles.sectionLayout}>
			<div className="flex justify-end">
				<div className="max-w-[955px]">
					<p className="text-3xl font-medium">{linesBreak(quote)}</p>
					<div className="mt-8 flex gap-x-5">
						<span className="text-base text-brand-yellow font-extrabold">{author}</span>
						<IoArrowForward size={24} />p
					</div>
				</div>
			</div>
		</section>
	);
};

const linesBreak = (quote: string) => {
	return quote.split('\n').map((line, index) => {
		return (
			<React.Fragment key={index}>
				{line.trim()}
				{index !== quote.split('\n').length - 1 && (
					<p>
						<br />
					</p>
				)}
			</React.Fragment>
		);
	});
};
