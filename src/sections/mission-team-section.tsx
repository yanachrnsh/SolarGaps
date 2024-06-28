import { styles } from '../constants/style-constants';
import { missionTeamSection, type MissionTeamCard as MissionTeamCardType } from '../constants/content-constants';
import { SectionHeader } from '../components/section-header/section-header.component';

export const MissionTeamSection = () => {
	const { header, title, paragraph1, paragraph2, cards } = missionTeamSection;
	return (
		<section className={styles.sectionLayout}>
			<div className={styles.flexSection}>
				<div className={styles.sectionLeft}>
					<SectionHeader header={header} headerStyles={'pb-0'} />
				</div>

				<div className={`${styles.sectionRight} flex flex-col gap-12`}>
					<h2 className={`${styles.h2} text-brand-yellow`}>{title}</h2>
					<div className="flex flex-col justify-between gap-4 xl:flex-row xl:gap-16">
						<p className="flex-1 text-sm font-semibold xl:text-base">{paragraph1}</p>
						<p className="flex-1 text-sm font-semibold xl:text-base">{paragraph2}</p>
					</div>
					<div className="md:grid-cols-mission grid grid-cols-1 gap-10 lg:grid-cols-3">
						{cards.map(card => (
							<MissionTeamCard key={card.title} card={card} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

const MissionTeamCard = ({ card }: { card: MissionTeamCardType }) => {
	const { title, subtitle, img } = card;
	return (
		<div className={`relative flex flex-col pt-[23.5rem] xl:pt-[20.75rem]`}>
			<img
				src={img.src}
				alt={img.description}
				className="absolute left-0 top-0 h-[82%] w-full max-w-[327px] basis-2/6 rounded-xl object-cover"
			/>
			<h4 className={`${styles.h4} pb-2`}>{title}</h4>
			<span className="text-base text-brand-grey-tertiary">{subtitle}</span>
		</div>
	);
};
