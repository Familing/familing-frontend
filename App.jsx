import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BottomTabScreen} from './src/navigation/BottomTabScreen.jsx';
import {StatusBar} from 'react-native';
import {StartStacks} from './src/navigation/StartStack.jsx';
import {getFcmToken} from '@/api/fcm/fcm.jsx';

function App() {
  useEffect(() => {
    getFcmToken();
  }, []);

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
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
