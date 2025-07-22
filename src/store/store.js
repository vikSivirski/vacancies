import { configureStore } from '@reduxjs/toolkit';

import hhApi from '../services/hhApi';

import counterReducer from './slices/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [hhApi.reducerPath]: hhApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(hhApi.middleware),
});
