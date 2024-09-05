import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {resize} from 'react-native-responsive-sizer';

const ww = resize('ww', 360);
const wh = resize('wh', 800);

export default function MonthCard({card, handleCardClick}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handleCardClick(card)}>
        <Image source={{uri: card.image_url}} style={styles.image2} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginRight: ww(6),
  },
  image2: {
    width: ww(104),
    height: wh(156),
  },
});
