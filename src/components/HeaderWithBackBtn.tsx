import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {backgroundColor, textDarkColor} from '../utils/color';
import {MontserratBold} from '../utils/font';
import {backArrowImg} from '../utils/imageExporter';
import {useNavigation} from '@react-navigation/native';

const HeaderWithBackBtn = ({}) => {
  const navigation = useNavigation();
  return (
    <View style={style.headerContainer}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <Image style={style.backArrow} source={backArrowImg} />
      </TouchableOpacity>

      <Text style={style.headingText}>Result</Text>
    </View>
  );
};

export default HeaderWithBackBtn;

const style = StyleSheet.create({
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  backArrow: {
    height: 30,
    width: 30,
  },
  headingText: {
    flex: 1,
    textAlign: 'center',
    fontFamily: MontserratBold,
    fontSize: 19,
    color: textDarkColor,
    marginRight: 35,
  },
});
