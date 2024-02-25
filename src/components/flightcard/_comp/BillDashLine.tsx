import {StyleSheet, View} from 'react-native';
import DashedLine from 'react-native-dashed-line';
import {backgroundColor, textlightColor} from '../../../utils/color';

const BillDashLine = ({}) => {
  return (
    <>
      <View style={styles.leftCut} />
      <DashedLine
        dashColor={textlightColor}
        dashGap={6}
        dashLength={6}
        dashThickness={0.8}
        style={styles.dashLine}
      />
      <View style={styles.rightCut} />
    </>
  );
};

export default BillDashLine;

const styles = StyleSheet.create({
  leftCut: {
    height: 15,
    width: 15,
    backgroundColor: backgroundColor,
    borderRadius: 10,
    marginLeft: -7,
  },
  dashLine: {flex: 1, marginHorizontal: 9},
  rightCut: {
    height: 15,
    width: 15,
    backgroundColor: backgroundColor,
    borderRadius: 10,
    marginRight: -7,
    alignSelf: 'flex-end',
  },
});
