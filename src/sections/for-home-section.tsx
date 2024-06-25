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
			<div className={` ${styles.flexSection} pb-12`}>
				<div className={styles.sectionLeft}>
					<SectionHeader header={header} />
				</div>

				<p className={`${styles.sectionRight} text-base font-semibold tracking-tight text-light-secondary`}>{paragraph}</p>
			</div>
			<div className="slider-container w-full max-h-[260px] xl:hidden">
				<Slider {...settings}>
					{forHomeSection.cards.map((item: ForHomeCardProps) => (
						<ForHomeCard title={item.title} img={item.img} subtitle={item.subtitle} />
					))}
				</Slider>
			</div>
			<div className="xl:slider-container hidden xl:block xl:w-full">
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
		<div className={`relative flex min-w-[224px] flex-col pt-[11.5rem] xl:pt-[28rem]`}>
			<img src={img.src} alt={img.description} className="absolute left-0 top-0 h-[85%] w-full max-h-[168px] rounded-xl object-cover" />
			<h4 className={styles.h4}>{title}</h4>
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
