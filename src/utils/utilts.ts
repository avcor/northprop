import { flightDataModel } from "../type/FlightType";

export const convertTo24HourFormat = (timestamp: string): string => {
  try {
    const date = new Date(timestamp);
    let hours = date.getHours().toString();
    const minutes = date.getMinutes();
    if(hours.length === 1){
        hours = '0' + hours;
    }
    return `${hours}:${minutes}`;
  } catch (error) {
    console.log('error time util ', error);
    return '---';
  }
};

export const getAirlineNumber = (it:flightDataModel) => {
  try {
    return `${it.displayData.airlines[0].airlineCode} ${it.displayData.airlines[0].flightNumber}`
  } catch (error) {
    return '---'
  }
}
