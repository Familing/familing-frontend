import {BlurView} from '@react-native-community/blur';
import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

export const FamilyPhotoCard = ({imageSource, snapshot, selectedImage}) => {
  return (
    <View>
      <View style={styles.content}>
        {snapshot ? (
          <View style={styles.imgaeContainer}>
            <Image source={snapshot} style={styles.cardImg} />
            {!selectedImage && (
              <BlurView
                style={styles.absolute}
                blurType="xlight"
                blurAmount={30}
                overlayColor="rgba(65, 65, 65, 0.7)"
              />
            )}
          </View>
        ) : (
          <Text style={styles.description}>아직 업로드 전이에요!</Text>
        )}
      </View>
      <Image source={imageSource} style={styles.profile} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 150,
    height: 150,
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
    left: 0,
    width: '100%',
    height: '100%',
    borderRadius: 6,
  },
  imgaeContainer: {
    backgroundColor: 'rgba(151, 151, 151, 0.6)',
    width: 150,
    height: 150,
    position: 'relative',
    borderRadius: 6,
    overflow: 'hidden',
  },
  cardImg: {
    width: 150,
    height: 150,
    borderRadius: 6,
  },
  content: {
    flex: 1,
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
