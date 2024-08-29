import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import Arrow from '@assets/images/register/arrowImg.png';
import premium from '@assets/images/mypage/premium.png';

export default function PayScreen({navigation}) {
  //   const [nickname, setNickname] = useState('내가 둘째다');

  //   const handleChange = async () => {
  //     try {
  //       await AsyncStorage.setItem('nickname', nickname);
  //       navigation.goBack('MyPage');
  //     } catch (error) {
  //       console.error('닉네임 저장 실패:', error);
  //     }
  //   };
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={Arrow} style={styles.arrowImage} />
        </TouchableOpacity>
        <Text style={styles.title}>결제 관리</Text>
      </View>
      <View style={styles.typeContainer}>
        <Text style={styles.subtitle}>이용중인 타입</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>타입 변경하기</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.premiumContainer}>
        <Image source={premium} style={styles.premium} />
      </View>

      <View style={styles.typeContainer2}>
        <Text style={styles.subtitle}>결제 수단</Text>
        <TouchableOpacity style={styles.button2}>
          <Text style={styles.buttonText}>결제 수단 변경하기</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Text style={styles.cardText}>카드</Text>
        </View>
        <View style={styles.cardNumber}>
          <Text style={styles.cardText}>3xx4 - 4xx4 - xxxx -xxxx</Text>
        </View>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.text}>※ 다음 예상 결제일은 8월 17일 입니다.</Text>
      </View>

      <TouchableOpacity
        style={styles.changeButton}
        onPress={() => {
          navigation.navigate('MyPage');
        }}>
        <Text style={styles.changeButtonText}>변경하기</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titleContainer: {
    flexDirection: 'row',
    marginTop: 20,
    gap: 105,
  },
  arrowImage: {
    width: 20,
    height: 15,
    marginLeft: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
    color: '#383838',
    marginTop: -5,
  },
  typeContainer: {
    width: 312,
    height: 68,
    flexDirection: 'row',
    gap: 153,
    marginTop: 59,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#383838',
    marginLeft: 24,
  },
  premiumContainer: {
    flexDirection: 'row',
    marginLeft: 24,
    marginTop: -40,
  },
  premium: {
    width: 80,
    height: 18,
  },
  typeContainer2: {
    flexDirection: 'row',
    gap: 153,
    marginTop: 35,
  },
  button2: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 20,
    borderRadius: 40,
    //shadow
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    backgroundColor: '#FFFFFF',
    marginTop: -2,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 71,
    height: 20,
    borderRadius: 40,
    //shadow
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    backgroundColor: '#FFFFFF',
    marginTop: -2,
  },
  buttonText: {
    fontSize: 10,
    fontWeight: '600',
    lineHeight: 12.48,
    color: '#383838',
  },
  changeButton: {
    width: 312,
    height: 40,
    borderRadius: 6,
    backgroundColor: '#4D83F4',
    marginTop: 270,
    marginLeft: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  changeButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  cardContainer: {
    width: 312,
    height: 48,
    borderRadius: 6,
    backgroundColor: '#F2F2F2',
    marginLeft: 24,
    marginTop: 20,
    flexDirection: 'row',
  },
  card: {
    marginLeft: 20,
    justifyContent: 'center',
  },
  cardText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#383838',
  },
  cardNumber: {
    marginLeft: 70,
    justifyContent: 'center',
  },
  textContainer: {
    marginTop: 5,
    marginLeft: 24,
  },
  text: {
    fontSize: 12,
    fontWeight: '700',
    color: 'rgba(197, 197, 197, 0.8)',
  },
});
