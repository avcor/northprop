import {View, Image, Text, StyleSheet} from 'react-native';
import DashedLine from 'react-native-dashed-line';
import {iconColor, textDarkColor, textlightColor} from '../utils/color';
import {airplaneArrivalImg} from '../utils/imageExporter';
import {MontserratSemiBold} from '../utils/font';

const ArrivalInput = ({}) => {
  return (
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
  );
};

export default ArrivalInput;

const style = StyleSheet.create({
  textInputContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    marginVertical: 10,
  },
  textInputTo: {
    alignSelf: 'flex-end',
    marginBottom: '5%',
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
