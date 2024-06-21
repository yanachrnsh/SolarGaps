import { Icon } from '../icon/icon.component';
import { Navbar } from '../navbar/navbar.component';
import { logoIcon } from '../../constants/content-constants';
import { styles } from '../../constants/style-constants';

export const Header = () => {
	return (
		<header className={styles.header} aria-label="Global">
			<div className="flex">
				<a href="#">
					<Icon icon={logoIcon} styles="h-8 w-auto" />
				</a>
			</div>
			<Navbar />
		</header>
	);
};
