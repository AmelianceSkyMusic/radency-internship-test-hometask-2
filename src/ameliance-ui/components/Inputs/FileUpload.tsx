import { forwardRef } from 'react';

import s from './FileUpload.module.scss';

import { join } from 'ameliance-scripts/scripts/join';

export type FileUploadElement = HTMLInputElement;

export interface FileUploadProps extends ReactHTMLElementAttributes<FileUploadElement> {
	icon: string;
}

export const FileUpload = forwardRef<FileUploadElement, FileUploadProps>(
	({ children, className, ...rest }, ref) => (
		<div>
			<label htmlFor="file">
				{children}
				<input type="file" className={join(s.input, className)} id="file" ref={ref} {...rest} />
			</label>
		</div>
	),
);

FileUpload.displayName = 'FileUpload';
