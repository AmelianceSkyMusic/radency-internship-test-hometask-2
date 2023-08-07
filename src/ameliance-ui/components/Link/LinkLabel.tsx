import { forwardRef } from 'react';

import typography from '../Typography/Typography.module.scss';
import s from './Link.module.scss';

import { join } from 'ameliance-scripts/scripts/join';

export type LinkLabelElement = HTMLSpanElement;

export interface LinkLabelProps extends ReactHTMLElementAttributes<LinkLabelElement> {
	display?: TypographyVariants;
	underline?: boolean;
	blank?: boolean;
}

export const LinkLabel = forwardRef<LinkLabelElement, LinkLabelProps>(
	({ display, underline, children, blank, className, ...rest }, ref) => {
		// *----- create class from props -----
		const componentClass = [
			display ? typography[display] : typography.link,
			underline === false && s.noUnderline,
		];

		const blankAttributes = blank && {
			target: '_blank',
			rel: 'noreferrer noopener',
		};

		return (
			<span
				className={join(s.Link, className, componentClass)}
				ref={ref}
				{...blankAttributes}
				{...rest}
			>
				{children}
			</span>
		);
	},
);

LinkLabel.displayName = 'LinkLabel';
