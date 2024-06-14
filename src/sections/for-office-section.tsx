import { hoverStyles, styles } from '../constants/style-constants';
import { ExampleTableRow, forOfficeSection } from '../constants/content-constants';
import { SectionHeader } from '../components/section-header/section-header.component';
import { AnchorButton } from '../components/anchor-button/anchor-button.component';
import { IoArrowForward } from 'react-icons/io5';
import { FC } from 'react';

export const ForOfficeSection = () => {
	const { header, title, button, paragraph, exampleCard } = forOfficeSection;
	return (
		<section className={`${styles.sectionLayoutPaddingY} pl-9 sm:pl-6 lg:pl-9`}>
			{/* TODO: rename title to header */}
			<SectionHeader header={header} headerStyles={`${styles.paddings.headerSection}`} />
			<div className="flex">
				<div className="flex-40">
					<div className="text-start  max-w-[80%]">
						<h2 className="text-5xl font-semibold tracking-tight text-brand-yellow pb-6">{title}</h2>
						<p className="text-base font-semibold pb-8 ">{paragraph}</p>
						<div className="flex gap-x-6 pb-[10.75rem]">
							<AnchorButton href="#">
								<span>{button.toUpperCase()}</span>
								<IoArrowForward size={24} className={`${hoverStyles.transition} group-hover:translate-x-2`} />
							</AnchorButton>
						</div>
					</div>
				</div>
				{/* TODO: Table*/}
				<div className="flex-60 border border-brand-grey border-r-0 rounded-l-[1.25rem] pr-9 sm:pr-6 lg:pr-9 pt-8 pb-12 pl-12">
					<div>
						<h4 className="text-2xl font-semibold pb-6">{exampleCard.title}</h4>
						<div className="flex gap-9">
							<img
								src={exampleCard.img.src}
								alt={exampleCard.img.description}
								className="basis-2/6 rounded-xl object-cover"
							/>

							<ul className="basis-4/6">
								{exampleCard.table.map((row, index) => (
									<TableRow
										row={row}
										categoryStyle={index === exampleCard.table.length - 1 ? 'text-base-l font-semibold ' : ''}
										informationStyle={
											index === exampleCard.table.length - 1 ? 'text-brand-yellow text-xl font-bold ' : ''
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
			className={`flex justify-between pt-[1.43rem] pb-[1.32rem] border-b border-brand-grey first:pt-0 last:pb-0 last:border-b-0 text-brand-grey-tertiary `}
		>
			<span className={`text-sm last:text-xl last:font-bold last:text-brand-yellow ${categoryStyle}`}>{row.category}</span>
			<h5 className={` font-semibold ${informationStyle}`}>{row.information}</h5>
		</li>
	);
};
