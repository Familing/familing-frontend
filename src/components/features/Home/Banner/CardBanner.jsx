import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import CardImage from '../../../../assets/images/banner/CardImage.png';
import {resize} from 'react-native-responsive-sizer';

const ww = resize('ww', 360);
const wh = resize('wh', 800);

export const CardBanner = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerWrapper}>
        <View>
          <View>
            <Text style={styles.title}>Familing만의</Text>
            <Text style={styles.subtitle}>애정 카드 기능</Text>
          </View>
          <Text style={styles.description}>간단하게 따뜻한 마음을</Text>
        </View>
        <Image source={CardImage} style={styles.image} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#383838',
    width: ww(360),
    height: wh(210),
    paddingHorizontal: ww(24),
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: ww(6),
  },
  title: {
    fontSize: ww(20),
    fontWeight: '800',
    color: '#4D83F4',
    lineHeight: wh(24.96),
  },
  subtitle: {
    fontSize: ww(20),
    fontWeight: '800',
    color: '#FFFFFF',
    lineHeight: wh(24.96),
  },
  description: {
    fontSize: ww(12),
    fontWeight: '500',
    color: '#FFFFFF',
    lineHeight: wh(14.98),
    marginTop: wh(4.23),
  },
  image: {
    width: ww(190),
    height: wh(110),
  },
});
