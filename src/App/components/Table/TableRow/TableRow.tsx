import { Typography } from '~/ameliance-ui/components/Typography';

import s from './TableRow.module.scss';

import { join } from 'ameliance-scripts/scripts/join';

export interface RowCellData<T> {
	rowAllValues: T;
	rowCell?: RowCell<T>;
}

export interface RowCell<T> {
	value: T[keyof T];
	key: string | number;
	cell?: string | ((row: RowCellData<T>) => React.ReactElement);
}

interface Row<T> {
	rowAllValues: T;
	cells: RowCell<T>[];
}

export type TableRowElement = HTMLTableRowElement;

export interface TableRowProps<T> extends ReactHTMLElementAttributes<TableRowElement> {
	row: Row<T>;
}

export function TableRow<T>({ row, className, ...rest }: TableRowProps<T>) {
	return (
		<tr className={join(s.TableRow, className)} {...rest}>
			{row.cells.map((rowCell) => {
				return (
					<td className={s.cell} key={rowCell.key}>
						{rowCell.cell ? (
							typeof rowCell.cell === 'string' ? (
								<Typography component="p2">{rowCell.cell}</Typography>
							) : (
								typeof rowCell.cell === 'function' &&
								rowCell.cell({ rowCell, rowAllValues: row.rowAllValues })
							)
						) : (
							typeof rowCell.value === 'string' && (
								<Typography component="p2">{rowCell.value}</Typography>
							)
						)}
					</td>
				);
			})}
		</tr>
	);
}
