import LinearGradient from 'react-native-linear-gradient';
import {gradientColorPinkPurple} from '../utils/color';
import {StyleSheet, Text} from 'react-native';
import {MontserratMedium} from '../utils/font';

const SearchButton = ({}) => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={gradientColorPinkPurple}
      style={styles.gradientContainer}>
      <Text style={styles.text}>Search Flights</Text>
    </LinearGradient>
  );
};

export default SearchButton;

const styles = StyleSheet.create({
  gradientContainer: {
    alignItems: 'center',
    flex: 1,
    borderRadius: 20,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontFamily: MontserratMedium,
    fontSize: 20,
  },
});
