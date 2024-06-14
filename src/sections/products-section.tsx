import { styles } from '../constants/style-constants';
import { productsSection, type ProductCard } from '../constants/content-constants';
import { SectionHeader } from '../components/section-header/section-header.component';
import { FC } from 'react';

export const ProductSection = () => {
	const { header, products } = productsSection;
	const { blinds, panel, motor, inverter } = products;
	return (
		<section className={styles.sectionLayout}>
			<SectionHeader header={header} headerStyles={`${styles.paddings.headerSection}`} />
			<div className="grid grid-cols-2 gap-8">
				<ProductCard product={blinds} cardStyle={'pb-[33.5rem]'} />
				<div className="grid grid-rows-2 grid-cols-1 gap-8">
					<ProductCard product={panel} />
					<div className="grid grid-cols-2 gap-8">
						<ProductCard product={motor} imgStyle={'-translate-y-1/3 '} />
						<ProductCard product={inverter} imgStyle={'-translate-y-1/3 '} />
					</div>
				</div>
			</div>
		</section>
	);
};

// TODO: fix width and h of icons
// Move absolute intoa separate style

interface ProductCardProps {
	product: ProductCard;
	cardStyle?: string;
	imgStyle?: string;
}

const ProductCard: FC<ProductCardProps> = ({ product, cardStyle, imgStyle }) => {
	return (
		<div className={`bg-brand-grey-secondary rounded-xl relative px-8 py-8 ${cardStyle} `}>
			<h3 className="text-start text-2xl text-brand-yellow font-semibold">{product.title}</h3>
			<img
				src={product.img.src}
				alt={product.img.description}
				className={`absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-max ${imgStyle}`}
			/>
		</div>
	);
};
