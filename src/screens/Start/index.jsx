import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import BannerImg from '@assets/images/banner/BannerImage.png';
import kakao from '@assets/images/register/kakao.png';
import * as KakaoLogin from '@react-native-seoul/kakao-login';
import axios from 'axios';
import {BASE_URL} from '@/util/base_url';
import Cookies from '@react-native-cookies/cookies';
import {resize} from 'react-native-responsive-sizer';

const ww = resize('ww', 360);
const wh = resize('wh', 800);

export default function Start({navigation}) {
  //kakao login
  const handleLogin = async () => {
    //쿠키 삭제
    clearAllCookies();

    //카카오 로그인
    try {
      const result = await KakaoLogin.login();
      console.log('access token:', JSON.stringify(result.accessToken));

      //액세스 토큰 전달
      try {
        const response = await axios.post(
          `${BASE_URL}/api/v1/login/oauth/kakao/callback`,
          {
            access_token: result.accessToken,
          },
        );

        //로그인 후 화면 이동
        const hasFamily = await handleFamily();
        if (hasFamily === false) {
          navigation.navigate('RegisterScreen');
        } else if (hasFamily === true) {
          navigation.navigate('Bottom');
        }
      } catch (error) {
        console.log('access failed', error);
      }
    } catch (error) {
      if (error.code === 'E_CANCELLED_OPERATION') {
        console.log('Login Cancel', error.message);
      } else {
        console.log(`Login Fail(code:${error.code})`, error.message);
      }
    }
  };

  const handleFamily = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/v1/family`);
      return response.data.success;
    } catch (error) {
      console.log('get familiy list failed ', error);
    }
  };

  const clearAllCookies = async () => {
    try {
      await Cookies.clearAll();

      console.log('모든 쿠키가 삭제되었습니다.');
    } catch (error) {
      console.error('모든 쿠키 삭제 중 오류가 발생했습니다:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Familing</Text>
        <Text style={styles.subtitle}>더 가까운 가족이 되는 중</Text>
      </View>
      <Image source={BannerImg} style={styles.image} />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <View style={styles.btnContainer}>
          <Image source={kakao} style={styles.kakao} />
          <Text style={styles.buttonText}>카카오로 시작하기</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#4D83F4',
  },
  textContainer: {
    marginTop: wh(104),
    marginBottom: wh(40),
  },
  title: {
    fontSize: ww(50),
    fontWeight: '800',
    color: '#fff',
    textAlign: 'center',
    lineHeight: wh(62.4),
    marginBottom: wh(4),
  },
  subtitle: {
    fontSize: ww(18),
    fontWeight: '400',
    textAlign: 'center',
    color: '#fff',
  },
  image: {
    width: ww(220),
    height: ww(220),
  },
  button: {
    backgroundColor: '#FFBE00',
    paddingVertical: wh(12),
    paddingHorizontal: ww(80),
    borderRadius: 32.27,
    justifyContent: 'center',
    alignItems: 'center',
    width: ww(312),
    height: wh(50),
    marginTop: wh(40),
  },
  btnContainer: {
    flexDirection: 'row',
    gap: ww(8),
  },
  buttonText: {
    fontSize: ww(16),
    color: '#371C09',
    fontWeight: '800',
    textAlign: 'center',
  },
  kakao: {
    width: ww(28),
    height: ww(28),
  },
});
