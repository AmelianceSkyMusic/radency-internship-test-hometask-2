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
	disabled?: boolean;
	type?: 'primary' | 'secondary' | 'text';
	blank?: boolean;
}

export const ButtonLink = forwardRef<ButtonLinkElement, ButtonLinkProps>(
	({ size = 'default', type = 'primary', blank, children, className, ...rest }, ref) => {
		// *----- check is icon should be button icon  -----
		const hasLabel = Array.isArray(children)
			? children?.some((child) => typeof child === 'string')
			: typeof children === 'string';

		const sizeClass = size && s[size];

		const componentClass = [type && s[type], !hasLabel && s.icon];

		const blankAttributes = blank && {
			target: '_blank',
			rel: 'noreferrer noopener',
		};

		return (
			<a
				className={join(s.Button, className, sizeClass, componentClass)}
				ref={ref}
				{...blankAttributes}
				{...rest}
			>
				<span className={join(s.label, typography.button, sizeClass)}>{children}</span>
			</a>
		);
	},
);

ButtonLink.displayName = 'ButtonLink';
