import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export const FamilingBanner = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title1}>Familing</Text>
          <Text style={styles.title2}>이</Text>
        </View>
        <Text style={styles.subtitle}>추구하는 세상은?</Text>
        <Text style={styles.description}>소통이 활발한 가족을 바래요.</Text>
      </View>
      <Image
        source={require('@assets/images/banner/BannerImage.png')}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#4D83F4',
    width: '360px',
    height: '210px',
    padding: '24px',
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
    fontWeight: 800,
    color: '#FFBE00',
  },
  title2: {
    fontSize: 20,
    fontWeight: 800,
    color: '#FFFFFF',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 800,
    color: '#FFFFFF',
  },
  description: {
    fontSize: 12,
    fontWeight: 500,
    color: '#FFFFFF',
  },
  image: {
    width: '160px',
    height: '160px',
    marginRight: 24,
  },
});
