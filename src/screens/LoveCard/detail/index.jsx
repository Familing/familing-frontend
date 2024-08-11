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

export default function LoveCardDetailScreen({route, navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [confirmationVisible, setConfirmationVisible] = useState(false);
  const [saveButtonImage, setSaveButtonImage] = useState(
    require('@assets/images/button/savebtn.png'),
  );
  const {name, image} = route.params;

  const handleCardClick = card => {
    setSelectedCard(card);
    setModalVisible(true);
  };

  const handleCancelClick = () => {
    setModalVisible(false);
  };

  const handleSaveClick = () => {
    setSaveButtonImage(require('@assets/images/button/savebtn2.png'));
    setConfirmationVisible(true);
  };

  let cardImage;
  switch (selectedCard) {
    case 'card1':
      cardImage = require('@assets/images/lovecard/lovecard1.png');
      break;
    case 'card2':
      cardImage = require('@assets/images/lovecard/lovecard2.png');
      break;
    case 'card3':
      cardImage = require('@assets/images/lovecard/lovecard3.png');
      break;
    default:
      cardImage = require('@assets/images/lovecard/lovecard1.png');
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          source={require('@assets/images/register/arrow.png')}
          style={styles.arrowImage}
        />
      </TouchableOpacity>
      <Text style={styles.title}>내가 받은 애정 카드</Text>
      <View style={styles.subContainer}>
        <Image source={image} style={styles.avatar} />
        <Text style={styles.subtitle}>보낸 사람:{name}</Text>
      </View>
      <Text style={styles.title1}>오늘 받은 애정 카드</Text>
      <Text style={styles.subtitle1}>오늘 받은 애정 카드는 이거예요!</Text>
      <Image
        source={require('@assets/images/photocard/photocard5.png')}
        style={styles.image1}
      />

      <Text style={styles.title2}>지난 날 받은 애정 카드(최근 30일)</Text>
      <Text style={styles.subtitle2}>최근 30일간 받은 카드를 모아봤어요.</Text>
      <View style={styles.swiperContainer}>
        <Swiper style={styles.wrapper} showsButtons={true} autoplay={true}>
          <TouchableOpacity onPress={() => handleCardClick('lovecard1')}>
            <Image
              source={require('@assets/images/lovecard/lovecard1.png')}
              style={styles.image2}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleCardClick('lovecard2')}>
            <Image
              source={require('@assets/images/lovecard/lovecard2.png')}
              style={styles.image2}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleCardClick('lovecard3')}>
            <Image
              source={require('@assets/images/lovecard/lovecard3.png')}
              style={styles.image2}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleCardClick('lovecard4')}>
            <Image
              source={require('@assets/images/lovecard/lovecard4.png')}
              style={styles.image2}
            />
          </TouchableOpacity>
        </Swiper>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <TouchableOpacity
            style={styles.clearButton}
            onPress={handleCancelClick}>
            <Image source={require('@assets/images/button/clearbtn2.png')} />
          </TouchableOpacity>
          <Image source={cardImage} style={styles.modalImage} />
          <TouchableOpacity style={styles.saveButton} onPress={handleSaveClick}>
            <Image source={saveButtonImage} />
          </TouchableOpacity>
        </View>
      </Modal>

      {confirmationVisible && (
        <View style={styles.confirmationContainer}>
          <Text style={styles.confirmationText}>
            <Text style={styles.boldText}>갤러리</Text>에
            <Text style={styles.boldText}>저장</Text>
            되었습니다.
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
  title: {
    fontSize: 20,
    fontWeight: '800',
    color: '#383838',
    position: 'absolute',
    top: 21,
    left: 103,
  },
  subContainer: {
    width: 152,
    height: 104,
    position: 'absolute',
    top: 88,
    left: 100,
  },
  avatar: {
    width: 74,
    height: 74,
    position: 'absolute',
    top: 88,
    left: 139,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '400',
    color: '#4D83F4',
  },
  title1: {
    fontSize: 16,
    fontWeight: '800',
    color: '#383838',
    position: 'absolute',
    top: 224,
    left: 24,
  },
  subtitle1: {
    fontSize: 12,
    fontWeight: '500',
    color: '#383838',
    position: 'absolute',
    top: 248,
    left: 24,
  },
  image1: {
    width: 140,
    height: 210,
    position: 'absolute',
    top: 279,
    left: 24,
    marginBottom: 28,
  },
  title2: {
    fontSize: 16,
    fontWeight: '800',
    color: '#383838',
    position: 'absolute',
    top: 517,
    left: 24,
  },
  subtitle2: {
    fontSize: 12,
    fontWeight: '500',
    color: '#383838',
    position: 'absolute',
    top: 541,
    left: 24,
  },
  swiperContainer: {
    width: 434,
    height: 156,
    flexDirection: 'row',
    position: 'absolute',
    top: 572,
    left: 24,
    gap: 6,
  },
  image2: {
    width: 104,
    height: 156,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  clearButton: {
    width: 24,
    height: 24,
    position: 'absolute',
    top: 20,
    left: 24,
  },
  modalImage: {
    width: 264,
    height: 394,
    position: 'absolute',
    top: 231,
    left: 48,
  },
  confirmationContainer: {
    width: 312,
    height: 52,
    position: 'absolute',
    top: 402,
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
    top: 418,
    left: 99,
  },
  boldText: {
    fontWeight: '700',
  },
});
