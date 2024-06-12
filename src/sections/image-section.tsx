import { styles } from '../constants/style-constants';
import { bgBuilding } from '../assets';

export const ImageSection = () => {
	return (
		<section className={`${styles.sectionLayout} ${styles.sectionImgBg}`}>
			<img src={bgBuilding} alt="Building" className="rounded-xl w-full" />
		</section>
	);
};
