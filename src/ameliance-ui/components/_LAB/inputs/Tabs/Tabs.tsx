import { forwardRef } from 'react';
import type { FieldErrors, FieldValues } from 'react-hook-form';

import { Typography } from '~/ameliance-ui/components/Typography';

import type { InputWrapperCommonProps } from '../InputWrapper/InputWrapper';
import { InputWrapper } from '../InputWrapper/InputWrapper';

import cs from '../commonStyle.module.scss';
import s from './Tabs.module.scss';

import { join } from 'ameliance-scripts/scripts/join';

export type TabsElement = HTMLInputElement;

export interface TabsProps
	extends ReactHTMLElementAttributes<TabsElement>,
		InputWrapperCommonProps {
	name: string;
	labels: (string | number)[];
	defaultValue?: string;
	register?: FieldValues;
	errors?: FieldErrors<FieldValues>;
}

export const Tabs = forwardRef<TabsElement, TabsProps>(
	(
		{
			label,
			required,
			disabled,
			register,
			errors,
			name,
			defaultValue,
			labels,
			className,
			...rest
		},
		ref,
	) => {
		const error = errors ? errors[register?.name]?.message?.toString() : '';
		const componentClass = [error && cs.error, disabled && cs.disabled, className];

		return (
			<InputWrapper
				label={label}
				error={error}
				required={required}
				disabled={disabled}
				className={join(componentClass)}
			>
				<div className={s.elementsContainer}>
					{labels.map((value) => (
						<label key={value} className={s.element}>
							<input
								type="radio"
								className={s.input}
								value={value.toString()}
								ref={ref}
								name={name}
								checked={defaultValue?.toString() === value.toString()}
								{...register}
								{...rest}
							/>
							<Typography component="h4" className={s.label}>
								{value}
							</Typography>
							<div className={s.underline} />
						</label>
					))}
				</div>
			</InputWrapper>
		);
	},
);

Tabs.displayName = 'Tabs';
