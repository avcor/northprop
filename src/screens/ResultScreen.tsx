import {Button, FlatList, StyleSheet, View} from 'react-native';
import {backgroundColor} from '../utils/color';
import HeaderWithBackBtn from '../components/HeaderWithBackBtn';
import HorizontalRoute from '../components/HorizontalRoute';
import FlightDetailCard from '../components/flightcard/FlightCard';
import useGetSelectedFlight from '../customhooks/useGetSelectedFlight';
import GradientButton from '../components/GradientButton';
import {filterImg, searchImg, sortImg} from '../utils/imageExporter';
import {useRef, useState} from 'react';
import Modal from 'react-native-modal/dist/modal';
import ChipLayout from '../components/ChipLayout';

const ResultScreen = ({}) => {
  const {
    filteredList,
    setFilterList,
    originalRefList,
    flightNameSet,
    setSelectedFlightName,
  } = useGetSelectedFlight();
  const sortAscendingRef = useRef(true);
  const [isModalVisible, setModalVisible] = useState(false);

  const SortFunc = () => {
    if (sortAscendingRef.current === true) {
      // ascending sort has been done, now change to descending
      sortAscendingRef.current = false;
      let newList = originalRefList.current.sort((a, b) => {
        return a.fare - b.fare;
      });
      setFilterList({loading: false, data: newList});
    } else {
      // descending sort has been done, now change to ascending
      sortAscendingRef.current = true;
      let newList = originalRefList.current.sort((a, b) => {
        return b.fare - a.fare;
      });
      setFilterList({loading: false, data: newList});
    }
  };

  return (
    <View style={style.parent}>
      <View style={style.headerContainer}>
        <HeaderWithBackBtn />
      </View>

      <View style={style.routeContainer}>
        <HorizontalRoute />
      </View>

      <FlatList
        ItemSeparatorComponent={() => <View style={style.itemSeparator} />}
        style={style.flatListContainer}
        data={filteredList.data}
        renderItem={({item}) => {
          return <FlightDetailCard item={item} />;
        }}
      />

      <View
        style={{
          flex: 0.15,
          flexDirection: 'row',
          width: '50%',
        }}>
        <View style={{flex: 1, paddingVertical: 10}}>
          <GradientButton icon={sortImg} onPress={SortFunc} />
        </View>
        <View style={{flex: 0.5}} />
        <View style={{flex: 1, paddingVertical: 10}}>
          <GradientButton
            icon={filterImg}
            onPress={() => setModalVisible(true)}
          />
        </View>
      </View>
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => {
          setModalVisible(false);
        }}>
        <ChipLayout
          list={[...flightNameSet.current]}
          setSelected={setSelectedFlightName}
          closeFunc={() => setModalVisible(false)}
        />
      </Modal>
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
  flatListContainer: {
    flex: 0.8,
    marginTop: 20,
  },
  itemSeparator: {
    height: 10,
  },
});

export default ResultScreen;
