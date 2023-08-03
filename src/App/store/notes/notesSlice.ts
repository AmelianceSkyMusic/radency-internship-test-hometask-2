import type { Note } from '~store/types/Note';

import { archivedNotes } from './initData/archivedNotes';
import { notes } from './initData/notes';

import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

interface NotesSlice {
	notes: Note[];
	archivedNotes: Note[];
}

const initNotesSlice: NotesSlice = {
	notes,
	archivedNotes,
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
