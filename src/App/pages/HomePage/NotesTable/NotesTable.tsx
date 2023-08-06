import type { Column } from '~components/Table/Table';
import { Table } from '~components/Table/Table';
import { TableButton } from '~components/TableButton/TableButton';
import { CATEGORIES } from '~constants/CATEGORIES';
import { getObjKeyByValue } from '~helpers/getObjKeyByValue';
import { mapNotesData } from '~helpers/mapNotesData';
import { useTypedDispatch } from '~store/hooks/useTypedDispatch';
import { useTypedSelector } from '~store/hooks/useTypedSelector';
import { notesSlice } from '~store/notes/notesSlice';

import type { Note } from '~store/types/Note';
import { EditTableButton } from './EditTableButton/EditTableButton';

export function NotesTable() {
	const { notes } = useTypedSelector((state) => state.notesReducer);
	const dispatch = useTypedDispatch();
	const { actions } = notesSlice;

	const mappedDate = mapNotesData(notes);

	const columns: Column<(typeof mappedDate)[number]>[] = [
		{
			key: 'icon',
			header: '',
			width: '32px',
			cell: (row) => {
				const category = getObjKeyByValue(CATEGORIES, row?.rowAllValues.category);
				return <p className={`icon--${category}`} />;
			},
		},
		{
			key: 'name',
			header: 'Name',
			width: 2,
		},
		{
			key: 'created',
			header: 'Created',
			width: 2,
		},
		{
			key: 'category',
			header: 'Category',
			width: 2,
		},
		{
			key: 'content',
			header: 'Content',
			width: 6,
		},
		{
			key: 'dates',
			header: 'Dates',
			width: 1,
		},
		{
			key: 'edit',
			width: '48px',
			cell: (row) => (
				<EditTableButton
					id={row.rowAllValues.id}
					name={row.rowAllValues.name}
					category={row.rowAllValues.category}
					content={row.rowAllValues.content}
				/>
			),
		},
		{
			key: 'to-archive',
			width: '48px',
			header: () => (
				<TableButton
					icon="icon--to-archive"
					onClick={() => dispatch(actions.moveAllNotesToArchive())}
				/>
			),
			cell: (row) => (
				<TableButton
					icon="icon--to-archive"
					onClick={() => dispatch(actions.moveNoteToArchive(row.rowAllValues.id))}
				/>
			),
		},
		{
			key: 'remove',
			width: '48px',
			header: () => (
				<TableButton icon="icon--trash" onClick={() => dispatch(actions.removeAllNotes())} />
			),
			cell: (row) => (
				<TableButton
					icon="icon--trash"
					onClick={() => dispatch(actions.removeNoteFromNotes(row.rowAllValues.id))}
				/>
			),
		},
	];

	return (
		<>
			<Table columns={columns} data={mappedDate} />
	return <Table columns={columns} data={notes} />;
		</>
	);
}
