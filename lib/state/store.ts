import { configureStore } from '@reduxjs/toolkit';

import sampleSlice from './slices/sampleSlice';
export const store = configureStore({
  reducer: { sampleSlice },
});
export type RootState = ReturnType<typeof store.getState>