import {Image, StyleSheet, Text, View} from 'react-native';
import DashedLine from 'react-native-dashed-line';
import {flightIconImg} from '../utils/imageExporter';
import {
  Montserrat,
  MontserratBold,
  MontserratMedium,
  MontserratSemiBold,
} from '../utils/font';
import {textlightColor} from '../utils/color';

const HorizontalRoute = ({}) => {
  return (
    <View style={style.parent}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
        }}>
        <Text style={[style.text]}>TEH</Text>
        <Text style={[style.text, {fontFamily: Montserrat, fontSize: 12}]}>
          India
        </Text>
      </View>
      <DashedLine
        dashColor={textlightColor}
        dashGap={6}
        dashLength={6}
        dashThickness={0.8}
        style={style.dashedLine}
      />
      <Image style={style.flightIcon} source={flightIconImg} />
      <DashedLine
        dashColor={textlightColor}
        dashGap={6}
        dashLength={6}
        dashThickness={0.8}
        style={[style.dashedLine]}
      />
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          marginLeft: 9,
        }}>
        <Text style={[style.text, {}]}>MUN</Text>
        <Text style={[style.text, {fontFamily: Montserrat, fontSize: 12}]}>
          India
        </Text>
      </View>
    </View>
  );
};

export default HorizontalRoute;

const style = StyleSheet.create({
  parent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dashedLine: {
    flex: 1,
    color: textlightColor,
  },
  flightIcon: {
    width: 30,
    height: 30,
    marginHorizontal: 20,
  },
  text: {
    fontSize: 20,
    fontFamily: MontserratSemiBold,
    color: textlightColor,
    textAlign: 'center',
  },
});
