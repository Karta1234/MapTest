// src/store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import { houseApi } from './housesApi';

export const store = configureStore({
  reducer: {
    [houseApi.reducerPath]: houseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(houseApi.middleware),
});

// Типизация
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
