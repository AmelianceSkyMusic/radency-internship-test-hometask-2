import { forwardRef } from 'react';

import { Typography } from '~/ameliance-ui/components/Typography';

import type { Columns } from '../Table';

import s from './TableHeader.module.scss';

import { join } from 'ameliance-scripts/scripts/join';

type Header = Pick<Columns, 'key' | 'header'>;

export type TableHeaderElement = HTMLTableSectionElement;

export interface TableHeaderProps extends ReactHTMLElementAttributes<TableHeaderElement> {
	header: Header[];
}

export const TableHeader = forwardRef<TableHeaderElement, TableHeaderProps>(
	({ header, className, ...rest }, ref) => {
		return (
			<thead className={join(s.TableHeader, className)} ref={ref} {...rest}>
				<tr className={s.row}>
					{header.map((column) => (
						<th className={s.cell} key={column.key}>
							{typeof column.header === 'string' && (
								<Typography component="h6">{column.header}</Typography>
							)}
							{typeof column.header === 'function' && column.header(column.key)}
						</th>
					))}
				</tr>
			</thead>
		);
	},
);

TableHeader.displayName = 'TableHeader';
