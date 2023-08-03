import { forwardRef } from 'react';

import s from './MenuItem.module.scss';

import { join } from 'ameliance-scripts/scripts/join';

export type MenuItemElement = HTMLLIElement;

export interface MenuItemProps extends ReactHTMLElementAttributes<MenuItemElement> {
	children: React.ReactNode;
	disabled?: boolean;
}

export const MenuItem = forwardRef<MenuItemElement, MenuItemProps>(
	({ disabled, children, className, ...rest }, ref) => {
		const componentClass = [disabled && s.disabled];

		return (
			<li className={join(s.MenuItem, className, componentClass)} ref={ref} {...rest}>
				{children}
			</li>
		);
	},
);

MenuItem.displayName = 'MenuItem';
