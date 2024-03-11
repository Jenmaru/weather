import { createSlice } from '@reduxjs/toolkit';

const initialState = { weather: [{ description: '', main: 'default' }], main: { temp: '', pressure: '' }, wind: { speed: '' } };

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    newData: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
  },
});

const { actions } = weatherSlice;
export { actions };
export default weatherSlice.reducer;
