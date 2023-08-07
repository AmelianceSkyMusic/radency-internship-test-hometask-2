import { forwardRef, useEffect, useRef } from 'react';

import { mergeRefs } from '~/ameliance-ui/helpers/mergeRefs';

import s from './Backdrop.module.scss';

import { join } from 'ameliance-scripts/scripts/join';

export type BackdropElement = HTMLButtonElement;

export interface BackdropProps extends ReactHTMLElementAttributes<BackdropElement> {
	opacity?: number;
	disabled?: boolean;
	show: boolean;
}

export const Backdrop = forwardRef<BackdropElement, BackdropProps>(
	({ className, disabled, show, opacity, ...rest }, ref) => {
		const backdropRef = useRef<HTMLButtonElement>(null);

		useEffect(() => {
			if (backdropRef && opacity)
				backdropRef.current?.style.setProperty('--backdrop-opacity', `${opacity}%`);
			// eslint-disable-next-line react-hooks/exhaustive-deps
		}, [backdropRef]);

		const componentClass = [disabled && s.disabled, show && s.show];

		return (
			<button
				type="button"
				className={join(s.Backdrop, className, componentClass)}
				ref={mergeRefs([ref, backdropRef])}
				{...rest}
			>
				{}
			</button>
		);
	},
);

Backdrop.displayName = 'Backdrop';
