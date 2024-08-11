import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Modal,
} from 'react-native';
import {ProgressIndicator} from '../ProgressIndicator';

export const RegisterStep4 = ({navigation}) => {
  const [code, setCode] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handleConfirm = async () => {
    navigation.navigate(''); // MainPage로 이동
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleCamera = () => {
    // 카메라 기능 구현
    closeModal();
  };

  const handleGallery = () => {
    // 갤러리 기능 구현
    closeModal();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          source={require('@assets/images/register/arrow.png')}
          style={styles.arrowImage}
        />
      </TouchableOpacity>
      <ProgressIndicator currentStep={3} />
      <View style={styles.imageContainer}>
        <TouchableOpacity onPress={openModal}>
          <Image
            source={require('@assets/images/avatar.png')}
            style={styles.image}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Familing에서 사용할 이름</Text>
      <TextInput
        style={styles.input}
        value={code}
        onChangeText={setCode}
        placeholder="ex) 슈퍼맨 아빠, 귀염둥이 막내"
        placeholderTextColor="#C5C5C5"
        keyboardType="default"
      />
      <TouchableOpacity style={styles.button} onPress={handleConfirm}>
        <Text style={styles.buttonText}>확인</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>사진 업로드</Text>
          <TouchableOpacity style={styles.cameraButton} onPress={handleCamera}>
            <Image
              source={require('@assets/images/register/camera.png')}
              style={styles.cameraImage}
            />
            <Text style={styles.cameraText}>카메라</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.galleryButton}
            onPress={handleGallery}>
            <Image
              source={require('@assets/images/register/gallery.png')}
              style={styles.galleryImage}
            />
            <Text style={styles.galleryText}>앨범</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={closeModal}>
            <Image
              source={require('@assets/images/button/clearbtn.png')}
              style={styles.closeButton}
            />
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

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
    top: 20,
    left: 24,
    marginBottom: 16,
  },
  titleContainer: {
    alignItems: 'center',
    marginTop: 252,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#4D83F4',
  },
  input: {
    width: 312,
    height: 32,
    fontSize: 16,
    fontWeight: '400',
    borderBottomWidth: 312,
    borderBottomHeight: 4,
    borderBottomColor: '#4D83F4',
    borderBottomLeftRadius: 21,
    borderBottomRightRadius: 21,
  },
  button: {
    width: 312,
    height: 40,
    borderRadius: 70,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  modalContainer: {
    width: 312,
    height: 153,
    position: 'absolute',
    top: 324,
    left: 24,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#4D83F4',
    position: 'absolute',
    top: 351,
    left: 133,
  },
  cameraButton: {
    width: 136,
    height: 40,
    position: 'absolute',
    top: 410,
    left: 41,
    backgroundColor: '#EEEEEE',
    borderRadius: 38,
  },
  cameraImage: {
    width: 24,
    height: 24,
    position: 'absolute',
    top: 418,
    left: 75,
  },
  cameraText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#383838',
    position: 'absolute',
    top: 420,
    left: 107,
  },
  galleryButton: {
    width: 136,
    height: 40,
    position: 'absolute',
    top: 410,
    left: 183,
    backgroundColor: '#4D83F4',
    borderRadius: 38,
  },
  galleryImage: {
    width: 24,
    height: 24,
    position: 'absolute',
    top: 418,
    left: 219,
  },
  galleryText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#383838',
    position: 'absolute',
    top: 420,
    left: 251,
  },
  closeButton: {
    width: 24,
    height: 24,
    position: 'absolute',
    top: 332,
    left: 304,
  },
});
