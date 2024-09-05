import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Modal,
} from 'react-native';
import Arrow from '@assets/images/register/arrowImg.png';
import premium from '@assets/images/mypage/premium.png';
import {resize} from 'react-native-responsive-sizer';

const ww = resize('ww', 360);
const wh = resize('wh', 800);

export default function SubscribeScreen({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [warnVisible, setWarnVisible] = useState(false);

  const handleConfirm = () => {
    setWarnVisible(true);
  };

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
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <View style={styles.banner}>
            <Text style={styles.bannerText}>
              한달동안 프리미엄형 무료 체험해보기 {'\u2192'}
            </Text>
          </View>
        </TouchableOpacity>
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

      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <View style={styles.modalTitleContainer}>
              <Text style={styles.modalTitle}>무료 체험을 시작할까요?</Text>
            </View>
            <Text style={styles.modalMessage}>
              2024.07.17~2024.08.17까지{'\n'}무료로 사용할 수 있습니다.
            </Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => setModalVisible(false)}>
                <Text style={styles.buttonText1}>취소</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.confirmButton}
                onPress={handleConfirm}>
                <Text style={styles.buttonText2}>확인</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <Modal
        transparent={true}
        animationType="slide"
        visible={warnVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <View style={styles.modalTitleContainer}>
              <Text style={styles.modalTitle1}>중복 안내</Text>
            </View>
            <Text style={styles.modalMessage}>
              이전에 무료로{'\n'}체험한 기록이 있습니다.
            </Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => {
                  setWarnVisible(false);
                  setModalVisible(false);
                }}>
                <Text style={styles.buttonText1}>취소</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.confirmButton1}
                onPress={() => {
                  setWarnVisible(false);
                  setModalVisible(false);
                }}>
                <Text style={styles.buttonText2}>확인</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
    marginTop: wh(20),
    gap: ww(105),
  },
  arrowImage: {
    width: ww(20),
    height: wh(15),
    marginLeft: ww(24),
  },
  title: {
    fontSize: ww(20),
    fontWeight: '800',
    color: '#383838',
    marginTop: wh(-5),
  },
  typeContainer: {
    width: ww(312),
    height: wh(68),
    flexDirection: 'row',
    gap: ww(153),
    marginTop: wh(30),
  },
  subtitle: {
    fontSize: ww(16),
    fontWeight: '800',
    color: '#383838',
    marginLeft: ww(24),
  },
  premiumContainer: {
    marginLeft: ww(24),
    marginTop: wh(-40),
  },
  premium: {
    width: ww(80),
    height: wh(18),
  },
  bannerContainer: {
    width: ww(360),
    height: wh(72),
    backgroundColor: '#4D83F4',
    marginTop: wh(12),
  },
  banner: {
    marginLeft: ww(-15),
    marginTop: wh(25),
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerText: {
    fontSize: ww(18),
    fontWeight: '800',
    color: '#FFFFFF',
  },
  bannerContainer1: {
    width: ww(360),
    height: wh(370),
    flexDirection: 'column',
    backgroundColor: '#F8F8F8',
    gap: wh(10),
    marginTop: wh(16),
  },
  button: {
    width: ww(68),
    height: wh(20),
    borderRadius: 4,
    backgroundColor: '#4D83F4',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: ww(24),
    marginTop: wh(16),
  },
  buttonText: {
    fontSize: ww(12),
    fontWeight: '800',
    color: '#FFFFFF',
  },
  subtitleContainer: {
    marginLeft: ww(24),
  },
  subtitle1: {
    fontSize: ww(20),
    fontWeight: '800',
    color: '#383838',
  },
  subtitleContainer2: {
    marginTop: wh(10),
    marginLeft: ww(24),
  },
  subtitle2: {
    fontSize: ww(14),
    fontWeight: '800',
    color: '#383838',
  },
  descriptionContainer: {
    marginLeft: ww(24),
  },
  description: {
    fontSize: ww(12),
    fontWeight: '400',
    color: '#383838',
  },
  bannerBox: {
    width: ww(312),
    height: wh(72),
    borderRadius: 6,
    backgroundColor: '#383838',
    marginLeft: ww(24),
  },
  descriptionContainer2: {
    marginTop: wh(15),
    marginLeft: ww(24),
  },
  description2: {
    fontSize: ww(18),
    fontWeight: '800',
    color: '#FFFFFF',
  },
  descriptionContainer3: {
    marginTop: wh(3),
    marginLeft: ww(24),
  },
  description3: {
    fontSize: ww(12),
    fontWeight: '400',
    color: 'rgba(255, 255, 255, 0.5)',
  },
  button2: {
    width: ww(68),
    height: wh(20),
    borderRadius: 4,
    backgroundColor: '#FFBE00',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: ww(24),
    marginTop: wh(16),
  },
  bannerBox2: {
    width: ww(312),
    height: wh(72),
    borderRadius: 6,
    backgroundColor: '#4D83F4',
    marginLeft: ww(24),
  },
  subtitleContainer3: {
    marginTop: wh(10),
    marginLeft: ww(24),
    flexDirection: 'row',
    gap: ww(5),
  },
  hotContainer: {
    width: ww(38),
    height: wh(17),
    borderRadius: 40,
    backgroundColor: '#FC768D',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: wh(2),
  },
  hot: {
    fontSize: ww(10),
    fontWeight: '800',
    color: '#FFFFFF',
  },
  popularBadge: {
    width: ww(48),
    height: wh(20),
    backgroundColor: '#FFBE00',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    padding: wh(4),
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: ww(240),
    marginTop: wh(-59),
  },
  popularText: {
    fontSize: ww(10),
    fontWeight: '800',
    color: '#FFFFFF',
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: ww(312),
    height: wh(228),
    borderRadius: 6,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalTitleContainer: {
    marginBottom: wh(10),
  },
  modalTitle: {
    fontSize: ww(20),
    fontWeight: '700',
    color: '#4D83F4',
    textAlign: 'center',
  },
  modalMessage: {
    fontSize: ww(18),
    fontWeight: '500',
    color: '#383838',
    marginTop: wh(10),
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: wh(20),
    gap: ww(10),
  },
  cancelButton: {
    width: ww(136),
    height: wh(40),
    borderRadius: 38,
    backgroundColor: '#EEEEEE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText1: {
    fontSize: ww(18),
    fontWeight: '700',
    color: '#C5C5C5',
    textAlign: 'center',
  },
  confirmButton: {
    width: ww(136),
    height: wh(40),
    borderRadius: 38,
    backgroundColor: '#4D83F4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText2: {
    fontSize: ww(18),
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  modalTitle1: {
    fontSize: ww(20),
    fontWeight: '700',
    color: '#FF3434',
    textAlign: 'center',
  },
  confirmButton1: {
    width: ww(136),
    height: wh(40),
    borderRadius: 38,
    backgroundColor: '#FF3434',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
