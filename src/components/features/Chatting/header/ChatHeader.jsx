import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import searchIcon from '@assets/images/chatting/searchIcon.png';
import menuIcon from '@assets/images/chatting/menuIcon.png';
import {resize} from 'react-native-responsive-sizer';

const ww = resize('ww', 360);
const wh = resize('wh', 800);

export default function ChatHeader({setIsSearch, navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CHAT</Text>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => setIsSearch(true)}>
          <Image source={searchIcon} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image source={menuIcon} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    zIndex: 9,
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: ww(24),
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: wh(64),
    backgroundColor: 'rgba(77, 131, 244, 1)',
    // shadow
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: wh(2)},
    shadowOpacity: 0.1,
    shadowRadius: wh(10),
    elevation: 5,
  },
  title: {
    fontSize: ww(20),
    fontWeight: '800',
    lineHeight: wh(24.96),
    color: 'rgba(255, 255, 255, 1)',
  },
  iconContainer: {
    flexDirection: 'row',
    gap: ww(24),
  },
  icon: {
    width: ww(24),
    height: wh(24),
  },
});
