import { forwardRef } from 'react';

import s from './MenuDivider.module.scss';

import { join } from 'ameliance-scripts/scripts/join';

export type MenuDividerElement = HTMLSpanElement;

export type MenuDividerProps = ReactHTMLElementAttributes<MenuDividerElement>;

export const MenuDivider = forwardRef<MenuDividerElement, MenuDividerProps>(
	({ className, ...rest }, ref) => (
		<span className={join(s.MenuDivider, className)} ref={ref} {...rest} />
	),
);

MenuDivider.displayName = 'MenuDivider';
