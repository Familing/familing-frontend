import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Swiper from 'react-native-swiper';
import {FamilingBanner} from './FamilingBanner';
import {CardBanner} from './CardBanner';
import {ChatBanner} from './ChatBanner';
import {resize} from 'react-native-responsive-sizer';

const ww = resize('ww', 360);
const wh = resize('wh', 800);

export const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <Swiper
      style={styles.container}
      showsButtons={false}
      loop={true}
      dot={<View style={currentIndex === 2 ? styles.blackDot : styles.dot} />}
      activeDot={<View style={styles.activeDot} />}
      paginationStyle={styles.pagination}
      index={0}
      autoplay={true}
      autoplayTimeout={4}
      onIndexChanged={index => setCurrentIndex(index)}>
      <FamilingBanner />
      <CardBanner />
      <ChatBanner />
    </Swiper>
  );
};

const styles = StyleSheet.create({
  container: {
    height: wh(210),
  },
  dot: {
    backgroundColor: '#FFFFFF',
    width: ww(4),
    height: ww(4),
    borderRadius: 50,
    marginHorizontal: ww(2),
  },
  blackDot: {
    backgroundColor: '#383838',
    width: ww(4),
    height: ww(4),
    borderRadius: 50,
    marginHorizontal: ww(2),
  },
  activeDot: {
    backgroundColor: '#FFBE00',
    width: ww(20),
    height: wh(4),
    borderRadius: wh(16),
    marginHorizontal: ww(2),
  },
  pagination: {
    bottom: wh(9),
    justifyContent: 'center',
  },
});
