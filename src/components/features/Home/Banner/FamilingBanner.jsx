import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import BannerImage from '../../../../assets/images/banner/BannerImage.png';

export const FamilingBanner = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title1}>Bridge</Text>
          <Text style={styles.title2}>가</Text>
        </View>
        <Text style={styles.subtitle}>추구하는 세상은?</Text>
        <Text style={styles.description}>소통이 활발한 가족을 바래요.</Text>
      </View>
      <Image
        source={BannerImage}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#4D83F4',
    width: 360,
    height: 210,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    marginBottom: 24,
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
  titleContainer: {
    flexDirection: 'row',
  },
  title1: {
    fontSize: 20,
    fontWeight: '800',
    color: '#FFBE00',
  },
  title2: {
    fontSize: 20,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  description: {
    fontSize: 12,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  image: {
    width: 160,
    height: 160,
    marginRight: 24,
  },
});
