import {FC} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {airplaneImg} from '../utils/imageExporter';
import ImageAnim from '../components/ImageAnim';
import FindFlightInput from '../components/FindFlightInput';
import {backgroundColor, gradientColorPinkPurple} from '../utils/color';
import LinearGradient from 'react-native-linear-gradient';
import {
  Montserrat,
  MontserratBold,
  MontserratMedium,
  MontserratSemiBold,
} from '../utils/font';
import SearchButton from '../components/SearchButton';

const FindFlightScreen: FC = () => {
  return (
    <View style={style.parent}>
      <View style={style.imageParent}>
        <ImageAnim />
      </View>
      <View style={style.inputView}>
        <FindFlightInput />
      </View>
      <View style={{flex: 0.2, justifyContent: 'center'}}>
        <View style={{flex: 0.35}}>
          <SearchButton />
        </View>
      </View>
    </View>
  );
};

export default FindFlightScreen;

const style = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: backgroundColor,
    paddingHorizontal: '5%',
  },
  imageParent: {
    flex: 0.3,
  },
  inputView: {
    flex: 0.5,
  },
});
