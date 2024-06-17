import { styles } from '../constants/style-constants';
import { missionTeamSection, type MissionTeamCard as MissionTeamCardType } from '../constants/content-constants';
import { SectionHeader } from '../components/section-header/section-header.component';

export const MissionTeamSection = () => {
	const { header, title, paragraph1, paragraph2, cards } = missionTeamSection;
	return (
		<section className={styles.sectionLayout}>
			<div className="flex">
				<div className="flex-40">
					<SectionHeader header={header} />
				</div>

				<div className="flex flex-col gap-12 flex-60">
					<h2 className="text-5xl font-semibold tracking-tight text-brand-yellow pb-6">{title}</h2>
					<div className="flex justify-between gap-16">
						<p className="flex-1 text-base font-semibold ">{paragraph1}</p>
						<p className="flex-1 text-base font-semibold ">{paragraph2}</p>
					</div>
					<div className="grid grid-cols-3 gap-10 ">
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
		<div className={`pt-[20.75rem] flex flex-col relative`}>
			<img src={img.src} alt={img.description} className="rounded-xl absolute top-0 object-cover w-full h-[82%] left-0 basis-2/6" />
			<h4 className="text-xl font-semibold pb-2">{title}</h4>
			<span className="text-base text-brand-grey-tertiary">{subtitle}</span>
		</div>
	);
};
