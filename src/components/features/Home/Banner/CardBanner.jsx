import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export const CardBanner = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Familing만의</Text>
        <Text style={styles.subtitle}>애정 카드 기능</Text>
        <Text style={styles.description}>간단하게 따뜻한 마음을</Text>
      </View>
      <Image
        source={require('../../../../src/assets/images/CardImage.png')}
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
    backgroundColor: '#383838',
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
  title: {
    fontSize: 20,
    fontWeight: 800,
    color: '#4D83F4',
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
    width: '190px',
    height: '110px',
    marginRight: 24,
  },
});
