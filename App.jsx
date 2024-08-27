import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BottomTabScreen} from './src/navigation/BottomTabScreen.jsx';
import {PermissionsAndroid, Platform, StatusBar} from 'react-native';
import {StartStacks} from '@/navigation/StartStack.jsx';
import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';

function App() {
  const Stack = createNativeStackNavigator();
  useEffect(() => {
    getFcmToken();
  }, []);

  //FCM 토큰 발급
  const getFcmToken = async () => {
    const fcmToken = await messaging().getToken();

    //AsyncStorage에 fcm token 저장
    await AsyncStorage.setItem('fcmToken', fcmToken);
    console.log('[+] FCM Token :: ', fcmToken);
  };

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
