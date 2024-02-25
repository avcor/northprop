import {configureStore} from '@reduxjs/toolkit';
import slice from '../slice/slicePassengerDetails';
import sliceFlightData from '../slice/sliceFlightData';

const store = configureStore({
  reducer: {
    numOfPassenger: slice,
    flighData: sliceFlightData,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
