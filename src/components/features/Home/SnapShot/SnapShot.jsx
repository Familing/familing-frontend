import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {PhotoCard} from './PhotoCard';
import dad from '@assets/images/photocard/photocard1.png';
import mom from '@assets/images/photocard/photocard2.png';
import daughter from '@assets/images/photocard/photocard3.png';
import son from '@assets/images/photocard/photocard4.png';
import {FamilyPhotoCard} from './FamilyPhotoCard';
import snapshotImg1 from '@assets/images/snapshot/snapshotImg1.png';
import snapshotImg2 from '@assets/images/snapshot/snapshotImg2.png';

export const SnapShot = () => {
  const [selectedImage, setSelectedImage] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View>
          <View style={styles.header}>
            <Text style={styles.title}>SnapShot</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>이전 사진보기</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.subtitle}>
            설정한 시간의 순간을 사진을 찍어 공유해주세요.
          </Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.boxText}>
            주제: 오늘의 점심메뉴는 무엇인가요?
          </Text>
        </View>
        <View style={styles.cardContainer}>
          <View style={styles.row}>
            <PhotoCard
              imageSource={dad}
              selectedImage={selectedImage}
              setSelectedImage={setSelectedImage}
            />
            <FamilyPhotoCard
              imageSource={mom}
              snapshot={snapshotImg1}
              selectedImage={selectedImage}
            />
          </View>
          <View style={styles.row}>
            <FamilyPhotoCard
              imageSource={daughter}
              snapshot={snapshotImg2}
              selectedImage={selectedImage}
            />
            <FamilyPhotoCard
              imageSource={son}
              snapshot={false}
              selectedImage={selectedImage}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  wrapper: {
    marginTop: 20,
    marginHorizontal: 24,
    marginBottom: 6,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '800',
    color: '#383838',
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
  },
  buttonText: {
    fontSize: 10,
    fontWeight: '600',
    lineHeight: 12.48,
    color: '#383838',
  },
  subtitle: {
    fontSize: 12,
    fontWeight: '400',
    color: '#383838',
    marginTop: 4,
  },
  box: {
    paddingHorizontal: 24,
    paddingVertical: 6,
    height: 28,
    width: 228,
    borderRadius: 5,
    backgroundColor: '#FFBE00',
    marginTop: 16,
  },
  boxText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#fff',
  },
  cardContainer: {
    flexDirection: 'column',
    marginTop: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
    gap: 12,
  },
  cardImage: {
    width: 38,
    height: 38,
    marginTop: 4,
    marginLeft: 4,
  },
});
