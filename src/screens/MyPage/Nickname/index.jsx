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
    marginTop: wh(20),
    gap: ww(105),
  },
  arrowImage: {
    width: ww(20),
    height: wh(15),
    marginLeft: ww(24),
  },
  title: {
    fontSize: ww(20),
    fontWeight: '800',
    color: '#383838',
    marginTop: wh(-5),
  },
  nicknameContainer: {
    width: ww(312),
    height: wh(68),
    flexDirection: 'column',
    gap: wh(16),
    marginTop: wh(10),
  },
  subtitle: {
    fontSize: ww(16),
    fontWeight: '800',
    color: '#383838',
    marginTop: wh(40),
    marginLeft: ww(24),
  },
  inputContainer: {
    flex: 1,
  },
  input: {
    width: ww(312),
    height: wh(32),
    fontSize: ww(16),
    fontWeight: '400',
    color: '#C5C5C5',
    paddingHorizontal: 5,
    paddingVertical: 1,
    marginLeft: ww(24),
  },
  line: {
    borderWidth: 2,
    borderColor: '#4D83F4',
    borderRadius: 12,
    marginLeft: ww(24),
    marginTop: wh(3),
  },
  button: {
    width: ww(312),
    height: wh(40),
    borderRadius: 6,
    backgroundColor: '#4D83F4',
    marginTop: wh(300),
    marginLeft: ww(24),
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: ww(16),
    fontWeight: '700',
    color: '#FFFFFF',
  },
});
