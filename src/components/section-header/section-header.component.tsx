

export const SectionHeader = ({ header, headerStyles }: { header: string; headerStyles?: string }) => {
	return (
		<div className="flex gap-3 items-start ">
			<span className="text-brand-yellow font-semibold text-4xl">/</span>
			<h2 className={`text-4xl font-semibold ${headerStyles}`}>{header}</h2>
		</div>
	);
};