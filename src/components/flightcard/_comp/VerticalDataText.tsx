import {View, Text, StyleSheet} from 'react-native';
import {textlightColor, textDarkColor} from '../../../utils/color';
import {MontserratMedium} from '../../../utils/font';

const VerticalDataText = ({}) => {
  return (
    <View>
      <Text style={styles.textDep}>DEPARTURE</Text>
      <Text style={styles.textDark}>21 : 30</Text>

      <Text style={[styles.textDep, styles.marginT10]}>FLIGHT NO.</Text>
      <Text style={styles.textDark}>KW 78</Text>
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
