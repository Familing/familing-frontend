import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function NicknameScreen({navigation}) {
  const [nickname, setNickname] = useState('내가 둘째다');

  const handleChange = async () => {
    try {
      await AsyncStorage.setItem('nickname', nickname);
      navigation.goBack('MyPage');
    } catch (error) {
      console.error('닉네임 저장 실패:', error);
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          source={require('../../../../assets/images/register/arrow.png')}
          style={styles.arrowImage}
        />
      </TouchableOpacity>
      <Text style={styles.title}>닉네임</Text>
      <View style={styles.nicknameContainer}>
        <Text style={styles.subtitle}>새로운 닉네임을 입력해주세요</Text>
        <TextInput
          style={styles.input}
          placeholder="내가 둘째다"
          placeholderTextColor="#C5C5C5"
          value={nickname}
          onChangeText={setNickname}
        />
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  arrowImage: {
    width: 24,
    height: 24,
    position: 'absolute',
    top: 21,
    left: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
    color: '#383838',
    position: 'absolute',
    top: 20,
    left: 153,
  },
  nicknameContainer: {
    width: 312,
    height: 68,
    position: 'absolute',
    top: 105,
    left: 24,
    flexDirection: 'column',
    gap: 16,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#383838',
  },
  input: {
    width: 312,
    height: 32,
    fontSize: 16,
    fontWeight: '400',
    color: '#C5C5C5',
    borderBottomWidth: 312,
    borderBottomHeight: 4,
    borderBottomColor: '#4D83F4',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  button: {
    width: 312,
    height: 40,
    position: 'absolute',
    top: 720,
    left: 24,
    borderRadius: 6,
    backgroundColor: '#4D83F4',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
    position: 'absolute',
    top: 730,
    left: 151,
  },
});
