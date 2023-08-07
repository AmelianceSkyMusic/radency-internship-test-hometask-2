import { CATEGORIES } from '~constants/CATEGORIES';
import { groupBy } from '~helpers/groupBy';
import type { Note } from '~store/types/Note';

import { sortArrayOfObj } from 'ameliance-scripts/scripts/sortArrayOfObj';

export function getCategoriesFromNote(notes: Note[], archivedNotes: Note[]) {
	let notesGroup: Record<string, Note[]>;
	let archivedNotesGroup: Record<string, Note[]>;

	try {
		notesGroup = Object.fromEntries(groupBy(notes, 'category'));
	} catch (error) {
		// error showed in groupBy
	}

	try {
		archivedNotesGroup = Object.fromEntries(groupBy(archivedNotes, 'category'));
	} catch (error) {
		// error showed in groupBy
	}

	const res = sortArrayOfObj(
		Object.keys(CATEGORIES).map((key) => ({
			category: CATEGORIES[key],
			active: notesGroup ? notesGroup[key]?.length || 0 : 0,
			archived: archivedNotesGroup ? archivedNotesGroup[key]?.length || 0 : 0,
		})),
		'category',
	);

	return res;
}
