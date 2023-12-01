import { configureStore } from '@reduxjs/toolkit';
import emotionReducer from './slices/emotionSlice';

export const store = configureStore({
  reducer: {
    emotion: emotionReducer,
  },
});

export default store;
