import { forwardRef } from 'react';

import { join } from 'ameliance-scripts/scripts/join';

export type HeaderElement = HTMLElement;

export type HeaderProps = ReactHTMLElementAttributes<HeaderElement>;

export const Header = forwardRef<HeaderElement, HeaderProps>(
	({ children, className, ...rest }, ref) => (
		<header className={join(className, 'header')} ref={ref} {...rest}>
			{children}
		</header>
	),
);

Header.displayName = 'Header';
