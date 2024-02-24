import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {backArrowImg} from '../../utils/imageExporter';
import {
  backgroundColor,
  textDarkColor,
  textlightColor,
} from '../../utils/color';
import {Montserrat, MontserratBold, MontserratMedium} from '../../utils/font';
import HeaderWithBackBtn from '../../components/HeaderWithBackBtn';
import HorizontalRoute from '../../components/HorizontalRoute';
import FlightDetailCard from '../../components/flightcard/FlightCard';

const ResultScreen = ({}) => {
  return (
    <View style={style.parent}>
      <View style={style.headerContainer}>
        <HeaderWithBackBtn />
      </View>

      <View style={style.routeContainer}>
        <HorizontalRoute />
      </View>

      <FlatList
        ItemSeparatorComponent={() => <View style={{height: 10}} />}
        style={{flex: 1, marginTop: 20}}
        data={[{title: 'Title 1'}, {title: 'Title 2'}]}
        renderItem={({item}) => <FlightDetailCard />}
      />
    </View>
  );
};

const style = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: backgroundColor,
    paddingHorizontal: '3%',
    paddingTop: '4%',
  },
  headerContainer: {
    flex: 0.05,
  },
  routeContainer: {
    flex: 0.1,
  },
});

export default ResultScreen;
