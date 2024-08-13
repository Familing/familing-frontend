import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  // Alert,
  TouchableOpacity,
} from 'react-native';
// import axios from 'axios';
// import Clipboard from '@react-native-clipboard/clipboard';
import Arrow from '@assets/images/register/arrow.png';
import CopyImage from '@assets/images/register/copyimage.png';
import PhotoCard1 from '@assets/images/photocard/photocard1.png';
import PhotoCard2 from '@assets/images/photocard/photocard2.png';
import PhotoCard3 from '@assets/images/photocard/photocard3.png';
import PhotoCard4 from '@assets/images/photocard/photocard4.png';

export default function MyFamilyScreen({navigation}) {
  const [inviteCode, setInviteCode] = useState(null);

  // const fetchInviteCode = async () => {
  //   try {
  //     const response = await axios.get('https://api.com'); // 초대 코드 api
  //     setInviteCode(response.data.inviteCode);
  //     Clipboard.setString(response.data.inviteCode);
  //   } catch (error) {
  //     Alert.alert('초대 코드를 가져오는 데 실패했습니다.');
  //     console.error(error);
  //   }
  // };

  useEffect(() => {
    setInviteCode();
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image source={Arrow} style={styles.arrowImage} />
      </TouchableOpacity>
      <Text style={styles.title}>우리 가족</Text>
      <Text style={styles.subtitle1}>가족 코드</Text>
      <View style={styles.inviteContainer}>
        <Text style={styles.inviteTitle}>{inviteCode}</Text>
        <TouchableOpacity onPress={setInviteCode} style={styles.copyContainer}>
          <Image source={CopyImage} style={styles.copyImage} />
          <Text style={styles.copyText}>초대 코드 복사하기</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.subtitle2}>가족 목록</Text>
      <View style={styles.familylistContainer}>
        <View style={styles.list1}>
          <Image source={PhotoCard1} style={styles.listImage} />
          <Text style={styles.listText}>행복한 부자아빠</Text>
        </View>
        <View style={styles.separator} />
        <View style={styles.list2}>
          <Image source={PhotoCard2} style={styles.listImage} />
          <Text style={styles.listText}>익순여왕님</Text>
        </View>
        <View style={styles.separator} />
        <View style={styles.list3}>
          <Image source={PhotoCard3} style={styles.listImage} />
          <Text style={styles.listText}>민지 공주</Text>
        </View>
        <View style={styles.separator} />
        <View style={styles.list4}>
          <Image source={PhotoCard4} style={styles.listImage} />
          <Text style={styles.listText}>이민형</Text>
        </View>
        <View style={styles.separator} />
      </View>
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
    left: 142,
  },
  subtitle1: {
    fontSize: 16,
    fontWeight: '800',
    color: '#383838',
    position: 'absolute',
    left: 24,
    marginTop: 60,
  },
  inviteContainer: {
    width: 312,
    height: 80,
    position: 'absolute',
    top: 30,
    left: 24,
    flexDirection: 'column',
    backgroundColor: '#B3B3B3',
  },
  inviteTitle: {
    fontSize: 20,
    fontWieght: '800',
    color: '#383838',
    position: 'absolute',
    top: 48,
    left: 86,
  },
  copyContainer: {
    flexDirection: 'row',
  },
  copyImage: {
    width: 10,
    height: 12,
    position: 'absolute',
    top: 83,
    left: 104,
  },
  copyTitle: {
    fontSize: 12,
    fontWeight: '400',
    color: '#B3B3B3',
    position: 'absolute',
    top: 81,
    left: 118,
  },
  subtitle2: {
    fontSize: 20,
    fontWieght: '800',
    color: '#383838',
    marginTop: 12,
    marginBottom: 12,
    position: 'absolute',
    left: 24,
  },
  familylistContainer: {
    width: 312,
    height: 208.17,
    flexDirection: 'column',
    gap: 8,
  },
  list1: {
    width: 143,
    height: 38,
    flexDirection: 'row',
    gap: 16,
  },
  listImage: {
    width: 38,
    height: 38,
  },
  listText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#383838',
  },
  separator: {
    width: 312,
    border: 1,
    borderColor: '#F3F3F3',
    alignSelf: 'center',
  },
  list2: {
    width: 116,
    height: 38,
    flexDirection: 'row',
    gap: 16,
  },
  list3: {
    width: 107,
    height: 38.17,
    flexDirection: 'row',
    gap: 16,
  },
  list4: {
    width: 91,
    height: 38,
    flexDirection: 'row',
    gap: 16,
  },
});
