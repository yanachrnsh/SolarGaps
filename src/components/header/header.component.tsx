import { Icon } from '../icon/icon.component';
import logo from '../../assets/logo.svg';
import { styles } from '../../constants/style-constants';
import { Navbar } from '../navbar/navbar.component';

export const Header = () => {
	return (
		<header className='mx-auto flex max-w-100  items-center justify-between p-9 lg:px-9" aria-label="Global'>
			<div className=" flex ">
				<a href="#">
					<Icon description="Solar Gaps" icon={logo} styles={styles.iconLogo} />
				</a>
			</div>
			<Navbar />
		</header>
	);
};
