// import s from './NotesTable.module.scss';

import type { Column } from '~components/Table/Table';
import { Table } from '~components/Table/Table';
import { CATEGORIES } from '~constants/CATEGORIES';
import { getObjKeyByValue } from '~helpers/getObjKeyByValue';
import { useTypedSelector } from '~store/hooks/useTypedSelector';

import { getCategoriesFromNote } from './helpers/getCategoriesFromNote';

export function SummaryTable() {
	const { notes, archivedNotes } = useTypedSelector((state) => state.notesReducer);

	const categories = getCategoriesFromNote(notes, archivedNotes);

	const columns: Column<(typeof categories)[number]>[] = [
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
			key: 'category',
			header: 'Category',
			width: 2,
		},
		{
			key: 'active',
			header: 'Active',
		},
		{
			key: 'archived',
			header: 'Archived',
		},
	];
	return <Table columns={columns} data={categories} />;
}
