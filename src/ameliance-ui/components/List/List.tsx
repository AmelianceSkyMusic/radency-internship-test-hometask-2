import { forwardRef } from 'react';

import { ReactChildren } from '../_LABS/ReactChildren';

import s from './List.module.scss';

import { join } from 'ameliance-scripts/scripts/join';

export type ListElement = HTMLUListElement;

export interface ListProps extends ReactHTMLElementAttributes<ListElement> {
	type?: 'unordered' | 'custom';
	margin?: number;
}

export const List = forwardRef<ListElement, ListProps>(
	({ type, margin, children, className, ...rest }, ref) => {
		const componentClass = [type === 'unordered' && s[type], type === 'custom' && s[type]];

		const componentStyle = {
			marginLeft: margin && `${margin}px`,
		};

		return (
			<ul
				className={join(s.List, className, componentClass)}
				ref={ref}
				style={componentStyle}
				{...rest}
			>
				<ReactChildren style={componentStyle}>{children}</ReactChildren>
			</ul>
		);
	},
);

List.displayName = 'List';
