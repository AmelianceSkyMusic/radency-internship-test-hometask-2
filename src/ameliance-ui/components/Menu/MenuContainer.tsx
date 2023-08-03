import { forwardRef } from 'react';

import s from './MenuContainer.module.scss';

import { join } from 'ameliance-scripts/scripts/join';

export type MenuContainerElement = HTMLDivElement;

export type MenuContainerProps = ReactHTMLElementAttributes<MenuContainerElement>;

export const MenuContainer = forwardRef<MenuContainerElement, MenuContainerProps>(
	({ children, className, ...rest }, ref) => (
		<div className={join(s.MenuContainer, className)} ref={ref} {...rest}>
			{children}
		</div>
	),
);

MenuContainer.displayName = 'MenuContainer';
