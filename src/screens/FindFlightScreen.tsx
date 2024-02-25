import {FC, useEffect} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import ImageAnim from '../components/ImageAnim';
import FindFlightInput from '../components/FindFlightInput';
import {backgroundColor, gradientColorPinkPurple} from '../utils/color';
import SearchButton from '../components/SearchButton';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import {fetchData} from '../redux/sliceFlightData';

const FindFlightScreen: FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchData());
  });

  return (
    <View style={style.parent}>
      <View style={style.imageParent}>
        <ImageAnim />
      </View>

      <View style={style.inputView}>
        <FindFlightInput />
      </View>

      <View style={{flex: 0.2, justifyContent: 'center'}}>
        <TouchableOpacity
          style={style.searchButton}
          onPress={() => {
            navigation.navigate('ResultScreen');
          }}>
          <SearchButton />
        </TouchableOpacity>
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
    flex: 0.4,
  },
  inputView: {
    flex: 0.55,
  },
  searchButton: {
    flex: 0.4,
  },
});
