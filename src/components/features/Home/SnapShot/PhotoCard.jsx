import React, {useState} from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import plusbtn from '../../../../assets/images/photocard/plusbtn.png';
import {CameraAlert} from '@/components/common/CameraAlert';
import mom from '../../../../assets/images/photocard/photocard2.png';

export const PhotoCard = ({profile, uploadImage}) => {
  const [alertVisible, setAlertVisible] = useState(false);

  return (
    <View>
      {uploadImage === 'EMPTY' ? (
        <TouchableOpacity
          onPress={() => setAlertVisible(true)}
          style={styles.card}>
          <Image source={plusbtn} style={styles.addImage} />
        </TouchableOpacity>
      ) : (
        <View style={styles.card}>
          <Image style={styles.cardImg} source={{uri: uploadImage}} />
        </View>
      )}
      <CameraAlert
        visible={alertVisible}
        onClose={() => setAlertVisible(false)}
      />
      <Image source={profile ? profile : mom} style={styles.profile} />
    </View>
  );
};

const styles = StyleSheet.create({
  profile: {
    position: 'absolute',
    top: 4,
    left: 4,
    width: 38,
    height: 38,
    borderRadius: 50,
  },
  card: {
    display: 'flex',
    width: 150,
    height: 150,
    backgroundColor: '#E7E7E7',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardImg: {
    width: 150,
    height: 150,
    borderRadius: 6,
  },
  content: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {
    fontSize: 12,
    fontWeight: '700',
    color: '#CECECE',
  },
  addImage: {
    width: 21,
    height: 21,
  },
});
