import {Image, StyleSheet, Text, View} from 'react-native';
import {textDarkColorIcon, textDarkColor} from '../../../utils/color';
import {comfortaBold} from '../../../utils/font';
import {airlineImg, rupeeIcon} from '../../../utils/imageExporter';
import {FC} from 'react';

type props = {
  flightName: string;
  price: string;
};

const AirlineDetailsPrice: FC<props> = ({flightName, price}) => {
  return (
    <>
      <Image style={{height: 30, width: 30}} source={airlineImg} />
      <Text style={styles.text}>{flightName}</Text>
      <View style={{flex: 1}} />
      <Image style={styles.rupeeImg} source={rupeeIcon} />
      <Text style={styles.textPrice}>{price}</Text>
    </>
  );
};

export default AirlineDetailsPrice;

const styles = StyleSheet.create({
  text: {
    fontFamily: comfortaBold,
    color: textDarkColorIcon,
    marginLeft: 4,
  },
  rupeeImg: {
    height: 15,
    width: 15,
  },
  textPrice: {
    fontFamily: comfortaBold,
    marginLeft: 4,
    fontSize: 20,
    textAlign: 'right',
    color: textDarkColor,
  },
});
