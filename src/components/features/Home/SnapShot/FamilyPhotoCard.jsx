import {BlurView} from '@react-native-community/blur';
import React from 'react';
import {View, Image, Text, StyleSheet, ImageBackground} from 'react-native';

export const FamilyPhotoCard = ({imageSource, snapshot, selectedImage}) => {
  return (
    <View style={styles.content}>
      {snapshot ? (
        <View style={styles.imgaeContainer}>
          <Image source={snapshot} style={styles.cardImg} />
        </View>
      ) : (
        <Text style={styles.description}>아직 업로드 전이에요!</Text>
      )}
      <Image source={imageSource} style={styles.profile} />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroud: {
    backgroundColor: 'rgba(151, 151, 151, 0.6)',
  },
  profile: {
    position: 'absolute',
    top: 4,
    left: 4,
    width: 38,
    height: 38,
  },
  absolute: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    borderRadius: 6,
  },
  imgaeContainer: {
    width: '100%',
    height: '100%',
    borderRadius: 6,
    overflow: 'hidden',
  },
  cardImg: {
    width: '100%',
    height: '100%',
    borderRadius: 6,
  },
  content: {
    width: 150,
    height: 150,
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  description: {
    fontSize: 12,
    fontWeight: '700',
    color: '#CECECE',
  },
});
