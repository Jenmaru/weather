import { createSlice } from '@reduxjs/toolkit';

const initialState = { weather: [''], main: '', wind: '' };

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
