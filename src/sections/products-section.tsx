import { styles } from '../constants/style-constants';
import { productsSection } from '../constants/content-constants';
import { SectionHeader } from '../components/section-header/section-header.component';

export const ProductSection = () => {
	const { header, products } = productsSection;
	return (
		<section className={styles.sectionLayout}>
			<SectionHeader header={header} headerStyles={`${styles.paddings.headerSection}`} />
			<div className="grid grid-cols-2 gap-8">
				<ProductCard title={products[0].title} svg={products[0].svg} cardStyle={'pb-[33.5rem]'}  />
				<div className="grid grid-rows-2 grid-cols-1 gap-8">
					<ProductCard title={products[1].title} svg={products[1].svg} />
					<div className="grid grid-cols-2 gap-8">
						<ProductCard title={products[2].title} svg={products[2].svg}imgStyle={'-translate-y-1/3 '}/>
						<ProductCard title={products[3].title} svg={products[3].svg} imgStyle={'-translate-y-1/3 '} />
					</div>
				</div>
			</div>
		</section>
	);
};

// TODO: fix any
// TODO: fix width and h of icons
// Move absolute intoa separate style

const ProductCard = ({ title, svg, cardStyle, imgStyle }: any) => {
	return (
		<div className={`bg-brand-grey-secondary rounded-xl relative ${cardStyle} px-8 py-8`}>
			<h3 className="text-start text-2xl text-brand-yellow font-semibold">{title}</h3>
			<img src={svg} alt="" className={`absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-max ${imgStyle}`} />
		</div>
	);
};
