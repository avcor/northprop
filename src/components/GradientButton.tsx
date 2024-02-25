import LinearGradient from 'react-native-linear-gradient';
import {gradientColorPinkPurple} from '../utils/color';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {MontserratMedium} from '../utils/font';
import {filterImg} from '../utils/imageExporter';
import {FC} from 'react';

type props = {
  text?: string;
  icon?: any;
  onPress?: () => void;
};

const GradientButton: FC<props> = ({onPress, icon, text}) => {
  return (
    <TouchableOpacity style={{flex: 1}} onPress={onPress}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={gradientColorPinkPurple}
        style={styles.gradientContainer}>
        {text !== undefined ? <Text style={styles.text}>{text}</Text> : null}

        {icon !== undefined ? (
          <View>
            <Image
              style={{
                flex: 1,
                width: 30,
                marginLeft: text !== undefined ? 10 : 0,
              }}
              source={icon}
              resizeMode="contain"
            />
          </View>
        ) : null}
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default GradientButton;

const styles = StyleSheet.create({
  gradientContainer: {
    alignItems: 'center',
    flex: 1,
    borderRadius: 20,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  text: {
    color: 'white',
    fontFamily: MontserratMedium,
    fontSize: 20,
  },
});
