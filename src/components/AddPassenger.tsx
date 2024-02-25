import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {flightSeat} from '../utils/imageExporter';
import {textDarkColor, textlightColor} from '../utils/color';
import {FC, useState} from 'react';

type prop = {
  onChange: (it: number) => void;
};

const AddPassenger: FC<prop> = ({onChange}) => {
  const [num, setNum] = useState(1);

  return (
    <View style={style.parent}>
      <View style={style.textIconContainer}>
        <Image style={style.passenger_icon} source={flightSeat} />
        <Text style={{fontSize: 15, color: textlightColor}}>PASSENGERS</Text>
      </View>

      <View style={style.incDecField}>
        <TouchableOpacity
          style={style.touchContainer}
          onPress={() => {
            setNum(state => {
              let v = state === 1 ? 1 : state - 1;
              onChange(v);
              return v;
            });
          }}>
          <Text style={style.decText}>-</Text>
        </TouchableOpacity>
        <Text style={style.currText}>{num}</Text>
        <TouchableOpacity
          style={style.touchContainer}
          onPress={() => {
            setNum(state => {
              const v = state + 1;
              onChange(v);
              return v;
            });
          }}>
          <Text style={style.incText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddPassenger;

const style = StyleSheet.create({
  parent: {
    flex: 1,
    width: '50%',
  },
  passenger_icon: {
    width: 25,
    height: 25,
    marginLeft: 15,
    marginRight: 10,
  },
  textIconContainer: {
    flexDirection: 'row',
    flex: 0.7,
    alignItems: 'center',
  },
  incDecField: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 20,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: '1%',
    overflow: 'hidden',
  },
  decText: {
    fontSize: 46,
    marginTop: -7,
    color: textlightColor,
  },
  currText: {
    fontSize: 22,
    color: textDarkColor,
    flex: 1,
    textAlign: 'center',
  },
  incText: {
    fontSize: 27,
    marginTop: -4,
    color: textlightColor,
  },
  touchContainer: {flex: 1, alignItems: 'center'},
});
