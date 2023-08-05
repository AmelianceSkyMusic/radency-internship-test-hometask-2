import { CATEGORIES } from '~constants/CATEGORIES';
import { getFormattedDate } from '~helpers/getFormattedDate';
import { parseDateFromString } from '~helpers/parseDateFromString';
import type { Category } from '~store/types/Category';
import type { Note } from '~store/types/Note';
import type { Summary } from '~store/types/Summary';

import { getCategoriesFromData } from './helpers/getCategoriesFromData';
import { prepareInitData } from './helpers/prepareInitData';
import { archivedNotes } from './initData/archivedNotes';
import { notes } from './initData/notes';

import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { getCurrentDateInMs } from 'ameliance-scripts/scripts/getCurrentDateInMs';

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
		moveNoteToArchive(state, action: PayloadAction<number>) {
			const noteId = action.payload;
			const newArchivedNotesList = [...state.archivedNotes];
			const newNotesList = state.notes.filter((note) => {
				if (note.id !== noteId) return true;
				newArchivedNotesList.push(note);
			});
			state.notes = [...newNotesList.sort()];
			state.archivedNotes = [...newArchivedNotesList.sort()];
			state.summary = getCategoriesFromData(newNotesList, newArchivedNotesList);
		},
		removeNoteFromNotes(state, action: PayloadAction<number>) {
			const noteId = action.payload;
			const newNotesList = state.notes.filter((note) => note.id !== noteId);
			state.notes = [...newNotesList.sort()];
			state.summary = getCategoriesFromData(newNotesList, state.archivedNotes);
		},
		moveAllNotesToArchive(state) {
			state.archivedNotes = [...state.archivedNotes, ...state.notes].sort();
			state.notes = [];
			state.summary = getCategoriesFromData([], state.archivedNotes);
		},
		removeAllNotes(state) {
			state.notes = [];
			state.summary = getCategoriesFromData([], state.archivedNotes);
		},

		moveNoteFromArchive(state, action: PayloadAction<number>) {
			const noteId = action.payload;
			const newNotesList = [...state.notes];
			const newArchivedNotesList = state.archivedNotes.filter((note) => {
				if (note.id !== noteId) return true;
				newNotesList.push(note);
			});
			state.notes = [...newNotesList.sort()];
			state.archivedNotes = [...newArchivedNotesList.sort()];
			state.summary = getCategoriesFromData(newNotesList, newArchivedNotesList);
		},
		removeNoteFromArchive(state, action: PayloadAction<number>) {
			const noteId = action.payload;
			const newArchivedNotesList = state.archivedNotes.filter((note) => note.id !== noteId);
			state.archivedNotes = [...newArchivedNotesList.sort()];
			state.summary = getCategoriesFromData(state.notes, newArchivedNotesList);
		},
		moveAllNotesFromArchive(state) {
			state.notes = [...state.archivedNotes, ...state.notes].sort();
			state.archivedNotes = [];
			state.summary = getCategoriesFromData(state.notes, []);
		},
		removeAllArchive(state) {
			state.archivedNotes = [];
			state.summary = getCategoriesFromData(state.notes, []);
		},

		addNote(state, action: PayloadAction<{ name: string; category: string; content: string }>) {
			const { name, category: categoryKey, content } = action.payload;
			const currentDateInMs = getCurrentDateInMs();
			const id = currentDateInMs;
			const created = getFormattedDate(currentDateInMs) || '';
			const category = CATEGORIES[categoryKey] as Category;
			const dates = parseDateFromString(content);
			const newNote: Note = { id, name, created, category, content, dates };
			const newNotes = [...state.notes, newNote];
			state.notes = newNotes;
			state.summary = getCategoriesFromData(newNotes, state.archivedNotes);
		},

		editNote(
			state,
			action: PayloadAction<{ id: number; name: string; category: string; content: string }>,
		) {
			const { id, name, category: categoryKey, content } = action.payload;
			const category = CATEGORIES[categoryKey] as Category;

			let currentNote = {} as Note;
			const filteredNotesList = state.notes.filter((note) => {
				if (note.id !== id) return true;
				currentNote = { ...note };
			});
			const newNotes = [...filteredNotesList, { ...currentNote, name, category, content }];
			state.notes = newNotes;
			state.summary = getCategoriesFromData(newNotes, state.archivedNotes);
		},
	},
});
