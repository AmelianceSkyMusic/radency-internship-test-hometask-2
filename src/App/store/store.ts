import { notesSlice } from './notes/notesSlice';

import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
	reducer: {
		notesReducer: notesSlice.reducer,
	},
});
