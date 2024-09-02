import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BottomTabScreen} from './src/navigation/BottomTabScreen.jsx';
import {StatusBar} from 'react-native';
import {StartStacks} from '@/navigation/StartStack.jsx';
import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Cookies from '@react-native-cookies/cookies';

function App() {
  // 쿠키 삭제 함수
  const clearAllCookies = async () => {
    try {
      // 모든 도메인의 모든 쿠키를 삭제
      await Cookies.clearAll();

      console.log('모든 쿠키가 삭제되었습니다.');
    } catch (error) {
      console.error('모든 쿠키 삭제 중 오류가 발생했습니다:', error);
    }
  };

  // 함수 호출
  clearAllCookies();

  const Stack = createNativeStackNavigator();
  useEffect(() => {
    getFcmToken();

    foregroundListener();
    return () => {
      foregroundListener();
    };
  }, [foregroundListener]);

  //FCM 토큰 발급
  const getFcmToken = async () => {
    const fcmToken = await messaging().getToken();

    //AsyncStorage에 fcm token 저장
    await AsyncStorage.setItem('fcmToken', fcmToken);
    console.log('[+] FCM Token :: ', fcmToken);
  };

  //foreground 메시지 리스너
  const foregroundListener = messaging().onMessage(async remoteMessage => {
    console.log('[+] Remote Message', JSON.stringify(remoteMessage));
  });

  //background 메시지 리스너
  // const backgroundListener = messaging().setBackgroundMessageHandler(
  //   async remoteMessage => {
  //     console.log(
  //       '[+] Message in the background',
  //       JSON.stringify(remoteMessage),
  //     );
  //   },
  // );

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
