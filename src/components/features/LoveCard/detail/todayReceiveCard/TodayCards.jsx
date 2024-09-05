import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {resize} from 'react-native-responsive-sizer';

const ww = resize('ww', 360);
const wh = resize('wh', 800);

export default function TodayCards({handleCardClick, card}) {
  return (
    <TouchableOpacity onPress={() => handleCardClick(card)}>
      <Image source={{uri: card.image_url}} style={styles.image1} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  image1: {
    width: ww(140),
    height: wh(210),
    marginRight: ww(12),
  },
});
