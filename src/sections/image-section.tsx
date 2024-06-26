import { styles } from '../constants/style-constants';
import { imageSection } from '../constants/content-constants';

export const ImageSection = () => {
	return (
		<section className={`${styles.sectionLayout} ${styles.sectionImgBg}`}>
			<img src={imageSection.img.src} alt={imageSection.img.description} className="hidden h-[25rem] w-full rounded-xl lg:block" />
			<img src={imageSection.imgxs.src} alt={imageSection.img.description} className="block h-[25rem] w-full rounded-xl lg:hidden" />
		</section>
	);
};
