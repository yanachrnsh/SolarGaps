import { styles } from '../constants/style-constants';
import { missionTeamSection, type MissionTeamCard as MissionTeamCardType } from '../constants/content-constants';
import { SectionHeader } from '../components/section-header/section-header.component';

export const MissionTeamSection = () => {
	const { header, title, paragraph1, paragraph2, cards } = missionTeamSection;
	return (
		<section className={styles.sectionLayout}>
			<div className={styles.flexSection}>
				<div className={styles.sectionLeft}>
					<SectionHeader header={header} />
				</div>

				<div className={`${styles.sectionRight} flex flex-col gap-12`}>
					<h2 className="pb-6 text-5xl font-semibold tracking-tight text-brand-yellow">{title}</h2>
					<div className="flex justify-between gap-16">
						<p className="flex-1 text-base font-semibold">{paragraph1}</p>
						<p className="flex-1 text-base font-semibold">{paragraph2}</p>
					</div>
					<div className="grid grid-cols-3 gap-10">
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
		<div className={`relative flex flex-col pt-[20.75rem]`}>
			<img src={img.src} alt={img.description} className="absolute left-0 top-0 h-[82%] w-full basis-2/6 rounded-xl object-cover" />
			<h4 className="pb-2 text-xl font-semibold">{title}</h4>
			<span className="text-base text-brand-grey-tertiary">{subtitle}</span>
		</div>
	);
};
