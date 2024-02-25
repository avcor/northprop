import {FC, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import ImageAnim from '../components/ImageAnim';
import FindFlightInput from '../components/FindFlightInput';
import {backgroundColor} from '../utils/color';
import {useAppDispatch} from '../redux/hooks';
import {fetchData} from '../redux/slice/sliceFlightData';

const FindFlightScreen: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

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
