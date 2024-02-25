export type passengerState = {
  from: string;
  to: string;
  numOfPassenger: number;
};

export type actionType =
  | {
      type: 'fromChange' | 'toChange';
      payload: string;
    }
  | {
      type: 'numOfPassengerChange';
      payload: number;
    };

export const reducer = (state: passengerState, action: actionType) => {
  switch (action.type) {
    case 'fromChange':
      return {
        ...state,
        from: action.payload,
      };
    case 'toChange':
      return {
        ...state,
        to: action.payload,
      };
    case 'numOfPassengerChange':
      return {
        ...state,
        numOfPassenger: action.payload,
      };
    default:
      return state;
  }
};
