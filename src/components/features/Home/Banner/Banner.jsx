import React from 'react';
import {StyleSheet, View} from 'react-native';
import Swiper from 'react-native-swiper';
import {FamilingBanner} from './FamilingBanner';
import {CardBanner} from './CardBanner';
import {ChatBanner} from './ChatBanner';

export const Banner = () => {
  return (
    <Swiper
    style={{width: 260, height: 210}}
      showsButtons
      loop={false}
      dot={<View style={styles.dot} />}
      activeDot={<View style={styles.activeDot} />}
      index={0}>
      <FamilingBanner />
      <CardBanner />
      <ChatBanner />
    </Swiper>
  );
};

const styles = StyleSheet.create({
  dot: {
    backgroundColor: '#FFFFFF',
    width: 4,
    height: 4,
    borderRadius: 4,
    margin: 3,
  },
  activeDot: {
    backgroundColor: '#FFBE00',
    width: 20,
    height: 4,
    borderRadius: 16,
    margin: 3,
  },
});
