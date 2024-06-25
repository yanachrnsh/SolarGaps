import { styles } from '../constants/style-constants';
import {imageSection} from '../constants/content-constants';


export const ImageSection = () => {
	return (
		<section className={`${styles.sectionLayout} ${styles.sectionImgBg}`}>
			<img src={imageSection.img.src} alt={imageSection.img.description} className="rounded-xl w-full h-[25rem] hidden xl:block" />
			<img src={imageSection.imgxs.src} alt={imageSection.img.description} className="rounded-xl w-full h-[25rem] block xl:hidden" />
		</section>
	);
};
