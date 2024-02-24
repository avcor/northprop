import {Image, StyleSheet, Text, View} from 'react-native';
import {flightSeat} from '../utils/imageExporter';
import {iconColor, textDarkColor, textlightColor} from '../utils/color';

const AddPassenger = ({}) => {
  return (
    <View style={style.parent}>
      <View style={style.textIconContainer}>
        <Image style={style.passenger_icon} source={flightSeat} />
        <Text style={{fontSize: 15, color: textlightColor}}>PASSENGERS</Text>
      </View>

      <View style={style.incDecField}>
        <Text style={style.decText}>-</Text>
        <Text style={style.currText}>1</Text>
        <Text style={style.incText}>+</Text>
      </View>
    </View>
  );
};

export default AddPassenger;

const style = StyleSheet.create({
  parent: {
    flex: 1,
    width: '50%',
  },
  passenger_icon: {
    width: 25,
    height: 25,
    marginLeft: 15,
    marginRight: 10,
  },
  textIconContainer: {
    flexDirection: 'row',
    flex: 0.7,
    alignItems: 'center',
  },
  incDecField: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 20,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: '1%',
    overflow: 'hidden',
  },
  decText: {fontSize: 46, marginTop: -7, color: textlightColor},
  currText: {fontSize: 22, color: textDarkColor},
  incText: {fontSize: 27, marginTop: -4, color: textlightColor},
});
