import {View, Dimensions, Image} from 'react-native';
import {flightIconImg} from '../../utils/imageExporter';
import AirlineDetailsPrice from './_comp/AirlineDetailsPrice';
import BillDashLine from './_comp/BillDashLine';
import VerticalDataText from './_comp/VerticalDataText';

const FlightDetailCard = ({}) => {
  return (
    <View
      style={{
        height: Dimensions.get('window').height / 3.5,
        backgroundColor: 'white',
        borderRadius: 20,
        paddingTop: 20,
        paddingBottom: 10,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          flex: 0.7,
          paddingHorizontal: 20,
        }}>
        <VerticalDataText />
        <Image style={{height: 30, width: 30}} source={flightIconImg} />
        <VerticalDataText />
      </View>

      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <BillDashLine />
      </View>

      <View
        style={{
          flex: 0.3,
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 15,
        }}>
        <AirlineDetailsPrice />
      </View>
    </View>
  );
};

export default FlightDetailCard;
