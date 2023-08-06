import { forwardRef } from 'react';
import type { FieldErrors, FieldValues } from 'react-hook-form';

import { ChevronDownIcon } from '~/ameliance-ui/components/icons/ChevronDownIcon';

import { InputWrapper } from '../InputWrapper/InputWrapper';

import cs from '../commonStyle.module.scss';
import s from './Dropdown.module.scss';

import { join } from 'ameliance-scripts/scripts/join';

export type DropdownElement = HTMLSelectElement;

export interface DropdownProps extends ReactHTMLElementAttributes<DropdownElement> {
	label?: string;
	options: string[];
	register?: FieldValues;
	errors?: FieldErrors<FieldValues>;
	required?: boolean;
	disabled?: boolean;
	defaultValue?: string;
}

export const Dropdown = forwardRef<DropdownElement, DropdownProps>(
	(
		{
			label,
			placeholder,
			required,
			disabled,
			options,
			register,
			errors,
			defaultValue,
			className,
			...rest
		},
		ref,
	) => {
		const error = errors ? errors[register?.name]?.message?.toString() : '';
		const componentClass = [error && cs.error, disabled && cs.disabled];

		return (
			<label className={className}>
				<InputWrapper
					label={label}
					error={error}
					required={required}
					disabled={disabled}
					className={join(componentClass)}
					showError={!!errors}
				>
					<div className={s.inputContainer}>
						<select
							className={join(s.input, cs.input)}
							defaultValue={defaultValue || ''}
							ref={ref}
							{...register}
							{...rest}
						>
							{placeholder && (
								<option value="" disabled>
									{placeholder}
								</option>
							)}
							{options.map((optionValue) => (
								<option key={optionValue} value={optionValue}>
									{optionValue}
								</option>
							))}
						</select>
						<ChevronDownIcon className={s.icon} />
					</div>
				</InputWrapper>
			</label>
		);
	},
);

Dropdown.displayName = 'Dropdown';
