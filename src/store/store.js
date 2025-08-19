import { configureStore } from '@reduxjs/toolkit';

import hhApi from '../services/hhApi';

import vacancyFilterReducer from './slices/vacanciesFilterSlice';
import resumeReducer from './slices/resumeSlice';

export const store = configureStore({
	reducer: {
		resume: resumeReducer,
		vacancyFilter: vacancyFilterReducer,
		[hhApi.reducerPath]: hhApi.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(hhApi.middleware),
});
