import {View, Text, StyleSheet} from 'react-native';
import {textlightColor, textDarkColor} from '../../../utils/color';
import {MontserratMedium} from '../../../utils/font';
import {FC} from 'react';

type props = {
  data: {
    d1: string;
    d2: string;
  };
  textView: {
    t1: string;
    t2: string;
  };
};

const VerticalDataText: FC<props> = ({data, textView}) => {
  return (
    <View>
      <Text style={styles.textDep}>{textView.t1}</Text>
      <Text style={styles.textDark}>{data.d1}</Text>

      <Text style={[styles.textDep, styles.marginT10]}>{textView.t2}</Text>
      <Text style={styles.textDark}>{data.d2}</Text>
    </View>
  );
};

export default VerticalDataText;

const styles = StyleSheet.create({
  textDep: {color: textlightColor, fontFamily: MontserratMedium},
  textDark: {color: textDarkColor, fontFamily: MontserratMedium},
  marginT10: {
    marginTop: 10,
  },
});
