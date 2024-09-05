import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from 'react-native';
import axios from 'axios';
import {ProgressIndicator} from '../ProgressIndicator';
import ClearButton from '@assets/images/button/clearbtn.png';
import Arrow from '@assets/images/register/arrowImg.png';
import {BASE_URL} from '@/util/base_url';
import {resize} from 'react-native-responsive-sizer';

const ww = resize('ww', 360);
const wh = resize('wh', 800);

export const RegisterStep2 = ({navigation}) => {
  const [code, setCode] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleJoin = async () => {
    if (code.trim() === '') {
      Alert.alert('필수 입력입니다.');
      return;
    }
    try {
      const response = await axios.post(`${BASE_URL}/api/v1/family/user`, {
        code: code,
      });

      if (response.data.code) {
        navigation.navigate('RegisterStep4');
        console.log(response.data);
      } else {
        setErrorMessage('※ 코드가 올바르지 않습니다.');
        console.log('※ 코드가 올바르지 않습니다.');
      }
    } catch (error) {
      console.error(error);
      setErrorMessage('서버에 문제가 발생했습니다. 다시 시도해주세요.');
    }

    setErrorMessage('※ 코드가 올바르지 않습니다.');
    navigation.navigate('RegisterStep4');
  };

  const clearInput = () => {
    setCode('');
    setErrorMessage('');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image source={Arrow} style={styles.arrowImage} />
      </TouchableOpacity>

      <ProgressIndicator currentStep={2} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>코드를 입력해 참가</Text>
        <Text style={styles.subtitle}>해보세요!</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="가족이 공유한 코드를 입력하세요."
          placeholderTextColor="#C5C5C5"
          value={code}
          onChangeText={setCode}
        />
        <View style={styles.line} />
      </View>
      <TouchableOpacity onPress={clearInput} style={styles.clearButton}>
        <Image source={ClearButton} style={styles.clearbtnImage} />
      </TouchableOpacity>
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
      <TouchableOpacity style={styles.button} onPress={handleJoin}>
        <Text style={styles.buttonText}>참가하기</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  arrowImage: {
    width: ww(20),
    height: wh(15),
    marginTop: wh(20),
    marginLeft: ww(24),
  },
  titleContainer: {
    alignItems: 'center',
    marginTop: wh(130),
    marginLeft: ww(24),
    flexDirection: 'row',
  },
  title: {
    fontSize: ww(24),
    fontWeight: '700',
    color: '#4D83F4',
  },
  subtitle: {
    fontSize: ww(24),
    fontWeight: '700',
    color: '#383838',
  },
  inputContainer: {
    flex: 1,
    marginTop: wh(40),
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
    width: ww(312),
    borderWidth: 2,
    borderColor: '#4D83F4',
    borderRadius: 12,
    marginLeft: ww(24),
    marginTop: 3,
  },
  clearbtnContainer: {
    flex: 1,
    position: 'absolute',
    top: wh(150),
    left: ww(288),
  },
  clearButton: {
    flex: 1,
    position: 'absolute',
    top: wh(273),
    left: ww(308),
  },
  clearbtnImage: {
    width: ww(24),
    height: ww(24),
  },
  error: {
    fontSize: ww(12),
    fontWeight: '400',
    color: '#FF3434',
    marginBottom: wh(274),
    marginLeft: ww(24),
  },
  button: {
    width: ww(312),
    height: wh(40),
    borderRadius: 70,
    backgroundColor: '#4D83F4',
    position: 'absolute',
    top: wh(350),
    left: ww(24),
  },
  buttonText: {
    fontSize: ww(14),
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: wh(7),
  },
});
