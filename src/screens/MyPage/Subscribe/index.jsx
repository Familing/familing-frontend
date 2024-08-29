import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import Arrow from '@assets/images/register/arrowImg.png';
import premium from '@assets/images/mypage/premium.png';

export default function SubscribeScreen({navigation}) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.titleContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={Arrow} style={styles.arrowImage} />
        </TouchableOpacity>
        <Text style={styles.title}>구독 모델</Text>
      </View>
      <View style={styles.typeContainer}>
        <Text style={styles.subtitle}>이용중인 타입</Text>
      </View>

      <View style={styles.premiumContainer}>
        <Image source={premium} style={styles.premium} />
      </View>

      <View style={styles.bannerContainer}>
        <View style={styles.banner}>
          <Text style={styles.bannerText}>
            한달동안 프리미엄형 무료 체험해보기 {'\u2192'}
          </Text>
        </View>
      </View>

      <View style={styles.bannerContainer1}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>일반형</Text>
        </View>
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle1}>기본 기능만 챙겨봤어요.</Text>
        </View>
        <View style={styles.subtitleContainer2}>
          <Text style={styles.subtitle2}>상태 보기 기능</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>
            일하는 중, 쉬는 중, 숙면 중 3개를 제공받아요.
          </Text>
        </View>
        <View style={styles.subtitleContainer2}>
          <Text style={styles.subtitle2}>애정 카드 기능</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>
            Familing에서 만든 6개의 애정 카드를 제공받아요.
          </Text>
        </View>
        <View style={styles.subtitleContainer2}>
          <Text style={styles.subtitle2}>AI봇</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>애정봇 AI를 제공받아요.</Text>
        </View>
        <View style={styles.bannerBox}>
          <View style={styles.descriptionContainer2}>
            <Text style={styles.description2}>월 2,900원 X 가족 수</Text>
          </View>
          <View style={styles.descriptionContainer3}>
            <Text style={styles.description3}>(월 1회 정기 결제)</Text>
          </View>
        </View>
      </View>

      <View style={styles.bannerContainer1}>
        <View style={styles.button2}>
          <Text style={styles.buttonText}>프리미엄형</Text>
        </View>
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle1}>더 풍부하게 준비해봤어요.</Text>
        </View>
        <View style={styles.subtitleContainer2}>
          <Text style={styles.subtitle2}>상태 보기 기능</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>
            더욱 다양한 상태를 제공해드려요.
          </Text>
        </View>
        <View style={styles.subtitleContainer2}>
          <Text style={styles.subtitle2}>애정 카드 기능</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>
            Familing에서 만든 24개의 애정 카드를 제공받아요.
          </Text>
        </View>
        <View style={styles.subtitleContainer3}>
          <Text style={styles.subtitle2}>AI봇</Text>
          <View style={styles.hotContainer}>
            <Text style={styles.hot}>HOT</Text>
          </View>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>
            애정봇 AI와 공감봇 AI를 제공받아요.
          </Text>
        </View>
        <View style={styles.bannerBox2}>
          <View style={styles.descriptionContainer2}>
            <Text style={styles.description2}>월 3,900원 X 가족 수</Text>
          </View>
          <View style={styles.descriptionContainer3}>
            <Text style={styles.description3}>(월 1회 정기 결제)</Text>
          </View>
          <View style={styles.popularBadge}>
            <Text style={styles.popularText}>인기 만점</Text>
          </View>
        </View>
      </View>
    </ScrollView>
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
    marginTop: 30,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#383838',
    marginLeft: 24,
  },
  premiumContainer: {
    marginLeft: 24,
    marginTop: -40,
  },
  premium: {
    width: 80,
    height: 18,
  },
  bannerContainer: {
    width: 360,
    height: 72,
    backgroundColor: '#4D83F4',
    marginTop: 12,
  },
  banner: {
    marginLeft: -15,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerText: {
    fontSize: 18,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  bannerContainer1: {
    width: 360,
    height: 370,
    flexDirection: 'column',
    backgroundColor: '#F8F8F8',
    gap: 10,
    marginTop: 16,
  },
  button: {
    width: 68,
    height: 20,
    borderRadius: 4,
    backgroundColor: '#4D83F4',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 24,
    marginTop: 16,
  },
  buttonText: {
    fontSize: 12,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  subtitleContainer: {
    marginLeft: 24,
  },
  subtitle1: {
    fontSize: 20,
    fontWeight: '800',
    color: '#383838',
  },
  subtitleContainer2: {
    marginTop: 10,
    marginLeft: 24,
  },
  subtitle2: {
    fontSize: 14,
    fontWeight: '800',
    color: '#383838',
  },
  descriptionContainer: {
    marginLeft: 24,
  },
  description: {
    fontSize: 12,
    fontWeight: '400',
    color: '#383838',
  },
  bannerBox: {
    width: 312,
    height: 72,
    borderRadius: 6,
    backgroundColor: '#383838',
    marginLeft: 24,
  },
  descriptionContainer2: {
    marginTop: 15,
    marginLeft: 24,
  },
  description2: {
    fontSize: 18,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  descriptionContainer3: {
    marginTop: 3,
    marginLeft: 24,
  },
  description3: {
    fontSize: 12,
    fontWeight: '400',
    color: 'rgba(255, 255, 255, 0.5)',
  },
  button2: {
    width: 68,
    height: 20,
    borderRadius: 4,
    backgroundColor: '#FFBE00',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 24,
    marginTop: 16,
  },
  bannerBox2: {
    width: 312,
    height: 72,
    borderRadius: 6,
    backgroundColor: '#4D83F4',
    marginLeft: 24,
  },
  subtitleContainer3: {
    marginTop: 10,
    marginLeft: 24,
    flexDirection: 'row',
    gap: 5,
  },
  hotContainer: {
    width: 38,
    height: 17,
    borderRadius: 40,
    backgroundColor: '#FC768D',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 2,
  },
  hot: {
    fontSize: 10,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  popularBadge: {
    width: 48,
    height: 20,
    backgroundColor: '#FFBE00',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    padding: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 240,
    marginTop: -59,
  },
  popularText: {
    fontSize: 10,
    fontWeight: '800',
    color: '#FFFFFF',
  },
});
