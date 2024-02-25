import {FC, useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Chip} from 'react-native-paper';
import React from 'react';
import {gradientColorPinkPurple} from '../utils/color';

type props = {
  closeFunc?: any;
  list?: string[];
  setSelected?: any;
};

const ChipLayout: FC<props> = ({
  closeFunc = () => {},
  list,
  setSelected = () => {},
}) => {
  return (
    <View style={styles.Container}>
      <View style={styles.typeContainer}>
        {list?.map(v => {
          return (
            <Chip
              key={v}
              style={styles.selected}
              textStyle={{color: 'white'}}
              onPress={() => {
                setSelected(v);
                closeFunc();
              }}>
              {v}
            </Chip>
          );
        })}
      </View>
      <Button
        style={styles.buttonClear}
        textColor="white"
        onPress={() => {
          setSelected(null);
          closeFunc();
        }}>
        Clear
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  selected: {
    backgroundColor: gradientColorPinkPurple[0],
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  unSelected: {
    color: 'black',
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'column',
    paddingVertical: 20,
  },
  typeContainer: {flexWrap: 'wrap', flexDirection: 'row'},
  category: {flexWrap: 'wrap', flexDirection: 'row', marginTop: 5},
  buttonClear: {
    backgroundColor: gradientColorPinkPurple[0],
    marginTop: 20,
    color: 'white',
  },
});

const workoutTpe = ['personal', 'group', 'webinar'];

const categoryWorkout = ['mobility', 'strength', 'gym', 'cardio'];

export default ChipLayout;
