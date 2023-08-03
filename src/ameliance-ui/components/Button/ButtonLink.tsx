import { forwardRef } from 'react';

import typography from '../Typography/Typography.module.scss';
import s from './Button.module.scss';

import { join } from 'ameliance-scripts/scripts/join';

export type ButtonLinkElement = HTMLAnchorElement;

export interface ButtonLinkProps
	extends ReactHTMLElementAttributes<
		ButtonLinkElement,
		React.AnchorHTMLAttributes<ButtonLinkElement>
	> {
	size?: ComponentSizes;
	width?: string | number;
	height?: string | number;
	disabled?: boolean;
	type?: 'primary' | 'secondary' | 'text';
	blank?: boolean;
	customStyle?: boolean;
}

export const ButtonLink = forwardRef<ButtonLinkElement, ButtonLinkProps>(
	(
		{
			size = 'default',
			width,
			height,
			type = 'primary',
			blank,
			customStyle,
			children,
			className,
			style,
			...rest
		},
		ref,
	) => {
		const hasLabel = Array.isArray(children)
			? children?.some((child) => typeof child === 'string')
			: typeof children === 'string';

		const componentClass = [size && s[size], type && s[type], !hasLabel && s.icon, s.Button];

		const blankAttributes = blank && {
			target: '_blank',
			rel: 'noreferrer noopener',
		};

		const customSizeStyle = size === 'custom' ? { width, height } : {};

		return (
			<a
				className={join(className, !customStyle && componentClass)}
				ref={ref}
				style={{ ...style, ...customSizeStyle }}
				{...blankAttributes}
				{...rest}
			>
				<span className={join(s.label, typography.button)}>{children}</span>
			</a>
		);
	},
);

ButtonLink.displayName = 'ButtonLink';
