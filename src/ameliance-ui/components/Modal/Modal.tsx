import { forwardRef, useEffect, useState } from 'react';

import { Backdrop } from '../Backdrop';
import { Button } from '../Button';
import { Portal } from '../Portal';
import { Typography } from '../Typography';

import s from './Modal.module.scss';

import { isObjectEmpty } from 'ameliance-scripts/scripts/isObjectEmpty';
import { join } from 'ameliance-scripts/scripts/join';

export type ModalElement = HTMLDivElement;

interface Button {
	text?: string;
	onClick?: () => void;
	close?: boolean;
	icon?: React.ReactElement;
	iconPosition?: 'left' | 'right';
	disabled?: boolean;
	buttonIcon?: boolean;
	size?: ComponentSizes;
	isSubmit?: boolean;
	type?: 'primary' | 'secondary';
	form?: string;
}

export interface ModalProps extends ReactHTMLElementAttributes<ModalElement> {
	type?: NotificationTypes;
	title?: string;
	noTitle?: boolean;
	children: React.ReactElement;
	mainButton?: Button;
	secondButton?: Button;
	backdrop?: {
		onClick?: { (): void } | null;
		disabled?: boolean;
	};
	onClose?: () => void;
	noButtons?: boolean;
	size?: 'flex' | 'medium' | 'large';
}

export const Modal = forwardRef<ModalElement, ModalProps>(
	(
		{
			type,
			title,
			noTitle,
			mainButton = {
				text: 'Ок',
			},
			secondButton,
			backdrop,
			onClose,
			noButtons = false,
			size = 'flex',
			children,
			className,
			...rest
		},
		ref,
	) => {
		const [show, setShow] = useState('show');

		const isSecondButton = secondButton && !isObjectEmpty(secondButton);

		const closeModal = () => {
			setShow('');
		};

		const handleAnimationend = () => {
			if (show !== 'show') {
				closeModal();
				document.documentElement.style.scrollbarGutter = 'auto';
				document.body.style.overflow = 'visible';
				if (onClose) onClose();
			}
		};

		const backdropClickHandler = () => {
			if (backdrop?.onClick) backdrop.onClick();
			closeModal();
		};

		const mainButtonHandler = () => {
			if (mainButton?.onClick) mainButton?.onClick();
			if (mainButton?.close) closeModal();
			// if (!mainButton?.form) closeModal();
		};

		const secondButtonHandler = () => {
			if (secondButton?.onClick) secondButton.onClick();
			if (secondButton?.close) closeModal();
			// if (!secondButton?.form) closeModal();
		};

		const typeClass = type ? s[type] : null;

		const modalTitle =
			title ||
			(type === 'alert' && 'Повідомлення!') ||
			(type === 'info' && 'Інформація!') ||
			(type === 'success' && 'Успіх!') ||
			(type === 'error' && 'Помилка') ||
			(type === 'warn' && 'Попередження!');

		useEffect(() => {
			document.body.style.overflow = 'hidden';
			const isScroll = document.body.scrollHeight > document.body.clientHeight;
			if (isScroll) document.documentElement.style.scrollbarGutter = 'stable';
		}, []);

		const sizeClass = (size === 'medium' && s.medium) || (size === 'large' && s.large);

		return (
			<Portal>
				<div
					className={join(s.Modal, className, show)}
					onAnimationEnd={handleAnimationend}
					ref={ref}
					{...rest}
				>
					<Backdrop
						onClick={backdropClickHandler}
						disabled={backdrop?.disabled}
						show={show === 'show'}
					/>
					<div className={join(sizeClass, s.content)}>
						{!noTitle && (
							<div className={type && join(s.titleContainer, typeClass, type)}>
								<Typography component="h4" className={s.title}>
									{modalTitle}
								</Typography>
							</div>
						)}
						<div className={s.body}>{children}</div>
						{!noButtons && (
							<div className={s.buttons}>
								{isSecondButton && (
									<Button
										size={secondButton?.size}
										type={secondButton?.type || 'secondary'}
										onClick={() => secondButtonHandler()}
										form={secondButton?.form}
										submit={secondButton?.isSubmit}
										disabled={secondButton?.disabled}
									>
										{secondButton?.iconPosition === 'left' && secondButton?.icon}
										{!secondButton?.icon &&
											(!secondButton?.icon ? secondButton?.text : 'Відміна')}
										{!secondButton?.text && secondButton?.icon && secondButton?.icon}
										{secondButton?.iconPosition === 'left' && secondButton?.icon}
									</Button>
								)}
								<Button
									size={mainButton?.size}
									type={mainButton?.type || 'primary'}
									onClick={() => mainButtonHandler()}
									form={mainButton?.form}
									submit={mainButton?.isSubmit}
									disabled={mainButton?.disabled}
								>
									{mainButton?.iconPosition === 'left' && mainButton?.icon}
									{!mainButton?.icon && (!mainButton?.icon ? mainButton?.text : 'Ок')}
									{!mainButton?.text && mainButton?.icon && mainButton?.icon}
									{mainButton?.iconPosition === 'right' && mainButton?.icon}
								</Button>
							</div>
						)}
					</div>
				</div>
			</Portal>
		);
	},
);

Modal.displayName = 'Modal';
