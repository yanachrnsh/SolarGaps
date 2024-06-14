import { hoverStyles, styles } from '../constants/style-constants';
import { ExampleTableRow, forOfficeScreen } from '../constants/content-constants';
import { SectionHeader } from '../components/section-header/section-header.component';
import { AnchorButton } from '../components/anchor-button/anchor-button.component';
import { IoArrowForward } from 'react-icons/io5';
import { FC } from 'react';

export const ForOfficeSection = () => {
	const { header, title, button, paragraph, exampleCard } = forOfficeScreen;
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
							<img src={exampleCard.image} alt="" className="basis-2/6 rounded-xl object-cover" />

							<div className="basis-4/6">
								{exampleCard.table.map((row, index) => (
									<>
										{index === exampleCard.table.length - 1 ? (
											<TableRow
												row={row}
												rowStyles="border-b-0"
												valueStyles={'text-xl font-bold text-brand-yellow'}
												positionStyles="text-base-l font-semibold"
											/>
										) : (
											<TableRow
												key={row.position}
												row={row}
												rowStyles={index === 0 ? 'pt-0' : ''}
												valueStyles={'text-light-primary'}
											/>
										)}
									</>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

interface TableRowProps {
	row: ExampleTableRow;
	positionStyles?: string;
	valueStyles?: string;
	rowStyles?: string;
}

const TableRow: FC<TableRowProps> = ({ row, positionStyles, valueStyles, rowStyles }) => {
	return (
		<div className={`flex justify-between pt-[1.43rem] pb-[1.32rem] border-b border-brand-grey text-brand-grey-tertiary ${rowStyles}`}>
			<span className={`text-sm ${positionStyles}`}>{row.position}</span>
			<h5 className={` font-semibold ${valueStyles}`}>{row.value}</h5>
		</div>
	);
};
