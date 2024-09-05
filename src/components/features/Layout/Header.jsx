import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import backIcon from '@assets/images/header/backIcon.png';
import {resize} from 'react-native-responsive-sizer';

const ww = resize('ww', 360);
const wh = resize('wh', 800);

export default function Header({title, navigation}) {
  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleGoBack} style={styles.iconContainer}>
        <Image source={backIcon} style={styles.backIcon} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: wh(64),
    backgroundColor: '#ffffff',
  },
  iconContainer: {
    position: 'absolute',
    top: wh(22),
    left: ww(22),
  },
  backIcon: {
    width: ww(24),
    height: ww(24),
  },
  title: {
    textAlign: 'center',
    fontSize: ww(20),
    fontWeight: '800',
    color: '#383838',
  },
});
