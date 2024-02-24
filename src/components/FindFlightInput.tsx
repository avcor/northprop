import {Image, StyleSheet, Text, View} from 'react-native';
import {iconColor, textDarkColor, textlightColor} from '../utils/color';
import {Montserrat, MontserratBold, MontserratSemiBold} from '../utils/font';
import {airplaneArrivalImg, airplaneDepartureImg} from '../utils/imageExporter';
import AddPassenger from './AddPassenger';
import DashedLine from 'react-native-dashed-line';

const FindFlightInput = ({}) => {
  return (
    <View style={style.parent}>
      <Text style={style.headText}>Book Your Flight</Text>
      <Text style={style.subHeadText}>Where would you want to go?</Text>

      <View style={[style.textInputContainer]}>
        <View style={{marginTop: '2.5%'}}>
          <Image style={style.flight_icon_dep} source={airplaneDepartureImg} />
          <DashedLine
            axis="vertical"
            dashGap={5}
            dashLength={6}
            dashThickness={1.6}
            dashColor={iconColor}
            style={{
              flex: 1,
              marginLeft: 28,
              marginTop: 6,
              marginBottom: 10,
              overflow: 'hidden',
            }}
          />
        </View>
        <View style={style.textInputFrom}>
          <Text style={style.textFromTo}>FROM</Text>
          <Text style={style.textDestination}>Tehran</Text>
        </View>
      </View>

      <View style={[style.textInputContainer]}>
        <View style={{marginBottom: '4%'}}>
          <DashedLine
            axis="vertical"
            dashGap={5}
            dashLength={6}
            dashThickness={1.6}
            dashColor={iconColor}
            style={{
              flex: 1,
              marginLeft: 28,
              marginTop: 7,
              marginBottom: 6,
              overflow: 'hidden',
            }}
          />
          <Image style={style.flight_icon_arr} source={airplaneArrivalImg} />
        </View>
        <View style={style.textInputTo}>
          <Text style={style.textFromTo}>To</Text>
          <Text style={style.textDestination}>Tehran</Text>
        </View>
      </View>

      <View style={{flex: 1}}>
        <AddPassenger />
      </View>
    </View>
  );
};

export default FindFlightInput;

const style = StyleSheet.create({
  parent: {
    flex: 1,
    borderRadius: 2,
  },
  headText: {
    color: textDarkColor,
    fontSize: 23,
    fontFamily: MontserratBold,
  },
  subHeadText: {
    fontFamily: Montserrat,
    color: textlightColor,
    marginTop: 3,
    marginBottom: 10,
  },
  textInputContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    marginVertical: 10,
  },
  textInputFrom: {
    flexDirection: 'column',
    marginTop: '5%',
  },
  textInputTo: {
    alignSelf: 'flex-end',
    marginBottom: '5%',
  },
  flight_icon_dep: {
    width: 30,
    height: 30,
    marginLeft: 15,
    marginRight: 20,
    marginTop: '5%',
  },
  flight_icon_arr: {
    width: 30,
    height: 30,
    marginLeft: 15,
    marginRight: 20,
    alignSelf: 'flex-end',
    marginBottom: '5%',
  },
  textFromTo: {
    fontFamily: MontserratSemiBold,
    color: textlightColor,
    fontSize: 15,
  },
  textDestination: {
    fontSize: 19,
    color: textDarkColor,
  },
});
