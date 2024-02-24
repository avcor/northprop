import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import FindFlightScreen from './src/screens/FindFlightScreen';
import ResultScreen from './src/screens/ResultScreen/ResultScreen';

export type RootStackParamList = {
  FindFlightScreen: any;
  ResultScreen: any;
};

function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="ResultScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="FindFlightScreen" component={FindFlightScreen} />
        <Stack.Screen name="ResultScreen" component={ResultScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
