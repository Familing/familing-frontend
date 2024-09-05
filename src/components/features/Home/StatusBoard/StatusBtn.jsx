import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {resize} from 'react-native-responsive-sizer';

const ww = resize('ww', 360);
const wh = resize('wh', 800);

export default function StatusBtn({nowStatus}) {
  return (
    <View style={styles.btn}>
      <Text style={styles.text}>{nowStatus}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    display: 'flex',
    paddingHorizontal: ww(14),
    justifyContent: 'center',
    height: wh(28),
    borderRadius: 40,
    //shadow
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    backgroundColor: '#FFFFFF',
  },
  text: {
    fontSize: ww(12),
    fontWeight: '500',
    color: '#4D83F4',
  },
});
