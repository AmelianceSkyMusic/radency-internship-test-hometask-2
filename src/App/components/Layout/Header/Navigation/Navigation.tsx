import { NavLink } from 'react-router-dom';

import { Nav } from '~/ameliance-ui/components/blocks/Nav';
import { LinkLabel } from '~/ameliance-ui/components/Link';

import { navigationList } from './navigationList';

import s from './Navigation.module.scss';

export function Navigation() {
	const linkClass = ({ isActive }: Record<string, boolean>) => (isActive ? s.active : '');

	return (
		<Nav className={s.Navigation}>
			{navigationList.map((item) => (
				<NavLink key={item.label} className={linkClass} end={item.end} to={item.path}>
					<LinkLabel className={s.link} underline={false}>
						{item.label}
					</LinkLabel>
				</NavLink>
			))}
		</Nav>
	);
}
