import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {RegisterStep1} from './step1';
import {RegisterStep2} from './step2';
import {RegisterStep3} from './step3';
import {RegisterStep4} from './step4';

const Stack = createStackNavigator();

export const RegisterScreen = () => {
  return (
    <Stack.Navigator initialRouteName="RegisterStep1">
      <Stack.Screen
        name="RegisterStep1"
        component={RegisterStep1}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RegisterStep2"
        component={RegisterStep2}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RegisterStep3"
        component={RegisterStep3}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RegisterStep4"
        component={RegisterStep4}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
