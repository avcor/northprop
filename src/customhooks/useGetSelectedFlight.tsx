import {useEffect, useRef, useState} from 'react';
import {useAppSelector} from '../redux/hooks';
import {flightDataModel} from '../type/FlightType';

const useGetSelectedFlight = () => {
  const originalFlightList = useAppSelector(state => state.flighData);
  const passengerForm = useAppSelector(state => state.passengerForm);

  const originalRefList = useRef<flightDataModel[]>([]);
  const flightNameSet = useRef(new Set<string>());

  const [selectedFlightName, setSelectedFlightName] = useState<string | null>(
    null,
  );
  const [filteredList, setFilterList] = useState<{
    data: flightDataModel[];
    loading: boolean;
  }>({
    data: [],
    loading: true,
  });

  useEffect(() => {
    if (selectedFlightName === null) {
      setFilterList({
        data: originalFlightList.data,
        loading: false,
      });
      return;
    } else {
      let newList = originalRefList.current.filter(it => {
        return it.displayData.airlines[0].airlineName === selectedFlightName;
      });
      setFilterList({
        data: newList,
        loading: false,
      });
    }
  }, [selectedFlightName]);

  useEffect(() => {
    let fromLoc = passengerForm.from.toLowerCase();
    let toLoc = passengerForm.to.toLowerCase();

    const f = originalFlightList.data.filter(it => {
      flightNameSet.current.add(it.displayData.airlines[0].airlineName);
      return (
        it.displayData.source.airport.cityName.toLowerCase() === fromLoc &&
        it.displayData.destination.airport.cityName.toLowerCase() === toLoc
      );
    });
    originalRefList.current = f;
    setFilterList({
      data: f,
      loading: false,
    });
  }, [originalFlightList]);

  return {
    filteredList,
    setFilterList,
    originalRefList,
    flightNameSet,
    setSelectedFlightName,
  };
};

export default useGetSelectedFlight;
