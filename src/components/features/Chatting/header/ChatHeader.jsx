import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import searchIcon from '@assets/images/chatting/searchIcon.png';
import menuIcon from '@assets/images/chatting/menuIcon.png';

export default function ChatHeader({toggleIsSearch}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CHAT</Text>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={toggleIsSearch}>
          <Image source={searchIcon} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={menuIcon} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 64,
    backgroundColor: 'rgba(77, 131, 244, 1)',
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
    lineHeight: 24.96,
    color: 'rgba(255, 255, 255, 1)',
  },
  iconContainer: {
    flexDirection: 'row',
    gap: 24,
  },
  icon: {
    width: 24,
    height: 24,
  },
});
