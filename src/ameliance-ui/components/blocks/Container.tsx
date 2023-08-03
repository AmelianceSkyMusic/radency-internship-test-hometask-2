import { forwardRef } from 'react';

import { join } from 'ameliance-scripts/scripts/join';

export type ContainerElement = HTMLDivElement;

interface Container extends ReactHTMLElementAttributes<ContainerElement> {
	gridContainer?: boolean;
}

export const Container = forwardRef<ContainerElement, Container>(
	({ gridContainer, children, className, ...rest }, ref) => (
		<div className={join(className, 'container', gridContainer && 'row')} ref={ref} {...rest}>
			{children}
		</div>
	),
);

Container.displayName = 'Container';
