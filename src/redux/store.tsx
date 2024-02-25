import {configureStore} from '@reduxjs/toolkit';
import slice from './slice';
import sliceFlightData from './sliceFlightData';

const store = configureStore({
  reducer: {
    numOfPassenger: slice,
    flighData: sliceFlightData,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
