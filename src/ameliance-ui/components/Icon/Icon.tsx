import { forwardRef } from 'react';

import s from './Icon.module.scss';

import { join } from 'ameliance-scripts/scripts/join';

export type IconElement = HTMLDivElement;

export interface IconProps extends ReactHTMLElementAttributes<IconElement> {
	size?: ComponentSizes;
	height?: string | number;
	width?: string | number;
}

export const Icon = forwardRef<IconElement, IconProps>(
	({ size = 'default', width, height, onClick, children, className, style, ...rest }, ref) => {
		const componentClass = [onClick && 'clickable', size && s[size]];

		const customSizeStyle = size === 'custom' && width && height ? { width, height } : {};

		return (
			<div
				className={join(s.Icon, className, componentClass)}
				onClick={onClick}
				ref={ref}
				style={{ ...style, ...customSizeStyle }}
				{...rest}
			>
				{children}
			</div>
		);
	},
);

Icon.displayName = 'Icon';
