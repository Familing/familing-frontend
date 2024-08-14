import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import plusbtn from '../../../../assets/images/photocard/plusbtn.png';

export const PhotoCard = ({isAddButton, imageSource}) => {
  return (
    <View>
      <TouchableOpacity style={styles.card}>
        {isAddButton ? (
          <Image source={plusbtn} style={styles.addImage} />
        ) : (
          <View style={styles.content}>
            <Text style={styles.description}>아직 업로드 전이에요!</Text>
          </View>
        )}
      </TouchableOpacity>
      <Image source={imageSource} style={styles.profile} />
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
