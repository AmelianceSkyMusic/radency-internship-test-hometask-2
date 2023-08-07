import { forwardRef } from 'react';

import { Typography } from '../Typography';

import s from './Chip.module.scss';

import { join } from 'ameliance-scripts/scripts/join';

export type ChipElement = HTMLDivElement;

export interface ChipProps extends ReactHTMLElementAttributes<ChipElement> {
	label: string;
	onChange: () => void;
	size?: ComponentSizes;
	selected?: boolean;
	disabled?: boolean;
}

export const Chip = forwardRef<ChipElement, ChipProps>(
	({ onChange, className, label, size = 'default', selected, disabled, ...rest }, ref) => {
		const handleOnClick = () => {
			if (onChange) onChange();
		};

		const chipClass = [selected && s.selected, disabled && s.disabled];

		const sizeClass = size && s[size];

		return (
			<div
				className={join(s.Chip, className, sizeClass, chipClass)}
				onClick={handleOnClick}
				ref={ref}
				{...rest}
			>
				<Typography component="p1" className={join(s.label, sizeClass)}>
					{label}
				</Typography>
			</div>
		);
	},
);

Chip.displayName = 'Chip';
