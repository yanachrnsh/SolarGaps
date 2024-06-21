import { styles } from '../../constants/style-constants';
import { footer } from '../../constants/content-constants';
import { Icon } from '../icon/icon.component';
import { logoIcon } from '../../constants/content-constants';
import { lineBreak } from '../../utils/line-break';

export const Footer = () => {
	const { address, email } = footer;

	return (
		<footer  className="bg-brand-grey-secondary">
			<div className={` ${styles.sectionLayout} flex flex-col gap-12`}>
				{/* <div className=" flex"> */}
				<a href="#">
					<Icon icon={logoIcon} styles="h-8 w-auto" />
				</a>
				{/* </div> */}
				<div className="flex">
					<div className="flex-40">
						<p className="font-semibold">{lineBreak(address)}</p>
					</div>
					<div className="flex-60">
						<p className="font-semibold">{email}</p>
					</div>
				</div>
			</div>
		</footer>
	);
};
