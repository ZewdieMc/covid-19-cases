import { configureStore } from '@reduxjs/toolkit';
import covidReducer from './covid/covidSlice';

export default (preloadedState) => configureStore({
  reducer: {
    cases: covidReducer,
  },
  preloadedState,
});
