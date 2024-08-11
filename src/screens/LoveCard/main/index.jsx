import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import Swiper from 'react-native-swiper';
import {CardBanner} from '../../../components/features/Home/Banner/CardBanner';
import PhotoCard1 from '@assets/images/photocard/photocard1.png';
import PhotoCard2 from '@assets/images/photocard/photocard2.png';
import PhotoCard3 from '@assets/images/photocard/photocard3.png';
import LoveCard1 from '@assets/images/lovecard/lovecard1.png';
import LoveCard2 from '@assets/images/lovecard/lovecard2.png';
import LoveCard3 from '@assets/images/lovecard/lovecard3.png';
import LoveCard4 from '@assets/images/lovecard/lovecard4.png';
import ClearButton from '@assets/images/button/clearbtn.png';

export default function LoveCardMainScreen({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [showAvatars, setShowAvatars] = useState(false);
  const [confirmationVisible, setConfirmationVisible] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState('');

  const handleProfileClick = () => {
    navigation.navigate('LoveCardDetailScreen', {
      name: '익순여왕님',
      image: PhotoCard2,
    });
  };

  const handleCardClick = card => {
    setSelectedCard(card);
    setModalVisible(true);
  };

  const handleSendClick = () => {
    setModalVisible(false);
    setShowAvatars(true);
  };

  const handleCancelClick = () => {
    setModalVisible(false);
  };

  const handleAvatarClick = name => {
    setSelectedAvatar(name);
    setConfirmationVisible(true);
  };

  let cardImage;
  switch (selectedCard) {
    case 'card1':
      cardImage = LoveCard1;
      break;
    case 'card2':
      cardImage = LoveCard2;
      break;
    case 'card3':
      cardImage = LoveCard3;
      break;
    default:
      cardImage = LoveCard1;
  }

  return (
    <View style={styles.container}>
      <CardBanner />
      <Text style={styles.title1}>내가 받은 애정 카드</Text>
      <Text style={styles.subtitle1}>
        가족들이 보낸 애정 카드를 모아놨어요.
      </Text>
      <View style={styles.cardContainer}>
        <View style={styles.profileCard}>
          <TouchableOpacity
            style={styles.profileCard}
            onPress={handleProfileClick}>
            <Image source={PhotoCard2} style={styles.avatar} />
            <Text style={styles.name}>익순여왕님</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.profileCard}>
          <Image source={PhotoCard3} style={styles.avatar} />
          <Text style={styles.name}>민지공주</Text>
        </View>
        <View style={styles.profileCard}>
          <Image source={PhotoCard1} style={styles.avatar} />
          <Text style={styles.name}>이민형</Text>
        </View>
      </View>

      <Text style={styles.title2}>애정 카드 보내기</Text>
      <Text style={styles.subtitle2}>
        오늘 Familing이 고심해서 고른 12장의 카드예요!
      </Text>
      <View style={styles.swiperContainer}>
        <Swiper style={styles.wrapper} showsButtons={true} autoplay={true}>
          <TouchableOpacity onPress={() => handleCardClick('lovecard1')}>
            <Image source={LoveCard1} style={styles.image} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleCardClick('lovecard2')}>
            <Image source={LoveCard2} style={styles.image} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleCardClick('lovecard3')}>
            <Image source={LoveCard3} style={styles.image} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleCardClick('lovecard4')}>
            <Image source={LoveCard4} style={styles.image} />
          </TouchableOpacity>
        </Swiper>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <Image source={cardImage} style={styles.modalImage} />
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={handleSendClick}
              style={styles.sendButton}>
              <Text style={styles.sendButtonText}>가족에게 보내기</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleCancelClick}
              style={styles.cancelButton}>
              <Text style={styles.cancelButtonText}>취소</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {showAvatars && (
        <View style={styles.avatarContainer}>
          <Image style={styles.clearButton} source={ClearButton} />
          <View style={styles.avatarBox}>
            <TouchableOpacity
              style={styles.avatarContent}
              onPress={() => handleAvatarClick('익순여왕님')}>
              <Image source={PhotoCard2} style={styles.avatarImage} />
              <Text style={styles.avatarName}>익순여왕님</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.avatar}
              onPress={() => handleAvatarClick('민지공주')}>
              <Image source={PhotoCard3} style={styles.avatarImage} />
              <Text style={styles.avatarName}>민지공주</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.avatar}
              onPress={() => handleAvatarClick('이민형')}>
              <Image source={PhotoCard1} style={styles.avatarImage} />
              <Text style={styles.avatarName}>이민형</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {confirmationVisible && (
        <View style={styles.confirmationContainer}>
          <Text style={styles.confirmationText}>
            <Text style={styles.boldText}>{selectedAvatar}</Text>님께 전송이
            완료되었습니다.
          </Text>
        </View>
      )}
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
  title1: {
    fontSize: 16,
    fontWeight: '800',
    color: '#383838',
    marginTop: 24,
    marginLeft: 24,
  },
  subtitle1: {
    fontSize: 12,
    fontWeight: '500',
    color: '#383838',
    marginTop: 4,
    marginLeft: 24,
  },
  cardContainer: {
    width: 236,
    height: 91,
    gap: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profileCard: {
    width: 68,
    height: 91,
    flexDirection: 'column',
    gap: 8,
  },
  avatar: {
    width: 68,
    height: 68,
  },
  name: {
    fontSize: 12,
    fontWeight: '700',
    color: '#383838',
  },
  title2: {
    fontSize: 16,
    fontWeight: '800',
    color: '#383838',
    marginTop: 28,
    marginLeft: 24,
  },
  subtitle2: {
    fontSize: 12,
    fontWeight: '500',
    color: '#383838',
    marginTop: 4,
    marginLeft: 24,
  },
  swiperContainer: {
    width: 444,
    heigth: 210,
    marginTop: 16,
    marginLeft: 24,
    gap: 12,
  },
  image: {
    width: 140,
    height: 210,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalImage: {
    width: 264,
    height: 394,
    position: 'absolute',
    top: 150,
    left: 48,
    marginBottom: 20,
  },
  buttonContainer: {
    width: 156,
    height: 88,
    position: 'absolute',
    top: 564,
    left: 100,
    flexDirection: 'column',
    gap: 8,
  },
  sendButton: {
    width: 156,
    height: 40,
    borderRadius: 40,
    backgroundColor: '#4D83F4',
  },
  sendButtonText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  cancelButton: {
    width: 156,
    height: 40,
    borderRadius: 40,
    backgroundColor: '#FFFFFF',
  },
  cancelButtonText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#383838',
  },
  avatarContainer: {
    width: 360,
    height: 172,
    position: 'absolute',
    top: 630,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8.4,
    elevation: 5,
  },
  clearButton: {
    width: 24,
    height: 24,
    position: 'absolute',
    top: 638,
    left: 328,
  },
  avatarBox: {
    width: 224,
    height: 74,
    flexDirection: 'row',
    position: 'absolute',
    top: 673,
    left: 24,
    gap: 16,
  },
  avatarContent: {
    width: 64,
    height: 87,
    flexDirection: 'column',
    gap: 8,
  },
  avatarImage: {
    width: 64,
    height: 64,
  },
  avatarName: {
    fontSize: 12,
    fontWeight: '700',
    color: '#383838',
  },
  confirmationContainer: {
    width: 312,
    height: 52,
    position: 'absolute',
    top: 690,
    left: 336,
    borderRadius: 10,
    backgroundColor: '#383838',
  },
  confirmationText: {
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    color: '#FFFFFF',
    position: 'absolute',
    top: 706,
    left: 55,
  },
  boldText: {
    fontWeight: '700',
  },
});
