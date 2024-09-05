import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import ChatImage from '@assets/images/banner/ChatImage.png';
import {resize} from 'react-native-responsive-sizer';

const ww = resize('ww', 360);
const wh = resize('wh', 800);

export const ChatBanner = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerWrapper}>
        <View>
          <View>
            <Text style={styles.title}>Familing만의</Text>
            <Text style={styles.subtitle}>공감봇과 애정봇</Text>
          </View>
          <Text style={styles.description}>AI가 도와드릴게요!</Text>
        </View>
        <Image source={ChatImage} style={styles.image} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8F8F8',
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
    gap: ww(36),
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
    color: '#383838',
    lineHeight: wh(24.96),
  },
  description: {
    fontSize: ww(12),
    fontWeight: '500',
    color: '#383838',
    lineHeight: wh(14.98),
    marginTop: wh(4.23),
  },
  image: {
    width: ww(149),
    height: wh(107.11),
  },
});
