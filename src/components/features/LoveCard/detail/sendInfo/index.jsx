import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {resize} from 'react-native-responsive-sizer';

const ww = resize('ww', 360);
const wh = resize('wh', 800);

export default function SendInfo({image, name}) {
  return (
    <View style={styles.subContainer}>
      <Image source={{uri: image}} style={styles.avatar} />
      <Text style={styles.subtitle}>
        보낸 사람:<Text style={styles.name}>{name}</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  subContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: wh(24),
  },
  avatar: {
    borderRadius: 50,
    width: ww(74),
    height: ww(74),
    marginBottom: wh(8),
  },
  subtitle: {
    fontSize: ww(18),
    fontWeight: '800',
    color: '#4D83F4',
  },
  name: {
    fontSize: ww(18),
    fontWeight: '400',
    color: '#383838',
  },
});
