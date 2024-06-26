import { styles } from '../constants/style-constants';
import { forHomeSection, type ForHomeCard as ForHomeCardProps } from '../constants/content-constants';
import { FC } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { SectionHeader } from '../components/section-header/section-header.component';

// TODO: change padding on mobile
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
		variableWidth: true,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
	};

	return (
		<section className={styles.sectionLayout}>
			<div className={` ${styles.flexSection} pb-6 xl:pb-12`}>
				<div className={styles.sectionLeft}>
					<SectionHeader header={header} />
				</div>

				<p className={`${styles.sectionRight} test-sm font-semibold tracking-tight text-light-secondary xl:text-base`}>
					{paragraph}
				</p>
			</div>
			<Slider {...settings} className="slider-container max-h-[16.25rem] w-full xl:hidden xl:max-h-[29rem]">
				{forHomeSection.cards.map((item: ForHomeCardProps) => (
					<ForHomeCard title={item.title} img={item.img} subtitle={item.subtitle} />
				))}
			</Slider>
			<Slider {...settingsLg} className="xl:slider-container hidden max-h-[16.25rem] xl:block xl:max-h-[29rem] xl:w-full">
				{forHomeSection.cards.map((item: ForHomeCardProps) => (
					<ForHomeCard title={item.title} img={item.img} subtitle={item.subtitle} />
				))}
			</Slider>
		</section>
	);
};

const ForHomeCard: FC<ForHomeCardProps> = ({ title, img, subtitle }) => {
	return (
		<div className={`max-h-[220px]xl:max-h-[29rem] relative flex min-w-[224px] flex-col pt-[11.5rem] xl:pt-[28rem]`}>
			<img
				src={img.src}
				alt={img.description}
				className="absolute left-0 top-0 h-[85%] max-h-[168px] w-full rounded-xl object-cover xl:max-h-fit"
			/>
			<h6 className={styles.h6}>{title}</h6>
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
