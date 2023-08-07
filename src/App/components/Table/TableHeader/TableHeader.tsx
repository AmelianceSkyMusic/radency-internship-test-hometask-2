import { Typography } from '~/ameliance-ui/components/Typography';

import type { Column } from '../Table';

import s from './TableHeader.module.scss';

import { join } from 'ameliance-scripts/scripts/join';

type Header<T> = Pick<Column<T>, 'key' | 'header' | 'width'>;

export type TableHeaderElement = HTMLTableSectionElement;

export interface TableHeaderProps<T> extends ReactHTMLElementAttributes<TableHeaderElement> {
	header: Header<T>[];
}

export function TableHeader<T>({ header, className, ...rest }: TableHeaderProps<T>) {
	return (
		<thead className={join(s.TableHeader, className)} {...rest}>
			<tr className={s.row}>
				{header.map((column) => {
					let styleSize;
					if (typeof column.width === 'string') styleSize = { width: column.width };
					if (typeof column.width === 'number') styleSize = { flex: column.width };
					return (
						<th className={s.cell} key={column.key} style={styleSize || { flex: 1 }}>
							{typeof column.header === 'string' && (
								<Typography component="h6">{column.header}</Typography>
							)}
							{typeof column.header === 'function' && column.header(column.key)}
						</th>
					);
				})}
			</tr>
		</thead>
	);
}
