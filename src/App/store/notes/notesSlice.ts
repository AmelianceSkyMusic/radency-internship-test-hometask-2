import type { Category } from '~store/types/Category';
import type { Note } from '~store/types/Note';

import { archivedNotes } from './initData/archivedNotes';
import { notes } from './initData/notes';

import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { sortArrayOfObj } from 'ameliance-scripts';
import { getCurrentDateInMs } from 'ameliance-scripts/scripts/getCurrentDateInMs';

interface NotesSlice {
	notes: Note[];
	archivedNotes: Note[];
}

const initNotesSlice: NotesSlice = {
	notes: sortArrayOfObj(notes, 'id'),
	archivedNotes: sortArrayOfObj(archivedNotes, 'id'),
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
			state.notes = [...newNotesList];
			state.archivedNotes = [...sortArrayOfObj(newArchivedNotesList, 'id')];
		},
		removeNoteFromNotes(state, action: PayloadAction<number>) {
			const noteId = action.payload;
			const newNotesList = state.notes.filter((note) => note.id !== noteId);
			state.notes = [...sortArrayOfObj(newNotesList, 'id')];
		},
		moveAllNotesToArchive(state) {
			state.archivedNotes = sortArrayOfObj([...state.archivedNotes, ...state.notes], 'id');
			state.notes = [];
		},
		removeAllNotes(state) {
			state.notes = [];
		},

		moveNoteFromArchive(state, action: PayloadAction<number>) {
			const noteId = action.payload;
			const newNotesList = [...state.notes];
			const newArchivedNotesList = state.archivedNotes.filter((note) => {
				if (note.id !== noteId) return true;
				newNotesList.push(note);
			});
			state.notes = [...sortArrayOfObj(newNotesList, 'id')];
			state.archivedNotes = [...newArchivedNotesList];
		},
		removeNoteFromArchive(state, action: PayloadAction<number>) {
			const noteId = action.payload;
			const newArchivedNotesList = state.archivedNotes.filter((note) => note.id !== noteId);
			state.archivedNotes = [...sortArrayOfObj(newArchivedNotesList, 'id')];
		},
		moveAllNotesFromArchive(state) {
			state.notes = sortArrayOfObj([...state.archivedNotes, ...state.notes], 'id');
			state.archivedNotes = [];
		},
		removeAllArchive(state) {
			state.archivedNotes = [];
		},

		addNote(state, action: PayloadAction<{ name: string; category: Category; content: string }>) {
			const { name, category, content } = action.payload;
			const currentDateInMs = getCurrentDateInMs();
			const id = currentDateInMs;
			const created = currentDateInMs;
			const newNote: Note = { id, name, created, category, content };
			const newNotes = [...state.notes, newNote];
			state.notes = newNotes;
		},

		editNote(
			state,
			action: PayloadAction<{ id: number; name: string; category: Category; content: string }>,
		) {
			const { id, name, category, content } = action.payload;

			let currentNote = {} as Note;
			const filteredNotesList = state.notes.filter((note) => {
				if (note.id !== id) return true;
				currentNote = { ...note };
			});
			const newNotes = sortArrayOfObj(
				[...filteredNotesList, { ...currentNote, name, category, content }],
				'id',
			);
			state.notes = newNotes;
		},
	},
});
