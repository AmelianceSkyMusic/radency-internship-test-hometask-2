import { forwardRef } from 'react';

import typography from '../Typography/Typography.module.scss';
import s from './Link.module.scss';

import { join } from 'ameliance-scripts/scripts/join';

export type LinkElement = HTMLAnchorElement;

export interface LinkProps
	extends ReactHTMLElementAttributes<LinkElement, React.AnchorHTMLAttributes<LinkElement>> {
	display?: TypographyVariants;
	underline?: boolean;
	hover?: boolean;
	blank?: boolean;
}

export const Link = forwardRef<LinkElement, LinkProps>(
	({ display, underline, hover = true, children, blank, className, ...rest }, ref) => {
		// *----- create class from props -----
		const componentClass = [
			display ? typography[display] : typography.link,
			underline === false && s.noUnderline,
			hover && s.hover,
		];

		const blankAttributes = blank && {
			target: '_blank',
			rel: 'noreferrer noopener',
		};

		return (
			<a
				className={join(s.Link, className, componentClass)}
				ref={ref}
				{...blankAttributes}
				{...rest}
			>
				{children}
			</a>
		);
	},
);

Link.displayName = 'Link';
