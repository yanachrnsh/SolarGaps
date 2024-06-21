import { FC } from 'react';
import { hoverStyles, styles } from '../../constants/style-constants';

interface AnchorButtonProps {
	href: string;
	children: React.ReactNode;
}

export const AnchorButton: FC<AnchorButtonProps> = ({ href, children }) => {
	return (
		<a
			href={href}
			className={` ${hoverStyles.transition} ${styles.button}`}
		>
			{children}
		</a>
	);
};
