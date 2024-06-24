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
			<div className="grid grid-cols-1 gap-8 lg:grid-cols-4 lg:grid-rows-2">
				<ProductCard
					product={blinds}
					cardStyle={'lg:col-start-1 lg:col-end-3 lg:row-span-2'}
					headerStyle="pb-[23.5rem] lg:pb-[33.5rem] "
				/>
				<ProductCard
					product={panel}
					cardStyle="lg:col-start-3 lg:col-end-5  "
					imgStyle="-rotate-45 lg:rotate-0 max-h-[235px] lg:max-h-auto"
					headerStyle="pb-[23.5rem] lg:pb-0 "
				/>
				<ProductCard
					product={motor}
					imgStyle={'-translate-y-1/3 '}
					cardStyle={' lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-3 '}
					headerStyle="pb-[23.5rem] lg:pb-0 "
				/>
				<ProductCard
					product={inverter}
					imgStyle={'-translate-y-1/3  '}
					cardStyle={' lg:col-start-4 lg:col-end-5 lg:row-start-2 lg:row-end-3'}
					headerStyle="pb-[23.5rem] lg:pb-0 "
				/>
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
	headerStyle?: string;
}

const ProductCard: FC<ProductCardProps> = ({ product, cardStyle, imgStyle, headerStyle }) => {
	return (
		<div className={`relative rounded-xl bg-brand-grey-secondary px-8 py-8 ${cardStyle} `}>
			<h3 className={`"text-start text-brand-yellow" text-2xl font-semibold ${headerStyle}`}>{product.title}</h3>
			<img
				src={product.img.src}
				alt={product.img.description}
				className={`absolute left-1/2 top-1/2 max-h-[20.5rem] w-max -translate-x-1/2 -translate-y-1/2 ${imgStyle}`}
			/>
		</div>
	);
};
