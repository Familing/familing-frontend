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
    width: ww(20),
    height: wh(15),
    marginLeft: ww(24),
  },
  titleContainer: {
    flexDirection: 'row',
    marginTop: wh(20),
    gap: ww(90),
  },
  title: {
    fontSize: ww(20),
    fontWeight: '800',
    color: '#383838',
  },
  subContainer: {
    marginLeft: ww(24),
    marginTop: wh(40),
  },
  subtitle1: {
    fontSize: ww(16),
    fontWeight: '800',
    color: '#383838',
  },
  inviteContainer: {
    width: ww(312),
    height: wh(80),
    flexDirection: 'column',
    backgroundColor: '#E7E7E7',
    marginTop: wh(10),
    marginLeft: ww(24),
    alignItems: 'center',
    justifyContent: 'center',
  },
  inviteTitle: {
    fontSize: ww(20),
    fontWeight: '800',
    color: '#383838',
  },
  codeBox: {
    marginBottom: wh(5),
  },
  code: {
    fontSize: ww(20),
    fontWeight: '800',
    color: '#383838',
  },
  copyContainer: {
    flexDirection: 'row',
    gap: ww(5),
  },
  copyImage: {
    width: ww(10),
    height: wh(12),
    marginTop: wh(3),
  },
  copyText: {
    fontSize: ww(12),
    fontWeight: '400',
    color: 'rgba(179, 179, 179, 0.6)',
  },
  subContainer2: {
    marginLeft: ww(24),
    marginTop: wh(30),
  },
  subtitle2: {
    fontSize: ww(16),
    fontWeight: '800',
    color: '#383838',
  },
  familylistContainer: {
    flexDirection: 'column',
    gap: wh(8),
    marginTop: wh(10),
    marginLeft: ww(24),
  },
  listContainer: {
    marginTop: wh(5),
    marginBottom: wh(5),
    flexDirection: 'row',
    gap: ww(5),
  },
  listImage: {
    width: ww(38),
    height: wh(38),
    marginLeft: ww(24),
  },
  listTextContainer: {
    marginLeft: ww(16),
  },
  listText: {
    fontSize: ww(14),
    fontWeight: '500',
    color: '#383838',
  },
  separator: {
    width: '100%',
    height: StyleSheet.hairlineWidth,
    borderTopWidth: 1,
    borderColor: '#E7E7E7',
    marginTop: wh(5),
    opacity: 1,
  },
});
