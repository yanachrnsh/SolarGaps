import { styles } from '../constants/style-constants';
import { forHomeSection, type ForHomeCard as ForHomeCardProps } from '../constants/content-constants';
import { FC } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { SectionHeader } from '../components/section-header/section-header.component';

export const ForHomeSection = () => {
	const { header, paragraph } = forHomeSection;
	const settingsLg = {
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
	};

	const settings = {
		infinite: true,
		speed: 500,
		slidesToShow: 1.5,
		slidesToScroll: 1,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
	};

	return (
		<section className={styles.sectionLayout}>
			<div className={` ${styles.flexSection} pb-12`}>
				<div className={styles.sectionLeft}>
					<SectionHeader header={header} headerStyles={`${styles.paddings.headerSection}`} />
				</div>

				<p className={`${styles.sectionRight} text-base font-semibold tracking-tight text-light-secondary`}>{paragraph}</p>
			</div>
			<div className="slider-container w-full lg:hidden">
				<Slider {...settings}>
					{forHomeSection.cards.map((item: ForHomeCardProps) => (
						<ForHomeCard title={item.title} img={item.img} subtitle={item.subtitle} />
					))}
				</Slider>
			</div>
			<div className="hidden lg:block lg:slider-container lg:w-full">
				<Slider {...settingsLg}>
					{forHomeSection.cards.map((item: ForHomeCardProps) => (
						<ForHomeCard title={item.title} img={item.img} subtitle={item.subtitle} />
					))}
				</Slider>
			</div>

		</section>
	);
};

const ForHomeCard: FC<ForHomeCardProps> = ({ title, img, subtitle }) => {
	return (
		<div className={`relative flex flex-col pt-[461px]`}>
			<img src={img.src} alt={img.description} className="absolute left-0 top-0 h-[85%] w-full rounded-xl object-cover" />
			<h4 className="text-xl font-semibold">{title}</h4>
			<span className="text-base text-brand-grey-tertiary">{subtitle}</span>
		</div>
	);
};

interface SampleArrowProps {
	className?: string;
	style?: React.CSSProperties;
	onClick?: () => void;
}

function SampleNextArrow({ className, style, onClick }: SampleArrowProps) {
	return (
		<MdOutlineKeyboardArrowRight
			className={`${className} z-10 block h-12 w-12 text-brand-yellow hover:text-brand-yellow-secondary`}
			style={style}
			onClick={onClick}
			size={48}
		/>
	);
}

function SamplePrevArrow({ className, style, onClick }: SampleArrowProps) {
	return (
		<MdOutlineKeyboardArrowLeft
			className={`${className} z-10 block h-12 w-12 text-brand-yellow hover:text-brand-yellow-secondary`}
			size={48}
			style={style}
			onClick={onClick}
		/>
	);
}
