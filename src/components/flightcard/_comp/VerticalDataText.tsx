import {View, Text} from 'react-native';
import {textlightColor, textDarkColor} from '../../../utils/color';
import {MontserratMedium} from '../../../utils/font';

const VerticalDataText = ({}) => {
  return (
    <View style={{}}>
      <Text style={{color: textlightColor, fontFamily: MontserratMedium}}>
        DEPARTURE
      </Text>
      <Text style={{color: textDarkColor, fontFamily: MontserratMedium}}>
        21 : 30
      </Text>

      <Text
        style={{
          color: textlightColor,
          fontFamily: MontserratMedium,
          marginTop: 10,
        }}>
        FLIGHT NO.
      </Text>
      <Text style={{color: textDarkColor, fontFamily: MontserratMedium}}>
        KW 78
      </Text>
    </View>
  );
};

export default VerticalDataText;
