import { CATEGORIES } from '~constants/CATEGORIES';
import { groupBy } from '~helpers/groupBy';
import type { Note } from '~store/types/Note';

export function getCategoriesFromData(notes: Note[], archivedNotes: Note[]) {
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

	const res = Object.keys(CATEGORIES).map((key) => ({
		category: CATEGORIES[key],
		active: notesGroup?.[CATEGORIES[key]]?.length || 0,
		archived: archivedNotesGroup?.[CATEGORIES[key]]?.length || 0,
	}));

	return res;
}
