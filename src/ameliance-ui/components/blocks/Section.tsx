import { forwardRef } from 'react';

import { getGridClass } from './helpers/grid';
import type { Grid } from './types/Grid';

import { join } from 'ameliance-scripts/scripts/join';

export type SectionElement = HTMLElement;

export interface SectionProps extends ReactHTMLElementAttributes<SectionElement> {
	container?: boolean;
	gridContainer?: boolean;
	grid?: Grid;
}

export const Section = forwardRef<SectionElement, SectionProps>(
	({ gridContainer, grid, children, className, ...rest }, ref) => {
		const componentClass = [grid && getGridClass(grid)];

		return (
			<section
				className={join(className, gridContainer && 'row', componentClass)}
				ref={ref}
				{...rest}
			>
				{children}
			</section>
		);
	},
);

Section.displayName = 'Section';
