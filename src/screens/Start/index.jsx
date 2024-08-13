import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import StartImg from '@assets/images/banner/StartImg.png';
//import Kakao from '@/components/icon/Kakao';
// import {KakaoLogin} from '@/api/KakaoLogin';
// import kakao from '@assets/images/register/kakao.png';
import {KakaoLogin} from '@/api/KakaoLogin';

export default function Start({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Bridge</Text>
        <Text style={styles.subtitle}>더 가까운 사이가 되는 중</Text>
      </View>
      <Image source={StartImg} style={styles.image} />
      {/* <TouchableOpacity
        style={styles.button}
        onPress={navigation.navigate('RegisterScreen')}>
        <View style={styles.btnContainer}>
          <Image source={kakao} style={styles.kakao} />
          <Text style={styles.buttonText}>카카오로 시작하기</Text>
        </View>
      </TouchableOpacity> */}
      <KakaoLogin />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#BBDEFB',
  },
  textContainer: {
    marginTop: 164,
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
    width: 200,
    height: 200,
  },
  button: {
    backgroundColor: '#FFD600',
    paddingVertical: 12,
    paddingHorizontal: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    width: 312,
    height: 52,
    marginTop: 48,
  },
  btnContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  buttonText: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
  },
  kakao: {
    width: 28,
    height: 28,
  },
});
