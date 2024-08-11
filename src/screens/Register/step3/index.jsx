import React, {useState, useEffect} from 'react';
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
import Clipboard from '@react-native-clipboard/clipboard';
import {ProgressIndicator} from '../ProgressIndicator';
import Arrow from '@assets/images/register/arrow.png';
import ClearButton from '@assets/images/button/clearbtn.png';
import CopyImage from '@assets/images/register/copyimage.png';

export const RegisterStep3 = ({navigation}) => {
  const [code, setCode] = useState('');
  const [inviteCode, setInviteCode] = useState(null);

  const fetchInviteCode = async () => {
    try {
      const response = await axios.get('https://api.com'); // 초대 코드 api
      setInviteCode(response.data.inviteCode);
      Clipboard.setString(response.data.inviteCode);
    } catch (error) {
      Alert.alert('초대 코드를 가져오는 데 실패했습니다.');
      console.error(error);
    }
  };

  useEffect(() => {
    fetchInviteCode();
  }, []);

  const handleCreate = () => {
    navigation.navigate('RegisterStep4');
  };

  const clearInput = () => {
    setCode('');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image source={Arrow} style={styles.arrowImage} />
      </TouchableOpacity>
      <ProgressIndicator currentStep={2} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>가족 그룹</Text>
        <Text style={styles.subtitle}>을</Text>
        <Text style={styles.title}>생성</Text>
        <Text style={styles.subtitle}>해보세요!</Text>
      </View>
      <TextInput
        style={styles.input}
        value={code}
        onChangeText={setCode}
        placeholder="가족 그룹 이름을 설정해주세요."
        placeholderTextColor="#C5C5C5"
        keyboardType="default"
      />
      <TouchableOpacity onPress={clearInput} style={styles.clearButton}>
        <Image source={ClearButton} />
      </TouchableOpacity>
      <View style={styles.inviteContainer}>
        <Text style={styles.inviteTitle}>
          {inviteCode ? inviteCode : '아직 생성되지 않음'}
        </Text>
        <TouchableOpacity
          onPress={fetchInviteCode}
          style={styles.copyContainer}>
          <Image source={CopyImage} style={styles.copyImage} />
          <Text style={styles.copyText}>초대 코드 복사하기</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleCreate}>
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
  inviteContainer: {
    width: 312,
    height: 80,
    position: 'absolute',
    top: 146,
    backgroundColor: '#B3B3B3',
  },
  inviteTitle: {
    fontSize: 20,
    fontWieght: '800',
    color: '#383838',
    position: 'absolute',
    top: 162,
    left: 81,
  },
  copyContainer: {
    flexDirection: 'row',
  },
  copyImage: {
    width: 10,
    height: 12,
    position: 'absolute',
    top: 197,
    left: 104,
  },
  copyTitle: {
    fontSize: 12,
    fontWeight: '400',
    color: '#B3B3B3',
    position: 'absolute',
    top: 195,
    left: 118,
  },
  button: {
    width: 312,
    height: 40,
    borderRadius: 70,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
  },
});
