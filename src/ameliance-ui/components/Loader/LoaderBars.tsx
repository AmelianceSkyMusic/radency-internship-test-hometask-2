import { forwardRef } from 'react';

import s from './LoaderBars.module.scss';

import { join } from 'ameliance-scripts/scripts/join';

export type LoaderBarsElement = HTMLDivElement;

export type LoaderBarsProps = ReactHTMLElementAttributes<LoaderBarsElement>;

export const LoaderBars = forwardRef<LoaderBarsElement, LoaderBarsProps>(
	({ className, ...rest }, ref) => (
		<div className={join(s.LoaderBars, className)} ref={ref} {...rest}>
			<div />
			<div />
			<div />
		</div>
	),
);

LoaderBars.displayName = 'LoaderBars';
