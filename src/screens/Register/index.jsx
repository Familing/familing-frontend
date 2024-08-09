import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {RegisterStep1} from './src/screens/Register/step1/index';
import {RegisterStep2} from './src/screens/Register/step2/index';
import {RegisterStep3} from './src/screens/Register/step3/index';
import {RegisterStep4} from './src/screens/Register/step4/index';

const Stack = createStackNavigator();

export const RegisterScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="RegisterStep1">
        <Stack.Screen name="RegisterStep1" component={RegisterStep1} />
        <Stack.Screen name="RegisterStep2" component={RegisterStep2} />
        <Stack.Screen name="RegisterStep3" component={RegisterStep3} />
        <Stack.Screen name="RegisterStep4" component={RegisterStep4} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
