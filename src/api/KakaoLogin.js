import React from 'react';
import {
  View,
  Text,
  Image,
  Alert,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from 'react-native';
//import axios from 'axios';
//import AsyncStorage from '@react-native-async-storage/async-storage';
import kakao from '@assets/images/register/kakao.png';
export const KakaoLogin = ({navigation}) => {
  const kakaoURL = 'http://13.124.211.43:8080/oauth2/authorization/kakao';

  const handleLogin = async () => {
    try {
      await Linking.openURL(kakaoURL);
      // const response = await axios.get(kakaoURL);
      // const {data} = response;

      // const idToken = data.id_token;

      // if (idToken) {
      //   await AsyncStorage.setItem('idToken', idToken);

      //   Alert.alert('Login Success');
      // } else {
      //   Alert.alert('Login Failed');
      // }
      // navigation.navigate('RegisterScreen');
    } catch (error) {
      console.error('Failed to login with Kakao:', error);
      Alert.alert('Login Failed', 'An error occurred during Kakao login.');
    }
  };

  return (
    <View style={styles.btnContainer}>
      <Image source={kakao} style={styles.kakao} />
      <TouchableOpacity onPress={handleLogin}>
        <Text style={styles.buttonText}>카카오로 시작하기</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: '#FFD600',
    paddingVertical: 12,
    paddingHorizontal: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    width: 312,
    height: 52,
    marginTop: 48,
    flexDirection: 'row',
  },
  buttonText: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  kakao: {
    width: 28,
    height: 28,
  },
});
