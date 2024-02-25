import {configureStore} from '@reduxjs/toolkit';
import slice from '../slice/slicePassengerDetails';
import sliceFlightData from '../slice/sliceFlightData';
import slicePassengerDetails from '../slice/slicePassengerDetails';

const store = configureStore({
  reducer: {
    passengerForm: slicePassengerDetails,
    flighData: sliceFlightData,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
