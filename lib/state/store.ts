import { configureStore } from '@reduxjs/toolkit';
import userSliceReducer from './slices/userSlice';
import courseSliceReducer from './slices/courseSlice';
export const store = configureStore({
  reducer: {   courseState:courseSliceReducer, user:userSliceReducer   },
});
export type RootState = ReturnType<typeof store.getState>