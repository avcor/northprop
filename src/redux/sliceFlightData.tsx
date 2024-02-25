import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

export const fetchData = createAsyncThunk('flightData', async () => {
  const response = await fetch('https://api.npoint.io/4829d4ab0e96bfab50e7');
  return response.json();
});

const sliceFlightData = createSlice({
  name: 'flightData',
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchData.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.isLoading = false;
      console.log('error ' + action.payload);
    });
  },
});

export const {} = sliceFlightData.actions;
export default sliceFlightData.reducer;
