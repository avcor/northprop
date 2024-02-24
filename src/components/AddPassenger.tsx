import {Image, StyleSheet, Text, View} from 'react-native';
import {flightSeat} from '../utils/imageExporter';
import {iconColor, textDarkColor, textlightColor} from '../utils/color';

const AddPassenger = ({}) => {
  return (
    <View style={style.parent}>
      <View style={{flex: 1, width: '50%'}}>
        <View
          style={{
            flexDirection: 'row',
            flex: 0.7,
            alignItems: 'center',
          }}>
          <Image style={style.passenger_icon} source={flightSeat} />
          <Text style={{fontSize: 15, color: textlightColor}}>PASSENGERS</Text>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            backgroundColor: 'white',
            borderRadius: 20,
            justifyContent: 'space-evenly',
            alignItems: 'center',
            marginTop: '1%',
            overflow: 'hidden',
          }}>
          <Text style={{fontSize: 46, marginTop: -7, color: textlightColor}}>
            -
          </Text>
          <Text style={{fontSize: 22, color: textDarkColor}}>1</Text>
          <Text style={{fontSize: 27, marginTop: -4, color: textlightColor}}>
            +
          </Text>
        </View>
      </View>
    </View>
  );
};

export default AddPassenger;

const style = StyleSheet.create({
  parent: {
    flex: 1,
  },
  passenger_icon: {
    width: 25,
    height: 25,
    marginLeft: 15,
    marginRight: 10,
  },
});
