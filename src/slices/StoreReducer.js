import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from './weatherDataSlice.js';

export default configureStore({
  reducer: {
    weather: weatherReducer,
  },
});
