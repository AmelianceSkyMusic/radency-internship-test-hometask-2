import { forwardRef, useEffect, useState } from 'react';

import { Typography } from '../Typography';

import s from './Avatar.module.scss';

import { join } from 'ameliance-scripts/scripts/join';

export type AvatarElement = HTMLDivElement;

export interface AvatarProps extends ReactHTMLElementAttributes<AvatarElement> {
	src?: string;
	alt?: string;
	char?: string;
	color?: string;
	size?: ComponentSizes;
}

export const Avatar = forwardRef<AvatarElement, AvatarProps>(
	({ src, alt, char, color, size = 'default', onClick, children, className, ...rest }, ref) => {
		const [imgUrl, setImgUrl] = useState('');

		useEffect(() => {
			if (src) setImgUrl(src);
		}, [src]);

		const componentClass = [onClick && s.clickable];

		const sizeClass = size && s[size];

		const handleImageOnError = () => {
			setImgUrl('');
		};

		return (
			<div
				onClick={onClick}
				className={join(s.Avatar, className, componentClass)}
				ref={ref}
				{...rest}
			>
				{!imgUrl && children && (
					<div className={join(s.charContainer, sizeClass)} style={{ backgroundColor: color }}>
						{children}
					</div>
				)}
				{!!imgUrl && (
					<img
						className={join(s.img, sizeClass)}
						src={imgUrl}
						alt={alt}
						onError={handleImageOnError}
					/>
				)}
				{!imgUrl && !children && (
					<div className={join(s.charContainer, sizeClass)} style={{ backgroundColor: color }}>
						<Typography display="h5" className={s.char}>
							{char}
						</Typography>
					</div>
				)}
			</div>
		);
	},
);

Avatar.displayName = 'Avatar';
