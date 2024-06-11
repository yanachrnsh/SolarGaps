import { FC } from 'react';
import { hoverStyles } from '../../constants/style-constants';

interface AnchorButtonProps {
	href: string;
	children: React.ReactNode;
}

export const AnchorButton: FC<AnchorButtonProps> = ({ href, children }) => {
	return (
		<a
			href={href}
			className={` ${hoverStyles.transition} flex gap-3 group rounded-lg bg-brand-yellow px-[4.5rem] py-5 text-xs font-extrabold  text-dark-secondary shadow-sm  hover:bg-brand-yellow-secondary hover:drop-shadow-hero`}
		>
			{children}
		</a>
	);
};
