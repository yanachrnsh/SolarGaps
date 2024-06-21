import { styles } from '../../constants/style-constants';

export const SectionHeader = ({ header, headerStyles }: { header: string; headerStyles?: string }) => {
	return (
		<div className="flex items-start gap-3">
			<span className="text-4xl font-semibold text-brand-yellow">/</span>
			<h2 className={`${styles.h2} ${headerStyles}`}>{header}</h2>
		</div>
	);
};
