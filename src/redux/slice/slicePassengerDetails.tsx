import {createAsyncThunk, createSlice} from '@reduxjs/toolkit/react';
import {passengerState} from '../../reducer/passengerFormReducer';

export const defaultState: passengerState = {
  from: '',
  to: '',
  numOfPassenger: 1,
};

const slice = createSlice({
  name: 'passengerForm',
  initialState: defaultState,
  reducers: {
    setStorePassengerForm: (state, actions) => {
      return {...actions.payload};
    },
  },
});

export const {setStorePassengerForm} = slice.actions;
export default slice.reducer;
