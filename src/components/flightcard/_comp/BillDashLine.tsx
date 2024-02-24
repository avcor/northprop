import {View} from 'react-native';
import DashedLine from 'react-native-dashed-line';
import {backgroundColor, textlightColor} from '../../../utils/color';

const BillDashLine = ({}) => {
  return (
    <>
      <View
        style={{
          height: 15,
          width: 15,
          backgroundColor: backgroundColor,
          borderRadius: 10,
          marginLeft: -7,
        }}
      />
      <DashedLine
        dashColor={textlightColor}
        dashGap={6}
        dashLength={6}
        dashThickness={0.8}
        style={{flex: 1, marginHorizontal: 9}}
      />
      <View
        style={{
          height: 15,
          width: 15,
          backgroundColor: backgroundColor,
          borderRadius: 10,
          marginRight: -7,
          alignSelf: 'flex-end',
        }}
      />
    </>
  );
};

export default BillDashLine;
