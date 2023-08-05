import { CATEGORIES } from '~constants/CATEGORIES';
import { groupBy } from '~helpers/groupBy';
import type { Note } from '~store/types/Note';

export function getCategoriesFromData(notes: Note[], archivedNotes: Note[]) {
	const notesGroup = Object.fromEntries(groupBy(notes, 'category'));
	const archivedNotesGroup = Object.fromEntries(groupBy(archivedNotes, 'category'));

	const res = Object.keys(CATEGORIES).map((key) => ({
		category: CATEGORIES[key],
		active: notesGroup[CATEGORIES[key]]?.length || 0,
		archived: archivedNotesGroup[CATEGORIES[key]]?.length || 0,
	}));

	return res;
}
