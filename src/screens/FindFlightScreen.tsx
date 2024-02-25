import {FC, useEffect} from 'react';
import {
  Dimensions,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import ImageAnim from '../components/ImageAnim';
import FindFlightInput from '../components/FindFlightInput';
import {backgroundColor, gradientColorPinkPurple} from '../utils/color';
import SearchButton from '../components/SearchButton';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import {fetchData} from '../redux/slice/sliceFlightData';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const FindFlightScreen: FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    // dispatch(fetchData());
  });

  console.log('flight screen ');
  return (
    <View style={style.parent}>
      <View style={style.imageParent}>
        <ImageAnim />
      </View>

      <View style={style.inputView}>
        <FindFlightInput />
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
    flex: 0.35,
  },
  inputView: {
    flex: 0.65,
  },
});
