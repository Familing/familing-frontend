import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import mom from '../../../../assets/images/photocard/photocard2.png';
import {resize} from 'react-native-responsive-sizer';

const ww = resize('ww', 360);
const wh = resize('wh', 800);

export const FamilyPhotoCard = ({profile, snapshot}) => {
  return (
    <View style={styles.content}>
      {snapshot === 'EMPTY' ? (
        <Text style={styles.description}>아직 업로드 전이에요!</Text>
      ) : (
        <View style={styles.imgaeContainer}>
          <Image
            source={{
              uri: snapshot,
            }}
            style={styles.cardImg}
          />
        </View>
      )}
      <Image source={{uri: profile}} style={styles.profile} />
    </View>
  );
};

const styles = StyleSheet.create({
  profile: {
    position: 'absolute',
    top: wh(4),
    left: ww(4),
    width: ww(38),
    height: wh(38),
    borderRadius: 50,
  },
  imageContainer: {
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
    width: ww(150),
    height: wh(150),
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  description: {
    fontSize: ww(12),
    fontWeight: '700',
    color: '#C5C5C5',
  },
});
