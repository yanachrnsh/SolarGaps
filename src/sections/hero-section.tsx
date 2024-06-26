import { IoArrowForward } from 'react-icons/io5';
import { hoverStyles, styles } from '../constants/style-constants';
import { heroSection } from '../constants/content-constants';
import { AnchorButton } from '../components/anchor-button/anchor-button.component';

// TODO : section padding
// TODO: text content to style

export const HeroSection = () => {
	const { header, button } = heroSection;
	return (
		<section className={`bg-background-hero ${styles.sectionImgBg}`}>
			<div className={`${styles.sectionHero} flex`}>
				<div className="w-full text-start lg:w-[60%]">
					<h1 className={styles.h1}>{header}</h1>

					<div className="mt-10 flex gap-x-6">
						<AnchorButton href="#">
							<span>{button.toUpperCase()}</span>
							<IoArrowForward size={24} className={`${hoverStyles.transition} group-hover:translate-x-2`} />
						</AnchorButton>
					</div>
				</div>
			</div>
		</section>
	);
};
