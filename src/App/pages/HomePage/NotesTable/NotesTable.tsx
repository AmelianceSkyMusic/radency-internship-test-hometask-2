import type { Column } from '~components/Table/Table';
import { Table } from '~components/Table/Table';
import { TableButton } from '~components/TableButton/TableButton';
import { CATEGORIES } from '~constants/CATEGORIES';
import { getObjKeyByValue } from '~helpers/getObjKeyByValue';
import { useTypedSelector } from '~store/hooks/useTypedSelector';
import type { Note } from '~store/types/Note';

export function NotesTable() {
	const { notes } = useTypedSelector((state) => state.notesReducer);

	const columns: Column<Note>[] = [
		{
			key: 'icon',
			header: '',
			cell: (row) => {
				const category = getObjKeyByValue(CATEGORIES, row?.rowAllValues.category);
				return <p className={`icon--${category}`} />;
			},
		},
		{
			key: 'name',
			header: 'Name',
		},
		{
			key: 'created',
			header: 'Created',
		},
		{
			key: 'category',
			header: 'Category',
		},
		{
			key: 'content',
			header: 'Content',
		},
		{
			key: 'dates',
			header: 'Dates',
		},
		{
			key: 'edit',
			cell: (row) => (
				<TableButton icon="icon--edit" onClick={() => console.log(row.rowAllValues.id)} />
			),
		},
		{
			key: 'to-archive',
			header: () => <TableButton icon="icon--to-archive" />,
			cell: (row) => (
				<TableButton icon="icon--to-archive" onClick={() => console.log(row.rowAllValues.id)} />
			),
		},
		{
			key: 'remove',
			header: () => <TableButton icon="icon--trash" />,
			cell: (row) => (
				<TableButton icon="icon--trash" onClick={() => console.log(row.rowAllValues.id)} />
			),
		},
	];
	return <Table columns={columns} data={notes} />;
}
