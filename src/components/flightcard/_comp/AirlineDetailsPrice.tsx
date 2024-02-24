import {Image, Text, View} from 'react-native';
import {textDarkColorIcon, textDarkColor} from '../../../utils/color';
import {comfortaBold} from '../../../utils/font';
import {airlineImg, rupeeIcon} from '../../../utils/imageExporter';

const AirlineDetailsPrice = ({}) => {
  return (
    <>
      <Image style={{height: 30, width: 30}} source={airlineImg} />
      <Text
        style={{
          fontFamily: comfortaBold,
          color: textDarkColorIcon,
          marginLeft: 4,
        }}>
        airberlin
      </Text>
      <View style={{flex: 1}} />
      <Image
        style={{
          height: 15,
          width: 15,
        }}
        source={rupeeIcon}
      />
      <Text
        style={{
          fontFamily: comfortaBold,
          marginLeft: 4,
          fontSize: 20,
          textAlign: 'right',
          color: textDarkColor,
        }}>
        99.25
      </Text>
    </>
  );
};

export default AirlineDetailsPrice;
