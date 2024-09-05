import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {resize} from 'react-native-responsive-sizer';

const ww = resize('ww', 360);
const wh = resize('wh', 800);

export default function Profile({profile, name}) {
  return (
    <View style={styles.container}>
      <Image source={{uri: profile}} style={styles.profile} />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: wh(50),
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  profile: {
    width: ww(38),
    height: ww(38),
    borderRadius: 50,
  },
  name: {
    fontWeight: '500',
    fontSize: ww(14),
    lineHeight: wh(17.47),
    color: '#383838',
    marginLeft: ww(18.23),
  },
});
