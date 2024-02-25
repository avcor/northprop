import {View, Dimensions, Image, StyleSheet} from 'react-native';
import {flightIconImg} from '../../utils/imageExporter';
import AirlineDetailsPrice from './_comp/AirlineDetailsPrice';
import BillDashLine from './_comp/BillDashLine';
import VerticalDataText from './_comp/VerticalDataText';
import {flightDataModel} from '../../type/FlightType';
import {FC} from 'react';
import {convertTo24HourFormat, getAirlineNumber} from '../../utils/utilts';
import React from 'react';

type props = {
  item: flightDataModel;
};

const FlightDetailCard: FC<props> = ({item}) => {
  return (
    <View style={styles.parentcontainer}>
      <View style={styles.dataContainer}>
        <VerticalDataText
          textView={{
            t1: 'DEPARTURE',
            t2: 'FLIGHT NO.',
          }}
          data={{
            d1: convertTo24HourFormat(item.displayData.source.depTime),
            d2: getAirlineNumber(item),
          }}
        />
        <Image style={styles.flightIcon} source={flightIconImg} />
        <VerticalDataText
          textView={{
            t1: 'ARRIVAL',
            t2: 'CLASS',
          }}
          data={{
            d1: convertTo24HourFormat(item.displayData.destination.arrTime),
            d2: 'Economy',
          }}
        />
      </View>

      <View style={styles.dashContainer}>
        <BillDashLine />
      </View>

      <View style={styles.airDetailContainer}>
        <AirlineDetailsPrice
          flightName={item.displayData.airlines[0].airlineName}
          price={item.fare.toString()}
        />
      </View>
    </View>
  );
};

export default React.memo(FlightDetailCard);

const styles = StyleSheet.create({
  parentcontainer: {
    height: Dimensions.get('window').height / 3.5,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  dataContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 0.7,
    paddingHorizontal: 20,
  },
  flightIcon: {height: 30, width: 30},
  dashContainer: {flexDirection: 'row', alignItems: 'center'},
  airDetailContainer: {
    flex: 0.3,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
});
