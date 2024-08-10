import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Modal,
  TouchableOpacity,
} from 'react-native';

export default function MyPage({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);

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
      <Text style={styles.header}>마이페이지</Text>

      <View style={styles.profileImageContainer} onPress={openModal}>
        <Image
          style={styles.profileImage1}
          source={require('../../../assets/images/photocard/photocard1.png')}
        />
        <Image
          style={styles.profileImage2}
          source={require('../../../assets/images/button/switchbtn.png')}
        />
      </View>

      <View style={styles.profileContainer}>
        <Text style={styles.nicknameTitle1}>닉네임</Text>
        <Text style={styles.nicknameText1}>내가 둘째다</Text>
        <TouchableOpacity onPress={() => navigation.navigate('NicknameScreen')}>
          <Image
            style={styles.arrowButton1}
            source={require('../../../assets/images/button/arrowbtn.png')}
          />
        </TouchableOpacity>
        <View style={styles.separator1} />
        <Text style={styles.nicknameTitle2}>이름</Text>
        <Text style={styles.nicknameText2}>진서현</Text>
      </View>

      <View style={styles.profileContainer2}>
        <Text style={styles.nicknameTitle3}>우리 가족</Text>
        <Image
          style={styles.arrowButton2}
          source={require('../../../assets/images/button/arrowbtn.png')}
        />
        <View style={styles.separator2} />
        <Text style={styles.nicknameTitle4}>구독 모델</Text>
        <Text style={styles.nicknameText3}>프리미엄형</Text>
        <Image
          style={styles.arrowButton3}
          source={require('../../../assets/images/button/arrowbtn.png')}
        />
        <View style={styles.separator3} />
        <Text style={styles.nicknameTitle5}>결제 관리</Text>
        <Image
          style={styles.arrowButton4}
          source={require('../../../assets/images/button/arrowbtn.png')}
        />
      </View>

      <View style={styles.profileContainer3}>
        <Text style={styles.nicknameTitle6}>스냅샷 시간 설정</Text>
        <Image
          style={styles.arrowButton5}
          source={require('../../../assets/images/button/arrowbtn.png')}
        />
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>사진 업로드</Text>
          <TouchableOpacity style={styles.cameraButton} onPress={handleCamera}>
            <Image
              source={require('../../../assets/images/register/camera.png')}
              style={styles.cameraImage}
            />
            <Text style={styles.cameraText}>카메라</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.galleryButton}
            onPress={handleGallery}>
            <Image
              source={require('../../../assets/images/register/gallery.png')}
              style={styles.galleryImage}
            />
            <Text style={styles.galleryText}>앨범</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={closeModal}>
            <Image
              source={require('../../../assets/images/button/clearbtn.png')}
              style={styles.closeButton}
            />
          </TouchableOpacity>
        </View>
      </Modal>
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
  header: {
    fontSize: 20,
    fontWeight: '800',
    color: '#383838',
    position: 'absolute',
    top: 20,
    left: 24,
  },
  profileImageContainer: {
    width: 92,
    height: 92,
    position: 'absolute',
    top: 139,
    left: 134,
  },
  profileImage1: {
    width: 92,
    height: 92,
    position: 'absolute',
    top: 139,
    left: 134,
  },
  profileImage2: {
    width: 28,
    height: 28,
    position: 'absolute',
    top: 203,
    left: 198,
  },
  profileContainer: {
    width: 312,
    height: 121,
    position: 'absolute',
    top: 259,
    left: 24,
    borderRadius: 12,
    border: 1,
    borderColor: '#E7E7E7',
  },
  nicknameTitle1: {
    fontSize: 16,
    fontWeight: '700',
    color: '#383838',
    position: 'absolute',
    top: 280,
    left: 36,
  },
  nicknameText1: {
    fontSize: 16,
    fontWeight: '400',
    color: '#B3B3B3',
    position: 'absolute',
    top: 280,
    left: 228,
  },
  arrowButton1: {
    width: 18,
    height: 18,
    position: 'absolute',
    top: 299,
    left: 324,
  },
  separator: {
    width: 310,
    border: 1,
    position: 'absolute',
    top: 320,
    left: 25,
    borderColor: '#E7E7E7',
  },
  nicknameTitle2: {
    fontSize: 16,
    fontWeight: '700',
    color: '#383838',
    position: 'absolute',
    top: 340,
    left: 36,
  },
  nicknameText2: {
    fontSize: 16,
    fontWeight: '400',
    color: '#B3B3B3',
    position: 'absolute',
    top: 340,
    left: 282,
  },
  profileContainer2: {
    width: 312,
    height: 181,
    position: 'absolute',
    top: 400,
    left: 24,
    borderRadius: 12,
    border: 1,
    borderColor: '#E7E7E7',
  },
  nicknameTitle3: {
    fontSize: 16,
    fontWeight: '700',
    color: '#383838',
    position: 'absolute',
    top: 421,
    left: 36,
  },
  arrowButton2: {
    width: 18,
    height: 18,
    position: 'absolute',
    top: 440,
    left: 324,
  },
  separator2: {
    width: 311,
    border: 1,
    position: 'absolute',
    top: 461,
    left: 24,
    borderColor: '#E7E7E7',
  },
  nicknameTitle4: {
    fontSize: 16,
    fontWeight: '700',
    color: '#383838',
    position: 'absolute',
    top: 481,
    left: 37,
  },
  nicknameText3: {
    fontSize: 16,
    fontWeight: '400',
    color: '#B3B3B3',
    position: 'absolute',
    top: 481,
    left: 232,
  },
  arrowButton3: {
    width: 18,
    height: 18,
    position: 'absolute',
    top: 500,
    left: 324,
  },
  separator3: {
    width: 311,
    border: 1,
    position: 'absolute',
    top: 521,
    left: 24,
    borderColor: '#E7E7E7',
  },
  nicknameTitle5: {
    fontSize: 16,
    fontWeight: '700',
    color: '#383838',
    position: 'absolute',
    top: 541,
    left: 37,
  },
  arrowButton4: {
    width: 18,
    height: 18,
    position: 'absolute',
    top: 560,
    left: 324,
  },
  profileContainer3: {
    width: 312,
    height: 61,
    position: 'absolute',
    top: 601,
    left: 24,
    borderRadius: 12,
    border: 1,
    borderColor: '#E7E7E7',
  },
  nicknameTitle6: {
    fontSize: 16,
    fontWeight: '700',
    color: '#383838',
    position: 'absolute',
    top: 622,
    left: 37,
  },
  arrowButton5: {
    width: 18,
    height: 18,
    position: 'absolute',
    top: 641,
    left: 324,
  },
});
