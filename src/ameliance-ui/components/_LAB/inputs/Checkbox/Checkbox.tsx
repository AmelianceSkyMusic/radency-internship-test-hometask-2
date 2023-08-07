import { forwardRef } from 'react';
import type { FieldErrors, FieldValues } from 'react-hook-form';

import { Typography } from '~/ameliance-ui/components/Typography';

import type { InputWrapperCommonProps } from '../InputWrapper/InputWrapper';
import { InputWrapper } from '../InputWrapper/InputWrapper';

import cs from '../commonStyle.module.scss';
import s from './Checkbox.module.scss';

import { join } from 'ameliance-scripts/scripts/join';

export type CheckboxElement = HTMLInputElement;

export interface CheckboxProps
	extends ReactHTMLElementAttributes<CheckboxElement>,
		InputWrapperCommonProps {
	text: string;
	register?: FieldValues;
	errors?: FieldErrors<FieldValues>;
}

export const Checkbox = forwardRef<CheckboxElement, CheckboxProps>(
	({ label, text, required, disabled, register, errors, className, ...rest }, ref) => {
		const error = errors ? errors[register?.name]?.message?.toString() : '';
		const componentClass = [error && cs.error, disabled && cs.disabled, className];

		return (
			<InputWrapper
				label={label}
				error={error}
				required={required}
				disabled={disabled}
				className={join(componentClass)}
				showError={!!errors}
			>
				<div className={s.elementsContainer}>
					<label className={s.element}>
						<input
							type="checkbox"
							value={text}
							className={s.input}
							ref={ref}
							{...register}
							{...rest}
						/>
						<Typography component="p1" className={s.label}>
							{text}
						</Typography>
					</label>
				</div>
			</InputWrapper>
		);
	},
);

Checkbox.displayName = 'Checkbox';
