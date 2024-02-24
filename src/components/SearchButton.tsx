import LinearGradient from 'react-native-linear-gradient';
import {gradientColorPinkPurple} from '../utils/color';
import {Text} from 'react-native';
import {MontserratMedium} from '../utils/font';

const SearchButton = ({}) => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={gradientColorPinkPurple}
      style={{
        alignItems: 'center',
        flex: 1,
        borderRadius: 20,
        justifyContent: 'center',
      }}>
      <Text
        style={{
          color: 'white',
          fontFamily: MontserratMedium,
          fontSize: 20,
        }}>
        Search Flights
      </Text>
    </LinearGradient>
  );
};

export default SearchButton;
