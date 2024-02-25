import {Image, StyleSheet, Text, View} from 'react-native';
import DashedLine from 'react-native-dashed-line';
import {flightIconImg} from '../utils/imageExporter';
import {Montserrat, MontserratSemiBold} from '../utils/font';
import {textlightColor} from '../utils/color';
import {useAppSelector} from '../redux/hooks';

const HorizontalRoute = ({}) => {
  const passengerForm = useAppSelector(state => state.passengerForm);
  return (
    <View style={style.parent}>
      <View style={style.textContainer}>
        <Text style={style.text}>{passengerForm.from}</Text>
        <Text style={(style.text, style.secondText)}>India</Text>
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

      <View style={[style.textContainer, style.marginL9]}>
        <Text style={style.text}>{passengerForm.to}</Text>
        <Text style={[style.text, style.secondText]}>India</Text>
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
  secondText: {fontFamily: Montserrat, fontSize: 12},
  textContainer: {
    // flex: 1,
    alignItems: 'center',
    flexGrow: 1,
  },
  marginL9: {
    marginLeft: 9,
  },
});
