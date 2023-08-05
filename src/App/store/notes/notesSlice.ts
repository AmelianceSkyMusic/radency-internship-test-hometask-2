import type { Note } from '~store/types/Note';
import type { Summary } from '~store/types/Summary';

import { getCategoriesFromData } from './helpers/getCategoriesFromData';
import { prepareInitData } from './helpers/prepareInitData';
import { archivedNotes } from './initData/archivedNotes';
import { notes } from './initData/notes';

import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

interface NotesSlice {
	notes: Note[];
	archivedNotes: Note[];
	summary: Summary[];
}

const preparedNotes = prepareInitData(notes);
const preparedArchivedNotes = prepareInitData(archivedNotes);
const preparedSummary = getCategoriesFromData(preparedNotes, preparedArchivedNotes);

const initNotesSlice: NotesSlice = {
	notes: preparedNotes,
	archivedNotes: preparedArchivedNotes,
	summary: preparedSummary,
};

export const notesSlice = createSlice({
	name: 'notes',
	initialState: initNotesSlice,
	reducers: {
		setActiveTable(state, action: PayloadAction<NotesSlice['notes']>) {
			state.notes = action.payload;
		},
	},
});
