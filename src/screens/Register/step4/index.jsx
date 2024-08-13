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
import Avatar from '@assets/images/photocard/photocard1.png';
import Camera from '@assets/images/register/camera.png';
import Gallery from '@assets/images/register/gallery.png';
import ClearButton from '@assets/images/button/clearbtn.png';
import SwitchButton from '@assets/images/button/switchbtn.png';

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
      <ProgressIndicator currentStep={3} />
      <View style={styles.imageContainer}>
        <TouchableOpacity onPress={openModal} style={styles.buttonContainer}>
          <Image source={Avatar} style={styles.image} />
          <Image style={styles.image2} source={SwitchButton} />
        </TouchableOpacity>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Familing에서 사용할 이름</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="ex) 슈퍼맨 아빠, 귀염둥이 막내"
          placeholderTextColor="#C5C5C5"
          value={code}
          onChangeText={setCode}
        />
        <View style={styles.line} />
      </View>
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
            <Image source={Camera} style={styles.cameraImage} />
            <Text style={styles.cameraText}>카메라</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.galleryButton}
            onPress={handleGallery}>
            <Image source={Gallery} style={styles.galleryImage} />
            <Text style={styles.galleryText}>앨범</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={closeModal}>
            <Image source={ClearButton} style={styles.closeButton} />
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    justifyContent: 'center',
    marginTop: 75,
    marginLeft: 124,
  },
  image: {
    width: 112,
    height: 112,
  },
  image2: {
    width: 28,
    height: 28,
    marginLeft: 80,
    position: 'absolute',
    top: 90,
  },
  titleContainer: {
    marginTop: 32,
    marginLeft: 24,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#383838',
  },
  inputContainer: {
    flex: 1,
    marginTop: 20,
  },
  input: {
    width: 312,
    height: 32,
    fontSize: 16,
    fontWeight: '400',
    color: '#C5C5C5',
    paddingHorizontal: 5,
    paddingVertical: 1,
    marginLeft: 24,
  },
  line: {
    width: 312,
    borderWidth: 2,
    borderColor: '#4D83F4',
    borderRadius: 12,
    marginLeft: 24,
    marginTop: 8,
  },
  button: {
    width: 312,
    height: 40,
    borderRadius: 70,
    backgroundColor: '#4D83F4',
    marginBottom: 300,
    marginLeft: 24,
    justifyContent: 'center',
    alignItems: 'center',
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
