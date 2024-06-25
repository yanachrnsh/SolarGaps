import { styles } from '../constants/style-constants';
import { howItWorksSection } from '../constants/content-constants';
import { SectionHeader } from '../components/section-header/section-header.component';

export const HowItWorksSection = () => {
	const { header, paragraph, video } = howItWorksSection;
	return (
		<section className={styles.sectionLayout}>
			<SectionHeader header={header} headerStyles={`${styles.paddings.headerSection}`} />
			<div className={styles.flexSection}>
				<div className={styles.sectionLeft}>
					<p className="text-sm xl:text-base font-semibold tracking-wide">{paragraph}</p>
				</div>
				{/* TODO: add video  */}
				<div className={styles.sectionRight}>
					<img src={video} alt="video" className="w-full" />
				</div>
			</div>
		</section>
	);
};
