import { FC } from 'react';
import { Icon } from '../icon/icon.component';
import logo from '../../assets/logo.svg';
import { styles } from '../../constants/style-constants';
import { navLinks } from '../../constants/content-constants';

// TODO: fix spacing
export const Navbar = () => {
	return (
		<nav className="mx-auto flex max-w-7xl  items-center justify-between p-9 lg:px-9" aria-label="Global">
			<div className=" flex ">
				<a href="#">
					<Icon description="Solar Gaps" icon={logo} styles={styles.iconLogo} />
				</a>
			</div>

			<div className="flex  flex-1 justify-end lg:hidden">Menu mobile</div>
			{/* TODO: gap?  */}
			<div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-[60px]">
				{navLinks.map(({ id, title }) => (
					<Link key={id} id={id}>
						<span className=" text-xs font-extrabold">{title.toUpperCase()}</span>
					</Link>
				))}
			</div>
		</nav>
	);
};

type LinkProps = {
	children: React.ReactNode;
	linkStyles?: string;
	id: string;
};

// TODO: fix the link href
// TODO: move styles to style obj?

const Link: FC<LinkProps> = ({ children, linkStyles, id }) => {
	return (
		<>
			<a href={`#${id}`} className={`-mx-3 block rounded-lg px-3 py-2 font-semibold leading-7 hover:text-brand-yellow ${linkStyles}`}>
				{children}
			</a>
		</>
	);
};
