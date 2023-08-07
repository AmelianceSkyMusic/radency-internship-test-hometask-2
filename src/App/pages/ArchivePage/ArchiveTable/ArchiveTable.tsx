import type { Column } from '~components/Table/Table';
import { Table } from '~components/Table/Table';
import { TableButton } from '~components/TableButton/TableButton';
import { CATEGORIES } from '~constants/CATEGORIES';
import { getObjKeyByValue } from '~helpers/getObjKeyByValue';
import { mapNotesData } from '~helpers/mapNotesData';
import { useTypedDispatch } from '~store/hooks/useTypedDispatch';
import { useTypedSelector } from '~store/hooks/useTypedSelector';
import { notesSlice } from '~store/notes/notesSlice';

export function ArchiveTable() {
	const { archivedNotes } = useTypedSelector((state) => state.notesReducer);
	const dispatch = useTypedDispatch();
	const { actions } = notesSlice;

	const mappedDate = mapNotesData(archivedNotes);

	const columns: Column<(typeof mappedDate)[number]>[] = [
		{
			key: 'icon',
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
		},
		{
			key: 'to-archive',
			width: '48px',
			header: () => (
				<TableButton
					icon="icon--from-archive"
					onClick={() => dispatch(actions.moveAllNotesFromArchive())}
				/>
			),
			cell: (row) => (
				<TableButton
					icon="icon--from-archive"
					onClick={() => dispatch(actions.moveNoteFromArchive(row.rowAllValues.id))}
				/>
			),
		},
		{
			key: 'remove',
			width: '48px',
			header: () => (
				<TableButton icon="icon--trash" onClick={() => dispatch(actions.removeAllArchive())} />
			),
			cell: (row) => (
				<TableButton
					icon="icon--trash"
					onClick={() => dispatch(actions.removeNoteFromArchive(row.rowAllValues.id))}
				/>
			),
		},
	];

	return (
		<>
			<Table columns={columns} data={mappedDate} />
		</>
	);
}
