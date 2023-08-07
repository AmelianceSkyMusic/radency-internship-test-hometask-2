import { forwardRef } from 'react';

import { getGridClass } from './helpers/grid';
import type { Grid } from './types/Grid';

import { join } from 'ameliance-scripts/scripts/join';

export type NavElement = HTMLElement;
export interface NavProps extends ReactHTMLElementAttributes<NavElement> {
	gridContainer?: boolean;
	grid?: Grid;
}

export const Nav = forwardRef<NavElement, NavProps>(
	({ gridContainer, grid, children, className, ...rest }, ref) => {
		const gridClass = grid && getGridClass(grid);

		return (
			<nav className={join(className, gridContainer && 'row', gridClass)} ref={ref} {...rest}>
				{children}
			</nav>
		);
	},
);

Nav.displayName = 'Nav';
