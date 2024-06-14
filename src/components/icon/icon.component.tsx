interface IconProps {
	icon: {
		src: string;
		description?: string;
	};
	styles?: string;
}

export const Icon = ({ icon, styles }: IconProps) => {
	return (
		<>
			<span className="sr-only">{icon.description}</span>
			<img src={icon.src} alt="" className={`${styles}`}></img>
		</>
	);
};
