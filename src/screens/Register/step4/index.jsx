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
import {ProgressIndicator} from '../ProgressIndicator';
import Avatar from '@assets/images/photocard/defaultProfile.png';
import SwitchButton from '@assets/images/button/switchbtn.png';
import {ChangeProfile} from '@/components/common/ChangeProfile';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {BASE_URL} from '@/util/base_url';
import {resize} from 'react-native-responsive-sizer';

const ww = resize('ww', 360);
const wh = resize('wh', 800);

export const RegisterStep4 = ({navigation}) => {
  const [code, setCode] = useState('');
  const [alertVisible, setAlertVisible] = useState(false);
  const [imageSelected, setImageSelected] = useState('');

  const handleClick = () => {
    setAlertVisible(true);
  };

  const handleConfirm = async () => {
    if (code.trim() === '') {
      Alert.alert('필수 입력입니다.');
    } else if (!imageSelected) {
      Alert.alert('이미지를 등록해 주세요.');
    } else {
      try {
        await AsyncStorage.setItem('nickname', code);

        const response = await axios.patch(`${BASE_URL}/api/v1/user/nickname`, {
          nickname: code,
        });

        console.log('닉네임 변경 성공:', response.data);
        navigation.navigate('Bottom');
      } catch (error) {
        console.error('닉네임 저장 실패:', error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <ProgressIndicator currentStep={3} />
      <View style={styles.imageContainer}>
        {imageSelected ? (
          <TouchableOpacity
            onPress={handleClick}
            style={styles.buttonContainer}>
            <Image source={{uri: imageSelected}} style={styles.image} />
            <Image style={styles.image2} source={SwitchButton} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={handleClick}
            style={styles.buttonContainer}>
            <Image source={Avatar} style={styles.image} />
            <Image style={styles.image2} source={SwitchButton} />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Familing에서 사용할 이름</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="ex) 슈퍼맨 아빠, 귀염둥이 막내"
          placeholderTextColor="#C5C5C5"
          value={code}
          onChangeText={setCode}
        />
        <View style={styles.line} />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleConfirm}>
        <Text style={styles.buttonText}>확인</Text>
      </TouchableOpacity>

      <ChangeProfile
        visible={alertVisible}
        onClose={() => setAlertVisible(false)}
        setImageSelected={setImageSelected}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    justifyContent: 'center',
    marginTop: wh(130),
    marginLeft: ww(124),
  },
  image: {
    borderRadius: 60,
    width: ww(112),
    height: ww(112),
  },
  image2: {
    width: ww(28),
    height: ww(28),
    marginLeft: ww(80),
    position: 'absolute',
    top: wh(90),
  },
  titleContainer: {
    marginTop: wh(32),
    marginLeft: ww(24),
  },
  title: {
    fontSize: ww(16),
    fontWeight: '700',
    color: '#383838',
  },
  inputContainer: {
    flex: 1,
    marginTop: wh(5),
  },
  input: {
    width: ww(312),
    height: wh(32),
    fontSize: ww(16),
    fontWeight: '700',
    color: '#383838',
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
  button: {
    width: ww(312),
    height: wh(40),
    borderRadius: 70,
    backgroundColor: '#4D83F4',
    position: 'absolute',
    top: wh(400),
    left: ww(24),
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: ww(16),
    fontWeight: '700',
    color: '#FFFFFF',
  },
});
