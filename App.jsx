import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BottomTabScreen} from './src/navigation/BottomTabScreen.jsx';
import {StatusBar} from 'react-native';
import {StartStacks} from '@/navigation/StartStack.jsx';


function App() {
  const Stack = createNativeStackNavigator();

  const linking = {
    prefixes: ['myapp://'],
    config: {
      screens: {
        Home: '',
        RegisterScreen: 'auth/login',
      },
    },
  };

  return (
    <NavigationContainer linking={linking}>
      <StatusBar hidden={true} />
      <Stack.Navigator initialRouteName="StartStacks">
        <Stack.Screen
          name="StartStacks"
          component={StartStacks}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Bottom"
          component={BottomTabScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
