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
// import Clipboard from '@react-native-clipboard/clipboard';
import {ProgressIndicator} from '@/screens/Register/ProgressIndicator';
console.log(ProgressIndicator);
import Arrow from '@assets/images/register/arrowImg.png';
import ClearButton from '@assets/images/button/clearbtn.png';
import CopyImage from '@assets/images/register/copyimage.png';
import {BASE_URL} from '@/util/base_url';
import {resize} from 'react-native-responsive-sizer';

const ww = resize('ww', 360);
const wh = resize('wh', 800);

export const RegisterStep3 = ({navigation}) => {
  const [code, setCode] = useState('');
  const [inviteCode, setInviteCode] = useState(null);

  const handleCreate = async groupName => {
    if (!groupName) {
      Alert.alert('가족 그룹 이름을 입력해주세요.');
      return;
    }

    try {
      const response = await axios.post(`${BASE_URL}/api/v1/family`, {
        family_name: groupName,
      });

      if (response.data.success) {
        const createdGroupName = response.data.result.code
          ? response.data.result.code
          : '알 수 없는 그룹 이름';
        Alert.alert(
          '가족 그룹이 생성되었습니다.',
          `그룹 이름: ${createdGroupName}`,
        );
        navigation.navigate('RegisterStep4');
      } else {
        Alert.alert('가족 그룹 생성에 실패했습니다.', response.data.message);
      }
    } catch (error) {
      Alert.alert('가족 그룹 생성에 실패했습니다.');
      console.error(error);
    }
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
        <Text style={styles.subtitle}>을 </Text>
        <Text style={styles.title}>생성</Text>
        <Text style={styles.subtitle}>해보세요!</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="가족 그룹 이름을 설정해주세요."
          placeholderTextColor="#C5C5C5"
          value={code}
          onChangeText={setCode}
        />
        <View style={styles.line} />
        <TouchableOpacity onPress={clearInput} style={styles.clearButton}>
          <Image source={ClearButton} style={styles.clearbtnImage} />
        </TouchableOpacity>
      </View>
      <View style={styles.inviteContainer}>
        <Text style={styles.inviteTitle}>
          {inviteCode ? inviteCode : '아직 생성되지 않음'}
        </Text>
        <TouchableOpacity onPress={setInviteCode} style={styles.copyContainer}>
          <Image source={CopyImage} style={styles.copyImage} />
          <Text style={styles.copyText}>초대 코드 복사하기</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleCreate(code)}>
          <Text style={styles.buttonText}>생성하기</Text>
        </TouchableOpacity>
      </View>
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
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: wh(100),
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
    marginTop: wh(3),
  },
  clearbtnContainer: {
    position: 'absolute',
    top: wh(250),
    left: ww(288),
  },
  clearButton: {
    position: 'absolute',
    top: wh(6),
    left: ww(310),
  },
  clearbtnImage: {
    width: ww(24),
    height: wh(24),
  },
  inviteContainer: {
    width: ww(312),
    height: wh(80),
    backgroundColor: '#F2F2F2',
    position: 'absolute',
    top: wh(310),
    left: ww(24),
  },
  inviteTitle: {
    fontSize: ww(20),
    fontWeight: '800',
    color: '#383838',
    textAlign: 'center',
    marginTop: wh(16),
    lineHeight: wh(24.96),
  },
  copyContainer: {
    flexDirection: 'row',
    marginLeft: ww(95),
    marginTop: wh(5),
  },
  copyImage: {
    width: ww(10),
    height: wh(12),
    marginTop: wh(6),
    marginRight: ww(5),
  },
  copyTitle: {
    fontSize: ww(12),
    fontWeight: '400',
    color: '#B3B3B3',
    lineHeight: wh(24),
  },
  btnContainer: {
    marginLeft: ww(24),
    position: 'absolute',
    top: wh(425),
  },
  button: {
    width: ww(312),
    height: wh(40),
    borderRadius: 70,
    backgroundColor: '#4D83F4',
  },
  buttonText: {
    fontSize: ww(16),
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: wh(6),
  },
});
