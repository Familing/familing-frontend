import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Alert,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import Clipboard from '@react-native-clipboard/clipboard';
import Arrow from '@assets/images/register/arrowImg.png';
import CopyImage from '@assets/images/register/copyimage.png';
import {BASE_URL} from '@/util/base_url';
import {resize} from 'react-native-responsive-sizer';

const ww = resize('ww', 360);
const wh = resize('wh', 800);

export default function MyFamilyScreen({navigation}) {
  const [inviteCode, setInviteCode] = useState(null);
  const [familyList, setFamilyList] = useState([]);

  useEffect(() => {
    const fetchInviteCode = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/v1/family`);
        setInviteCode(response.data.code);
        Clipboard.setString(response.data.inviteCode);
      } catch (error) {
        Alert.alert('초대 코드를 가져오는 데 실패했습니다.');
        console.error(error);
      }
    };
    fetchInviteCode();
  }, []);

  useEffect(() => {
    const fetchFamilyList = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/v1/family`);
        setFamilyList(response.data.family_users_dto.family_user_dto_list);
      } catch (error) {
        Alert.alert('가족 목록을 가져오는 데 실패했습니다.');
        console.error(error);
      }
    };
    fetchFamilyList();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={Arrow} style={styles.arrowImage} />
        </TouchableOpacity>
        <Text style={styles.title}>우리 가족</Text>
      </View>

      <View style={styles.subContainer}>
        <Text style={styles.subtitle1}>가족 코드</Text>
      </View>

      <View style={styles.inviteContainer}>
        <Text style={styles.inviteTitle}>{inviteCode}</Text>
        <TouchableOpacity onPress={setInviteCode} style={styles.copyContainer}>
          <View style={styles.copyContainer}>
            <Image source={CopyImage} style={styles.copyImage} />
            <Text style={styles.copyText}>초대 코드 복사하기</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.subContainer2}>
        <Text style={styles.subtitle2}>가족 목록</Text>
      </View>

      <View style={styles.familylistContainer}>
        {familyList.map((user, index) => (
          <View key={index}>
            <View style={styles.listContainer}>
              <Image source={{uri: user.profileImg}} style={styles.listImage} />
              <View style={styles.listTextContainer}>
                <Text style={styles.listText}>{user.nickName}</Text>
              </View>
            </View>
            <View style={styles.separator} />
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  arrowImage: {
    width: ww * 0.055,
    height: wh * 0.01875,
    marginLeft: ww * 0.0667,
  },
  titleContainer: {
    flexDirection: 'row',
    marginTop: wh * 0.025,
    gap: ww * 0.25,
  },
  title: {
    fontSize: ww * 0.0556,
    fontWeight: '800',
    color: '#383838',
  },
  subContainer: {
    marginLeft: ww * 0.0667,
    marginTop: wh * 0.05,
  },
  subtitle1: {
    fontSize: ww * 0.0444,
    fontWeight: '800',
    color: '#383838',
  },
  inviteContainer: {
    width: ww * 0.8667,
    height: wh * 0.1,
    flexDirection: 'column',
    backgroundColor: '#E7E7E7',
    marginTop: wh * 0.0125,
    marginLeft: ww * 0.0667,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inviteTitle: {
    fontSize: ww * 0.0556,
    fontWeight: '800',
    color: '#383838',
  },
  codeBox: {
    marginBottom: wh * 0.00625,
  },
  code: {
    fontSize: ww * 0.0556,
    fontWeight: '800',
    color: '#383838',
  },
  copyContainer: {
    flexDirection: 'row',
    gap: ww * 0.0139,
  },
  copyImage: {
    width: ww * 0.0278,
    height: wh * 0.015,
    marginTop: wh * 0.00375,
  },
  copyText: {
    fontSize: ww * 0.0333,
    fontWeight: '400',
    color: 'rgba(179, 179, 179, 0.6)',
  },
  subContainer2: {
    marginLeft: ww * 0.0667,
    marginTop: wh * 0.0375,
  },
  subtitle2: {
    fontSize: ww * 0.0444,
    fontWeight: '800',
    color: '#383838',
  },
  familylistContainer: {
    flexDirection: 'column',
    gap: wh * 0.01,
    marginTop: wh * 0.0125,
    marginLeft: ww * 0.0667,
  },
  listContainer: {
    marginTop: wh * 0.00625,
    marginBottom: wh * 0.00625,
  },
  listImage: {
    width: ww * 0.1056,
    height: ww * 0.1056,
    marginLeft: ww * 0.0667,
  },
  listTextContainer: {
    marginLeft: ww * 0.0444,
  },
  listText: {
    fontSize: ww * 0.0389,
    fontWeight: '500',
    color: '#383838',
  },
  separator: {
    width: ww * 0.8667,
    height: StyleSheet.hairlineWidth,
    borderTopWidth: 1,
    borderColor: '#E7E7E7',
    marginTop: wh * 0.0025,
    opacity: 1,
  },
});
