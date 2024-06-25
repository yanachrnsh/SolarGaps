import { FC } from 'react';
import { styles } from '../../constants/style-constants';
import { navLinks } from '../../constants/content-constants';

export const Navbar = () => {
	return (
		<nav>
			<div className={styles.navBarMob}>Menu mobile</div>
			<div className={styles.navBarDesk}>
				{navLinks.map(({ id, title }) => (
					<Link key={id} id={id} title={title} />
				))}
			</div>
		</nav>
	);
};

type LinkProps = {
	id: string;
	title: string;
};

// TODO: fix the link href

const Link: FC<LinkProps> = ({ title, id }) => {
	return (
		<>
			<a href={`#${id}`} className={styles.navLink}>
				<span className="text-xxs font-extrabold tracking-widest">{title.toUpperCase()}</span>
			</a>
		</>
	);
};
