import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import backIcon from '@assets/images/header/backIcon.png';

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
    height: 64,
    backgroundColor: '#ffffff',
  },
  iconContainer: {
    position: 'absolute',
    top: 22,
    left: 24,
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '800',
    color: '#383838',
  },
});
