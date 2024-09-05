import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Arrow from '@assets/images/register/arrowImg.png';
import axios from 'axios';
import {BASE_URL} from '@/util/base_url';
import {resize} from 'react-native-responsive-sizer';

const ww = resize('ww', 360);
const wh = resize('wh', 800);

export default function NicknameScreen({navigation}) {
  const [nickname, setNickname] = useState(nickname);

  const handleChange = async () => {
    try {
      await AsyncStorage.setItem('nickname', nickname);

      const response = await axios.patch(`${BASE_URL}/api/v1/user/nickname`, {
        nickname: nickname,
      });

      console.log('닉네임 변경 성공:', response.data);
      navigation.goBack();
    } catch (error) {
      console.error('닉네임 저장 실패:', error);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={Arrow} style={styles.arrowImage} />
        </TouchableOpacity>
        <Text style={styles.title}>닉네임</Text>
      </View>
      <View style={styles.nicknameContainer}>
        <Text style={styles.subtitle}>새로운 닉네임을 입력해주세요</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder={nickname}
            placeholderTextColor="#C5C5C5"
            value={nickname}
            onChangeText={setNickname}
          />
          <View style={styles.line} />
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleChange}>
        <Text style={styles.buttonText}>변경하기</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titleContainer: {
    flexDirection: 'row',
    marginTop: wh * 0.025,
    gap: ww * 0.292,
  },
  arrowImage: {
    width: ww * 0.056,
    height: wh * 0.01875,
    marginLeft: ww * 0.067,
  },
  title: {
    fontSize: ww * 0.0556,
    fontWeight: '800',
    color: '#383838',
    marginTop: wh * -0.00625,
  },
  nicknameContainer: {
    width: ww * 0.8667,
    height: wh * 0.085,
    flexDirection: 'column',
    gap: wh * 0.02,
    marginTop: wh * 0.0125,
  },
  subtitle: {
    fontSize: ww * 0.0444,
    fontWeight: '800',
    color: '#383838',
    marginTop: wh * 0.05,
    marginLeft: ww * 0.067,
  },
  inputContainer: {
    flex: 1,
  },
  input: {
    width: ww * 0.8667,
    height: wh * 0.04,
    fontSize: ww * 0.0444,
    fontWeight: '400',
    color: '#C5C5C5',
    paddingHorizontal: 5,
    paddingVertical: 1,
    marginLeft: ww * 0.067,
  },
  line: {
    borderWidth: 2,
    borderColor: '#4D83F4',
    borderRadius: 12,
    marginLeft: ww * 0.067,
    marginTop: wh * 0.00375,
  },
  button: {
    width: ww * 0.8667,
    height: wh * 0.05,
    borderRadius: 6,
    backgroundColor: '#4D83F4',
    marginTop: wh * 0.375,
    marginLeft: ww * 0.067,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: ww * 0.0444,
    fontWeight: '700',
    color: '#FFFFFF',
  },
});
