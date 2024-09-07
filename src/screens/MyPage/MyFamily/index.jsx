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
import Arrow from '@assets/images/header/backIcon.png';
import CopyImage from '@assets/images/register/copyimage.png';
import {BASE_URL} from '@/util/base_url';

export default function MyFamilyScreen({navigation}) {
  const [inviteCode, setInviteCode] = useState(null);
  const [familyList, setFamilyList] = useState([]);
  const [myList, setMyList] = useState([]);

  useEffect(() => {
    const fetchInviteCode = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/v1/family`);
        setInviteCode(response.data.result.code);
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
        setMyList(response.data.result.me.family_user_dto_list);
        setFamilyList(
          response.data.result.family_users_dto.family_user_dto_list,
        );
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
        <TouchableOpacity
          style={styles.imgContainer}
          onPress={() => navigation.goBack()}>
          <Image source={Arrow} style={styles.arrowImage} />
        </TouchableOpacity>
        <Text style={styles.title}>우리 가족</Text>
      </View>

      <View>
        <View style={styles.subContainer}>
          <Text style={styles.subtitle1}>가족 코드</Text>
        </View>
        <View style={styles.inviteContainer}>
          <Text style={styles.inviteTitle}>{inviteCode}</Text>
          <TouchableOpacity onPress={setInviteCode} style={styles.copyBox}>
            <View style={styles.copyContainer}>
              <Image source={CopyImage} style={styles.copyImage} />
              <Text style={styles.copyText}>초대 코드 복사하기</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <View style={styles.subContainer2}>
          <Text style={styles.subtitle2}>가족 목록</Text>
        </View>
        <View style={styles.familylistContainer}>
          {myList.map((user, index) => (
            <View style={styles.listContainer} key={index}>
              <View style={styles.left}>
                <Image
                  source={{uri: user.profileImg}}
                  style={styles.listImage}
                />
                <Text style={styles.listText}>{user.nickName}</Text>
              </View>
            </View>
          ))}

          {familyList.map((user, index) => (
            <View style={styles.listContainer} key={index}>
              <View style={styles.left}>
                <Image
                  source={{uri: user.profileImg}}
                  style={styles.listImage}
                />
                <Text style={styles.listText}>{user.nickName}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 24,
    backgroundColor: '#FFFFFF',
  },
  profileContainer: {
    width: 312,
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
  },
  arrowImage: {
    width: 24,
    height: 24,
  },
  imgContainer: {
    position: 'absolute',
    left: 0,
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 64,
    backgroundColor: '#ffffff',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '800',
    color: '#383838',
  },
  subContainer: {
    marginTop: 40,
  },
  subtitle1: {
    fontSize: 16,
    fontWeight: '800',
    color: '#383838',
  },
  inviteContainer: {
    width: 312,
    height: 80,
    flexDirection: 'column',
    backgroundColor: '#E7E7E7',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inviteTitle: {
    fontSize: 20,
    fontWieght: '800',
    color: '#383838',
  },
  codeBox: {
    marginBottom: 5,
  },
  code: {
    fontSize: 20,
    fontWeight: '800',
    color: '#383838',
  },
  copyContainer: {
    flexDirection: 'row',
    gap: 5,
  },
  copyImage: {
    width: 10,
    height: 12,
    marginTop: 3,
  },
  copyText: {
    fontSize: 12,
    fontWeight: '400',
    color: 'rgba(179, 179, 179, 0.6)',
  },
  subContainer2: {
    marginTop: 30,
  },
  subtitle2: {
    fontSize: 16,
    fontWeight: '800',
    color: '#383838',
  },
  familylistContainer: {
    flexDirection: 'column',
    marginTop: 10,
  },
  listContainer: {
    width: 312,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F3F3',
    flexDirection: 'row',
    alignItems: 'center',
  },
  listImage: {
    borderRadius: 50,
    width: 38,
    height: 38,
  },
  listText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#383838',
  },
  separator: {
    width: '100%',
    height: StyleSheet.hairlineWidth,
    borderTopWidth: 1,
    borderColor: '#E7E7E7',
    marginTop: 5,
    opacity: 1,
  },
  copyBox: {
    marginTop: 8,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
});
