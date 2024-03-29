import {
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import DashedLine from 'react-native-dashed-line';
import {iconColor, textDarkColor, textlightColor} from '../utils/color';
import {airplaneDepartureImg} from '../utils/imageExporter';
import {MontserratSemiBold} from '../utils/font';
import {FC} from 'react';

type prop = {
  onChange: (it: string) => void;
};

const DepartureInput: FC<prop> = ({onChange}) => {
  return (
    <KeyboardAvoidingView style={[style.textInputContainer]}>
      <View style={{marginTop: '2.5%'}}>
        <Image style={style.flight_icon_dep} source={airplaneDepartureImg} />
        <DashedLine
          axis="vertical"
          dashGap={5}
          dashLength={6}
          dashThickness={1.6}
          dashColor={iconColor}
          style={style.dashLine}
        />
      </View>

      <View style={style.textInputFrom}>
        <Text style={style.textFromTo}>FROM</Text>
        <TextInput
          onChangeText={it => {
            onChange(it);
          }}
          style={style.textDestination}
          placeholder="Delhi"></TextInput>
      </View>
    </KeyboardAvoidingView>
  );
};

export default DepartureInput;

const style = StyleSheet.create({
  textInputContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    marginVertical: 10,
  },
  textInputFrom: {
    flexDirection: 'column',
    marginTop: '4%',
  },
  flight_icon_dep: {
    width: 30,
    height: 30,
    marginLeft: 15,
    marginRight: 20,
    marginTop: '5%',
  },
  textFromTo: {
    fontFamily: MontserratSemiBold,
    color: textlightColor,
    fontSize: 15,
  },
  textDestination: {
    fontSize: 19,
    color: textDarkColor,
    flex: 0.5,
    padding: -10,
    width: 200,
  },
  dashLine: {
    flex: 1,
    marginLeft: 28,
    marginTop: 6,
    marginBottom: 10,
    overflow: 'hidden',
  },
});
