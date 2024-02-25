import {Alert, StyleSheet, Text, View} from 'react-native';
import {textDarkColor, textlightColor} from '../utils/color';
import {Montserrat, MontserratBold} from '../utils/font';
import AddPassenger from './AddPassenger';
import DepartureInput from './DepartureInput';
import ArrivalInput from './ArrivalInput';
import SearchButton from './GradientButton';
import {useRef} from 'react';
import {passengerState} from '../reducer/passengerFormReducer';
import {
  defaultState,
  setStorePassengerForm,
} from '../redux/slice/slicePassengerDetails';
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import {searchImg} from '../utils/imageExporter';

const FindFlightInput = ({}) => {
  const formRef = useRef<passengerState>(defaultState);
  const dispatchStore = useAppDispatch();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const departureLoc = (it: string) => {
    formRef.current = {
      ...formRef.current,
      from: it,
    };
  };

  const arrivalLoc = (it: string) => {
    formRef.current = {
      ...formRef.current,
      to: it,
    };
  };
  const passengerNum = (it: number) => {
    formRef.current = {
      ...formRef.current,
      numOfPassenger: it,
    };
  };

  return (
    <View style={style.parent}>
      <Text style={style.headText}>Book Your Flight</Text>
      <Text style={style.subHeadText}>Where would you want to go?</Text>

      <DepartureInput onChange={departureLoc} />

      <ArrivalInput onChange={arrivalLoc} />

      <View style={style.addPassengerContainer}>
        <AddPassenger onChange={passengerNum} />
      </View>

      <View style={style.searchButtonContainer}>
        <View style={style.searchButton}>
          <SearchButton
            text="Search Flights"
            icon={searchImg}
            onPress={() => {
              if (formRef.current.from.length <= 0)
                Alert.alert('Please add Departure Location');
              else if (formRef.current.to.length <= 0)
                Alert.alert('Please add arrival Location');
              else {
                dispatchStore(setStorePassengerForm(formRef.current));
                navigation.navigate('ResultScreen');
              }
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default FindFlightInput;

const style = StyleSheet.create({
  parent: {
    flex: 1,
    borderRadius: 2,
  },
  headText: {
    color: textDarkColor,
    fontSize: 23,
    fontFamily: MontserratBold,
  },
  subHeadText: {
    fontFamily: Montserrat,
    color: textlightColor,
    marginTop: 3,
    marginBottom: 10,
  },
  addPassengerContainer: {
    flex: 1.1,
  },
  searchButton: {
    flex: 0.45,
  },
  searchButtonContainer: {
    flex: 1.5,
    justifyContent: 'center',
    alignContent: 'center',
  },
});
