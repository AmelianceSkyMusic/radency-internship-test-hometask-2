import { CATEGORIES } from '~constants/CATEGORIES';
import { getFormattedDate } from '~helpers/getFormattedDate';
import { parseDateFromString } from '~helpers/parseDateFromString';
import type { Category } from '~store/types/Category';
import type { Note } from '~store/types/Note';

import type { InitNote } from '../initData/types/InitNote';

import { sortArrayOfObj } from 'ameliance-scripts/scripts/sortArrayOfObj';

export function prepareInitData(notes: InitNote[]): Note[] {
	const sortedNotes = sortArrayOfObj(notes, 'created');
	return sortedNotes.map((note) => {
		return {
			id: note.id,
			name: note.name,
			created: getFormattedDate(note.created) || '',
			category: CATEGORIES[note.category] as Category,
			content: note.content,
			dates: parseDateFromString(note.content) || ' ',
		};
	});
}
