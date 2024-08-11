import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import SendInfo from '../../../components/features/LoveCard/detail/sendInfo';
import TodayReceiveCard from '../../../components/features/LoveCard/detail/todayReceiveCard';
import MonthReceiveCard from '../../../components/features/LoveCard/detail/monthReceiveCard';
import savebtn2 from '@assets/images/button/savebtn2.png';
import clearbtn2 from '@assets/images/button/clearbtn2.png';
import savebtn from '@assets/images/button/savebtn.png';


export default function LoveCardDetailScreen({route, navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [confirmationVisible, setConfirmationVisible] = useState(false);
  const [saveButtonImage, setSaveButtonImage] = useState(savebtn);

  const {name, image} = route.params;

  const handleCancelClick = () => {
    setModalVisible(false);
  };

  const handleSaveClick = () => {
    setSaveButtonImage(savebtn2);
    setConfirmationVisible(true);
  };

  return (
    <View style={styles.container}>
      <SendInfo image={image} name={name} />
      <TodayReceiveCard />
      <MonthReceiveCard
        setSelectedCard={setSelectedCard}
        setModalVisible={setModalVisible}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <TouchableOpacity
            style={styles.clearButton}
            onPress={handleCancelClick}>
            <Image source={clearbtn2} />
          </TouchableOpacity>
          <Image source={selectedImage} style={styles.modalImage} />
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
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
    color: '#383838',
  },

  swiperConwtainer: {
    width: 434,
    height: 156,
    flexDirection: 'row',

    gap: 6,
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
  },
  modalImage: {
    width: 264,
    height: 394,
  },
  confirmationContainer: {
    width: 312,
    height: 52,
    borderRadius: 10,
    backgroundColor: '#383838',
  },
  confirmationText: {
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    color: '#FFFFFF',
  },
  boldText: {
    fontWeight: '700',
  },
});
