import {BASE_URL} from '@/util/base_url';
import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';
import axios from 'axios';
import PushNotification from 'react-native-push-notification';

export const getFcmToken = async () => {
  const fcmToken = await messaging().getToken();

  await AsyncStorage.setItem('fcmToken', fcmToken);
  console.log('[+] FCM Token :: ', fcmToken);
};

export const configurePushNotifications = () => {
  PushNotification.createChannel(
    {
      channelId: 'familing1',
      channelName: 'familing',
      channelDescription: '기본 알림 채널',
      importance: 4,
      vibrate: true,
    },
    created => console.log(`알림 채널 생성됨: '${created}'`),
  );
};

export const foregroundListener = messaging().onMessage(async remoteMessage => {
  console.log('[+] Remote Message', JSON.stringify(remoteMessage));

  PushNotification.localNotification({
    channelId: 'familing1',
    title: remoteMessage.notification?.title || '알림 제목',
    message: remoteMessage.notification?.body || '알림 내용',
    bigText: remoteMessage.notification?.body || '',
    playSound: true,
    soundName: 'default',
    importance: 'high',
    priority: 'high',
  });
});

export const backgroundListener = messaging().setBackgroundMessageHandler(
  async remoteMessage => {
    console.log('[+] Message in the background', JSON.stringify(remoteMessage));
  },
);

export const sendFcmToken = async () => {
  try {
    const fcmToken = AsyncStorage.getItem('fcmToken');
    if (!fcmToken) {
      console.log('FCM 토큰을 가져오지 못했습니다.');
      return;
    }

    const response = await axios.put(`${BASE_URL}/api/v1/alarms/fcm-token`, {
      token: fcmToken,
    });
    console.log('fcm 토큰 전송 완료');
  } catch (error) {
    console.log('send fcm token failed ', error);
  }
};

export const sendNotification = async () => {
  try {
    const response = await axios.put(`${BASE_URL}/api/v1/alarms/test`);
    console.log('알림 전송', response.data);
  } catch (error) {
    console.log('send notification failed ', error);
  }
};
