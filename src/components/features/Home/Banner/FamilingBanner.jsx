import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import BannerImage from '../../../../assets/images/banner/BannerImage.png';
import {resize} from 'react-native-responsive-sizer';

const ww = resize('ww', 360);
const wh = resize('wh', 800);

export const FamilingBanner = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerWrapper}>
        <View>
          <Text style={styles.title2}>
            <Text style={styles.title1}>Famiing</Text>이{'\n'}
            추구하는 세상은?
          </Text>
          <Text style={styles.description}>소통이 활발한 가족을 바래요.</Text>
        </View>
        <Image source={BannerImage} style={styles.image} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4D83F4',
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
    gap: ww(13),
  },
  textContainer: {
    marginBottom: wh(24),
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
  title1: {
    fontSize: ww(20),
    fontWeight: '800',
    color: '#FFBE00',
    lineHeight: wh(24.96),
  },
  title2: {
    fontSize: ww(20),
    fontWeight: '800',
    color: '#FFFFFF',
    lineHeight: wh(24.96),
  },
  subtitle: {
    fontSize: ww(20),
    fontWeight: '800',
    color: '#FFFFFF',
  },
  description: {
    fontSize: ww(12),
    fontWeight: '500',
    color: '#FFFFFF',
    lineHeight: wh(14.98),
    marginTop: wh(4.23),
  },
  image: {
    width: ww(160),
    height: wh(160),
  },
});
