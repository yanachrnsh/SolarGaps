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
	const settings = {
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
	};

	return (
		<section className={styles.sectionLayout}>
			<div className="flex pb-12">
				<div className="flex-40">
					<SectionHeader header={header} headerStyles={`${styles.paddings.headerSection}`} />
				</div>

				<p className="text-base text-light-secondary font-semibold flex-60">{paragraph}</p>
			</div>
			<div className="w-full slider-container ">
				<Slider {...settings}>
					{forHomeSection.cards.map((item: ForHomeCardProps) => (
						<ForHomeCard title={item.title} img={item.img} subtitle={item.subtitle} />
					))}
				</Slider>
			</div>
			<div></div>
		</section>
	);
};

const ForHomeCard: FC<ForHomeCardProps> = ({ title, img, subtitle }) => {
	return (
		<div className={` pt-[461px] flex flex-col relative`}>
			<img src={img.src} alt={img.description} className="rounded-xl absolute top-0 object-cover w-full h-[85%] left-0" />
			<h4 className="text-xl font-semibold">{title}</h4>
			<span className="text-base text-brand-grey-tertiary">{subtitle}</span>
		</div>
	);
};


function SampleNextArrow({ className, style, onClick }: any) {
	return (
		<MdOutlineKeyboardArrowRight
			className={`${className} block text-brand-yellow hover:text-brand-yellow-secondary w-12 h-12 z-10`}
			style={style}
			onClick={onClick}
			size={48}
		/>
	);
}

function SamplePrevArrow({ className, style, onClick }: any) {
	return (
		<MdOutlineKeyboardArrowLeft
			className={`${className} block text-brand-yellow hover:text-brand-yellow-secondary w-12 h-12 z-10`}
			size={48}
			style={style}
			onClick={onClick}
		/>
	);
}
