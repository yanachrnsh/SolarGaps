import { styles } from '../constants/style-constants';
import { howItWorksSection } from '../constants/content-constants';
import { SectionHeader } from '../components/section-header/section-header.component';

export const HowItWorksSection = () => {
	const { header, paragraph, video } = howItWorksSection;
	return (
		<section className={styles.sectionLayout}>
			<SectionHeader header={header} headerStyles={`${styles.paddings.headerSection}`} />
			<div className="flex">
				<div className="flex-40">
					<p className="text-base max-w-[70%]">{paragraph}</p>
				</div>
				{/* TODO: add video  */}
				<div className="flex-60">
					<img src={video} alt="video" className="w-full" />
				</div>
			</div>
		</section>
	);
};
