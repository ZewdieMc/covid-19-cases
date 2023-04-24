import { configureStore } from '@reduxjs/toolkit';
import covidReducer from './covid/covidSlice';

const store = configureStore({
  reducer: {
    cases: covidReducer,
  },
});

export default store;
