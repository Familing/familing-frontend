import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import axios from 'axios';
import {ProgressIndicator} from '../ProgressIndicator';

export const RegisterStep2 = ({navigation}) => {
  const [code, setCode] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleJoin = async () => {
    try {
      const response = await axios.post('https://api.com', {code}); // 가족 코드 api

      if (response.data.valid) {
        navigation.navigate('RegisterStep4');
      } else {
        setErrorMessage('※ 코드가 올바르지 않습니다.');
      }
    } catch (error) {
      console.error(error);
      setErrorMessage('서버에 문제가 발생했습니다. 다시 시도해주세요.');
    }
  };

  const clearInput = () => {
    setCode('');
    setErrorMessage('');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          source={require('@assets/images/register/arrow.png')}
          style={styles.arrowImage}
        />
      </TouchableOpacity>
      <ProgressIndicator currentStep={2} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>코드를 입력해 참가</Text>
        <Text style={styles.subtitle}>해보세요!</Text>
      </View>
      <TextInput
        style={styles.input}
        value={code}
        onChangeText={setCode}
        placeholder="가족이 공유한 코드를 입력하세요."
        placeholderTextColor="#C5C5C5"
        keyboardType="default"
      />
      <TouchableOpacity onPress={clearInput} style={styles.clearButton}>
        <Image source={require('@assets/images/button/clearbtn.png')} />
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  arrowImage: {
    width: 24,
    height: 24,
    position: 'absolute',
    top: 20,
    left: 24,
    marginBottom: 16,
  },
  titleContainer: {
    alignItems: 'center',
    marginTop: 252,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#4D83F4',
  },
  subtitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#383838',
  },
  input: {
    width: 312,
    height: 32,
    fontSize: 16,
    fontWeight: '400',
    borderBottomWidth: 312,
    borderBottomHeight: 4,
    borderBottomColor: '#4D83F4',
    borderBottomLeftRadius: 21,
    borderBottomRightRadius: 21,
  },
  clearButton: {
    width: 24,
    height: 24,
    position: 'absolute',
    top: 86,
    left: 288,
  },
  error: {
    fontSize: 12,
    fontWeight: '400',
    color: '#FF3434',
    marginTop: 4,
  },
  button: {
    width: 312,
    height: 40,
    borderRadius: 70,
    position: 'absolute',
    top: 158,
    left: 24,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
  },
});
