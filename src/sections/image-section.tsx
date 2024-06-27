import { styles } from '../constants/style-constants';
import { imageSection } from '../constants/content-constants';

// TODO: fix img section

export const ImageSection = () => {
	return (
		<section className={`${styles.sectionLayout} ${styles.sectionImgBg} h-[25rem]`}>
			<img
				src={imageSection.img.src}
				alt={imageSection.img.description}
				className="h-full w-full rounded-xl object-cover object-center"
			/>
			{/* <img src={imageSection.imgxs.src} alt={imageSection.img.description} className="block h-[25rem] w-full rounded-xl md:hidden" /> */}
		</section>
	);
};
