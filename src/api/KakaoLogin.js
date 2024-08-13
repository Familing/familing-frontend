import React from 'react';
import {
  View,
  Text,
  Image,
  Alert,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import kakao from '@assets/images/register/kakao.png';

export const KakaoLogin = ({navigation}) => {
  const kakaoURL = 'http://52.79.205.140:8080/oauth2/authorization/kakao';

  const handleLogin = async () => {
    try {
      const response = await axios.get(kakaoURL);
      const {data} = response;

      console.log('Received data:', data);

      const idToken = data.id_token;

      if (idToken) {
        await AsyncStorage.setItem('idToken', idToken);

        console.log('success');
        Alert.alert('Login Success');
      } else {
        console.error('Token is missing in the response:', data);
        Alert.alert('Login Failed');
      }
      navigation.navigate('RegisterScreen');
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
    flexDirection: 'row',
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
