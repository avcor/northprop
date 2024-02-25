import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {iconColor, textDarkColor, textlightColor} from '../utils/color';
import {Montserrat, MontserratBold, MontserratSemiBold} from '../utils/font';
import {airplaneArrivalImg, airplaneDepartureImg} from '../utils/imageExporter';
import AddPassenger from './AddPassenger';
import DashedLine from 'react-native-dashed-line';
import DepartureInput from './DepartureInput';
import ArrivalInput from './ArrivalInput';
import SearchButton from './SearchButton';
import {useRef} from 'react';

const FindFlightInput = ({}) => {
  const fromRef = useRef({});

  return (
    <View style={style.parent}>
      <Text style={style.headText}>Book Your Flight</Text>
      <Text style={style.subHeadText}>Where would you want to go?</Text>

      <DepartureInput />

      <ArrivalInput />

      <View style={style.addPassengerContainer}>
        <AddPassenger />
      </View>

      <View
        style={{
          flex: 1.5,
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <TouchableOpacity
          style={style.searchButton}
          onPress={() => {
            // navigation.navigate('ResultScreen');
          }}>
          <SearchButton />
        </TouchableOpacity>
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
});
