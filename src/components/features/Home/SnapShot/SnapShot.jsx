import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {PhotoCard} from './PhotoCard';
import dad from '@assets/images/photocard/photocard1.png';
import mom from '@assets/images/photocard/photocard2.png';
import daughter from '@assets/images/photocard/photocard3.png';
import son from '@assets/images/photocard/photocard4.png';

export const SnapShot = () => {
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
          <Text style={styles.boxText}>아직 설정한 시간이 되지 않았어요!</Text>
        </View>
        <View style={styles.cardContainer}>
          <View style={styles.row}>
            <PhotoCard
              isAddButton={true}
              imageSource={dad}
              style={styles.cardImage}
            />
            <PhotoCard imageSource={mom} style={styles.cardImage} />
          </View>
          <View style={styles.row}>
            <PhotoCard imageSource={daughter} style={styles.cardImage} />
            <PhotoCard imageSource={son} style={styles.cardImage} />
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
    width: 71,
    height: 20,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 40,
    opacity: 1,
    shadowColor: '#0000001A',
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 2,
    backgroundColor: '#FFFFFF',
  },
  buttonText: {
    fontSize: 10,
    fontWeight: '600',
    color: '#383838',
  },
  subtitle: {
    fontSize: 12,
    fontWeight: '400',
    color: '#383838',
    marginTop: 4,
  },
  box: {
    width: 228,
    height: 28,
    paddingVertical: 6,
    paddingHorizontal: 25,
    borderRadius: 5,
    backgroundColor: '#C5C5C5',
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
