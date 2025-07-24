import { configureStore } from '@reduxjs/toolkit';

import hhApi from '../services/hhApi';

import vacancyFilterReducer from './slices/vacanciesFilterSlice';

export const store = configureStore({
	reducer: {
		vacancyFilter: vacancyFilterReducer,
		[hhApi.reducerPath]: hhApi.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(hhApi.middleware),
});
