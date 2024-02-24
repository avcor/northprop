import {View, Dimensions, Image, StyleSheet} from 'react-native';
import {flightIconImg} from '../../utils/imageExporter';
import AirlineDetailsPrice from './_comp/AirlineDetailsPrice';
import BillDashLine from './_comp/BillDashLine';
import VerticalDataText from './_comp/VerticalDataText';

const FlightDetailCard = ({}) => {
  return (
    <View style={styles.parentcontainer}>
      <View style={styles.dataContainer}>
        <VerticalDataText />
        <Image style={styles.flightIcon} source={flightIconImg} />
        <VerticalDataText />
      </View>

      <View style={styles.dashContainer}>
        <BillDashLine />
      </View>

      <View style={styles.airDetailContainer}>
        <AirlineDetailsPrice />
      </View>
    </View>
  );
};

export default FlightDetailCard;

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
