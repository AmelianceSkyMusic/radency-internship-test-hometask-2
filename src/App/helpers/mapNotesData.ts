import { CATEGORIES } from '~constants/CATEGORIES';
import type { Category } from '~store/types/Category';
import type { Note } from '~store/types/Note';

import { getFormattedDate } from './getFormattedDate';
import { parseDateFromString } from './parseDateFromString';

export function mapNotesData(notes: Note[]) {
	return notes.map((note) => ({
		...note,
		created: getFormattedDate(note.created),
		category: CATEGORIES[note.category] as Category,
		dates: parseDateFromString(note.content),
	}));
}
