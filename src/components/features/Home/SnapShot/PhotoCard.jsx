import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import plusbtn from '../../../../assets/images/photocard/plusbtn.png';

export const PhotoCard = ({isAddButton}) => {
  return (
    <TouchableOpacity style={styles.card}>
      {isAddButton ? (
        <Image source={plusbtn} style={styles.addImage} />
      ) : (
        <View style={styles.content}>
          <Text style={styles.description}>아직 업로드 전이에요!</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 150,
    height: 150,
    backgroundColor: '#E7E7E7',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: 150,
    height: 150,
    backgroundColor: '#F8F8F8',
  },
  description: {
    fontSize: 12,
    fontWeight: '700',
    color: '#C5C5C5',
  },
  addImage: {
    width: '21',
    height: '21',
  },
});
