import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {flightApiResponse, flightDataModel} from '../../type/FlightType';

const initialState = {
  isLoading: false,
  data: [] as flightDataModel[],
  isError: false,
};

const sliceFlightData = createSlice({
  name: 'flightData',
  initialState: initialState,
  reducers: {},

  extraReducers(builder) {
    builder.addCase(fetchData.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = (action.payload as flightApiResponse).data.result;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.isLoading = false;
      console.log('error ' + action.payload);
    });
  },
});

export const {} = sliceFlightData.actions;
export default sliceFlightData.reducer;

export const fetchData = createAsyncThunk('flightData', async () => {
  const response = await fetch('https://api.npoint.io/4829d4ab0e96bfab50e7');
  return response.json();
});
