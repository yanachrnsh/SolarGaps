import { Icon } from '../icon/icon.component';
import { Navbar } from '../navbar/navbar.component';
import { logoIcon } from '../../constants/content-constants';

export const Header = () => {
	return (
		<header className='mx-auto flex max-w-100  items-center justify-between p-9 lg:px-9" aria-label="Global'>
			<div className=" flex ">
				<a href="#">
					<Icon icon={logoIcon} styles="h-8 w-auto" />
				</a>
			</div>
			<Navbar />
		</header>
	);
};
