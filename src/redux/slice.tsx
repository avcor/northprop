import {createAsyncThunk, createSlice} from '@reduxjs/toolkit/react';

const slice = createSlice({
  name: 'numOfPassenger',
  initialState: 1,
  reducers: {
    increment: state => state + 1,
    decrement: state => (state === 1 ? 1 : state - 1),
  },
});

export const {increment} = slice.actions;
export default slice.reducer;
