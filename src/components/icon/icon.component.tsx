interface IconProps {
	icon: string;
	styles?: string;
	description: string;
}

export const Icon = ({ icon, styles, description }: IconProps) => {
	return (
		<>
			<span className="sr-only">{description}</span>
			<img src={icon} alt="" className={`h-8 w-auto ${styles}`}></img>
		</>
	);
};
