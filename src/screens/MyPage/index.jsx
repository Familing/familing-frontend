import React, {useState, useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import switchbtn from '@assets/images/button/switchbtn.png';
import arrowbtn from '@assets/images/button/arrowbtn2.png';
import axios from 'axios';
import {BASE_URL} from '@/util/base_url';
import ChangeProfile from '@/components/common/ChangeProfile';
import {useFocusEffect} from '@react-navigation/native';
import {resize} from 'react-native-responsive-sizer';

const ww = resize('ww', 360);
const wh = resize('wh', 800);

export default function MyPage({navigation}) {
  const [alertVisible, setAlertVisible] = useState(false);
  const [nickname, setNickname] = useState('');
  const [realname, setRealname] = useState('');
  const [profile, setProfile] = useState('');

  useFocusEffect(
    useCallback(() => {
      fetchUserData();
      fetchNickname();
    }, []),
  );

  const fetchNickname = async () => {
    const storedNickname = await AsyncStorage.getItem('nickname');
    if (storedNickname) {
      setNickname(storedNickname);
    }
  };

  const fetchUserData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/v1/user`);
      setNickname(response.data.result.nickname);
      setRealname(response.data.result.realname);
      setProfile(response.data.result.image_url);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>마이페이지</Text>
      </View>
      <TouchableOpacity
        style={styles.profileImageContainer}
        onPress={() => setAlertVisible(true)}>
        <Image style={styles.profileImage1} source={{uri: profile}} />
        <Image style={styles.profileImage2} source={switchbtn} />
      </TouchableOpacity>
      <View style={styles.profileContainer}>
        <View style={styles.nicknameContainer}>
          <Text style={styles.nicknameTitle1}>닉네임</Text>
          <Text style={styles.nicknameText1}>{nickname}</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('NicknameScreen')}>
            <Image style={styles.arrowButton1} source={arrowbtn} />
          </TouchableOpacity>
        </View>
        <View style={styles.separator1} />
        <View style={styles.nameContainer}>
          <Text style={styles.nicknameTitle2}>이름</Text>
          <Text style={styles.nicknameText2}>{realname}</Text>
        </View>
      </View>
      <View style={styles.profileContainer2}>
        <View style={styles.myfamilyContainer}>
          <Text style={styles.nicknameTitle3}>우리 가족</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('MyFamilyScreen')}>
            <Image style={styles.arrowButton2} source={arrowbtn} />
          </TouchableOpacity>
        </View>
        <View style={styles.separator2} />
        <View style={styles.subscribeContainer}>
          <Text style={styles.nicknameTitle4}>구독 모델</Text>
          <Text style={styles.nicknameText3}>프리미엄형</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('SubscribeScreen')}>
            <Image style={styles.arrowButton3} source={arrowbtn} />
          </TouchableOpacity>
        </View>
        <View style={styles.separator3} />
        <View style={styles.payContainer}>
          <Text style={styles.nicknameTitle5}>결제 관리</Text>
          <TouchableOpacity onPress={() => navigation.navigate('PayScreen')}>
            <Image style={styles.arrowButton4} source={arrowbtn} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.profileContainer3}>
        <View style={styles.snapshotContainer}>
          <Text style={styles.nicknameTitle6}>스냅샷 시간 설정</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('SnapshotTimeScreen')}>
            <Image style={styles.arrowButton5} source={arrowbtn} />
          </TouchableOpacity>
        </View>
      </View>

      <ChangeProfile
        visible={alertVisible}
        onClose={() => setAlertVisible(false)}
        setImageSelected={setProfile}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: ww(360),
    height: wh(800),
  },
  headerContainer: {
    justifyContent: 'flex-start',
    marginLeft: ww(24),
    marginTop: wh(20),
  },
  header: {
    fontSize: ww(20),
    fontWeight: '800',
    color: '#383838',
  },
  profileImageContainer: {
    justifyContent: 'center',
    width: ww(92),
    height: ww(92),
    marginTop: wh(25),
    marginLeft: ww(134),
  },
  profileImage1: {
    borderRadius: 50,
    width: ww(92),
    height: ww(92),
  },
  profileImage2: {
    width: ww(28),
    height: ww(28),
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  profileContainer: {
    width: ww(312),
    height: wh(121),
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E7E7E7',
    marginTop: wh(28),
    marginLeft: ww(24),
  },
  nicknameTitle1: {
    fontSize: ww(16),
    fontWeight: '700',
    color: '#383838',
    position: 'absolute',
    marginTop: wh(21),
    marginLeft: ww(10),
  },
  nicknameText1: {
    fontSize: ww(16),
    fontWeight: '400',
    color: '#B3B3B3',
    marginTop: wh(21),
    marginLeft: ww(220),
  },
  arrowButton1: {
    width: ww(18),
    height: ww(18),
    marginTop: wh(21),
    marginLeft: ww(12),
  },
  separator1: {
    width: ww(310),
    height: StyleSheet.hairlineWidth,
    borderTopWidth: 1,
    borderColor: '#E7E7E7',
    marginTop: wh(20),
  },
  nicknameTitle2: {
    fontSize: ww(16),
    fontWeight: '700',
    color: '#383838',
    marginTop: wh(15),
    marginLeft: ww(12),
  },
  nicknameText2: {
    fontSize: ww(16),
    fontWeight: '400',
    color: '#B3B3B3',
    marginTop: wh(15),
    marginLeft: ww(205),
  },
  profileContainer2: {
    width: ww(312),
    height: wh(181),
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E7E7E7',
    marginTop: wh(20),
    marginLeft: ww(24),
  },
  nicknameTitle3: {
    fontSize: ww(16),
    fontWeight: '700',
    color: '#383838',
    marginTop: wh(21),
    marginLeft: ww(12),
  },
  arrowButton2: {
    width: ww(18),
    height: ww(18),
    marginTop: wh(25),
    marginLeft: ww(200),
  },
  separator2: {
    width: ww(311),
    height: StyleSheet.hairlineWidth,
    borderTopWidth: 1,
    borderColor: '#E7E7E7',
    marginTop: wh(20),
  },
  nicknameTitle4: {
    fontSize: ww(16),
    fontWeight: '700',
    color: '#383838',
    marginTop: wh(15),
    marginLeft: ww(12),
  },
  nicknameText3: {
    fontSize: ww(16),
    fontWeight: '400',
    color: '#B3B3B3',
    marginTop: wh(15),
    marginLeft: ww(112),
  },
  arrowButton3: {
    width: ww(18),
    height: ww(18),
    marginTop: wh(18),
    marginLeft: ww(14),
  },
  separator3: {
    width: ww(311),
    height: StyleSheet.hairlineWidth,
    borderTopWidth: 1,
    borderColor: '#E7E7E7',
    marginTop: wh(20),
  },
  nicknameTitle5: {
    fontSize: ww(16),
    fontWeight: '700',
    color: '#383838',
    marginTop: wh(15),
    marginLeft: ww(12),
  },
  arrowButton4: {
    width: ww(18),
    height: ww(18),
    marginTop: wh(20),
    marginLeft: ww(200),
  },
  profileContainer3: {
    width: ww(312),
    height: wh(61),
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E7E7E7',
    marginTop: 20,
    marginLeft: ww(24),
    marginBottom: wh(20),
  },
  nicknameTitle6: {
    fontSize: ww(16),
    fontWeight: '700',
    color: '#383838',
    marginTop: wh(16),
    marginLeft: ww(12),
  },
  arrowButton5: {
    width: ww(18),
    height: ww(18),
    marginTop: wh(20),
    marginLeft: ww(150),
  },
  nicknameContainer: {
    flexDirection: 'row',
  },
  nameContainer: {
    flexDirection: 'row',
  },
  myfamilyContainer: {
    flexDirection: 'row',
  },
  subscribeContainer: {
    flexDirection: 'row',
  },
  payContainer: {
    flexDirection: 'row',
  },
  snapshotContainer: {
    flexDirection: 'row',
  },
});
