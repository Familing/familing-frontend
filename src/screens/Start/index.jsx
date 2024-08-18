import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Linking,
  TouchableOpacity,
} from 'react-native';
import BannerImg from '@assets/images/banner/BannerImage.png';
import kakao from '@assets/images/register/kakao.png';

export default function Start() {
  const kakaoURL = 'http://3.39.254.198:8080/oauth2/authorization/kakao';

  const handleLogin = async () => {
    try {
      await Linking.openURL(kakaoURL);
    } catch (error) {
      console.error('Failed to login with Kakao:', error);
      // alert('Login Failed', 'An error occurred during Kakao login.');
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
    marginTop: 104,
    marginBottom: 40,
  },
  title: {
    fontSize: 50,
    fontWeight: '800',
    color: '#fff',
    textAlign: 'center',
    lineHeight: 62.4,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'center',
    color: '#fff',
  },
  image: {
    width: 220,
    height: 220,
  },
  button: {
    backgroundColor: '#FFBE00',
    paddingVertical: 12,
    paddingHorizontal: 80,
    borderRadius: 32.27,
    justifyContent: 'center',
    alignItems: 'center',
    width: 312,
    height: 50,
    marginTop: 40,
  },
  btnContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  buttonText: {
    fontSize: 16,
    color: '#371C09',
    fontWeight: '800',
    textAlign: 'center',
  },
  kakao: {
    width: 28,
    height: 28,
  },
});
