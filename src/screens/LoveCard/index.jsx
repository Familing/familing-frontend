import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LovecardMainScreen from './LovecardMainScreen';
import LoveCardDetailScreen from './LoveCardDetailScreen';

const Stack = createNativeStackNavigator();

export const LoveCardScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LovecardMainScreen">
        <Stack.Screen
          name="LovecardMainScreen"
          component={LovecardMainScreen}
        />
        <Stack.Screen
          name="LoveCardDetailScreen"
          component={LoveCardDetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
