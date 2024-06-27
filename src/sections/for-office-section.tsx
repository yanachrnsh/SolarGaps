import { hoverStyles, styles } from '../constants/style-constants';
import { ExampleTableRow, forOfficeSection } from '../constants/content-constants';
import { SectionHeader } from '../components/section-header/section-header.component';
import { AnchorButton } from '../components/anchor-button/anchor-button.component';
import { IoArrowForward } from 'react-icons/io5';
import { FC } from 'react';

export const ForOfficeSection = () => {
	const { header, title, button, paragraph, exampleCard } = forOfficeSection;
	return (
		<section className={`${styles.sectionLayout} pr-6 xl:pr-0`}>
			{/* TODO: rename title to header */}
			<SectionHeader header={header} headerStyles={`${styles.paddings.headerSection}`} />
			<div className={styles.flexSection}>
				<div className={styles.sectionLeft}>
					<div className="text-start">
						<h2 className={`${styles.h2} pb-6 text-brand-yellow`}>{title}</h2>
						<p className="pb-6 text-sm font-semibold xl:pb-8 xl:text-base">{paragraph}</p>
						<div className="flex gap-x-6 pb-3 xl:pb-[10.75rem]">
							<AnchorButton href="#">
								<span>{button.toUpperCase()}</span>
								<IoArrowForward size={24} className={`${hoverStyles.transition} group-hover:translate-x-2`} />
							</AnchorButton>
						</div>
					</div>
				</div>
				{/* TODO: Table*/}
				<div
					className={`${styles.sectionRight} rounded-l-[1.25rem] rounded-r-[1.25rem] border border-brand-grey p-5 sm:pr-6 lg:rounded-r-none lg:pb-12 lg:pl-12 lg:pr-9 lg:pt-8 xl:border-r-0`}
				>
					<div>
						<h5 className={`${styles.h5} pb-6`}>{exampleCard.title}</h5>
						<div className="flex flex-wrap gap-9 lg:flex-nowrap">
							<img
								src={exampleCard.img.src}
								alt={exampleCard.img.description}
								className="w-full rounded-2xl object-cover xl:basis-2/6"
							/>

							<ul className="flex-1 lg:basis-4/6">
								{exampleCard.table.map((row, index) => (
									<TableRow
										row={row}
										categoryStyle={index === exampleCard.table.length - 1 ? 'text-sm lg:text-base font-semibold ' : ''}
										informationStyle={
											index === exampleCard.table.length - 1
												? 'text-base text-brand-yellow lg:text-xl font-bold '
												: ''
										}
									/>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

interface TableRowProps {
	row: ExampleTableRow;
	categoryStyle?: string;
	informationStyle?: string;
}

const TableRow: FC<TableRowProps> = ({ row, categoryStyle, informationStyle }) => {
	return (
		<li
			className={`flex justify-between border-b border-brand-grey pb-[1.32rem] pt-[1.43rem] text-brand-grey-tertiary first:pt-0 last:border-b-0 last:pb-0`}
		>
			<span className={`text-sm last:text-xl last:font-bold last:text-brand-yellow ${categoryStyle}`}>{row.category}</span>
			<h6 className={`font-semibold text-light-primary ${informationStyle}`}>{row.information}</h6>
		</li>
	);
};
