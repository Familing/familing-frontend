import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {LogoIcon} from '../../icon/LogoIcon';
import {BellIcon} from '../../icon/BellIcon';
import {useNavigation} from '@react-navigation/native';
import {resize} from 'react-native-responsive-sizer';

const ww = resize('ww', 360);
const wh = resize('wh', 800);

export const CustomHeader = () => {
  const navigation = useNavigation();

  return (
    <View style={headerStyles.wrapper}>
      <View style={headerStyles.logo}>
        <LogoIcon />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('NotificationPage')}>
        <View style={headerStyles.badgeContainer}>
          <BellIcon />
          <View style={headerStyles.badge}>
            <Text style={headerStyles.badgeText}>5</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const headerStyles = StyleSheet.create({
  wrapper: {
    height: wh(64),
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logo: {
    top: wh(15),
    left: ww(24),
  },
  badgeContainer: {
    position: 'relative',
    top: wh(21),
    right: ww(24),
  },
  badge: {
    position: 'absolute',
    right: ww(-2),
    top: wh(-2),
    width: ww(12),
    height: ww(12),
    borderRadius: 50,
    backgroundColor: '#FF3434',
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    fontWeight: '600',
    color: '#fff',
    fontSize: ww(9),
    lineHeight: wh(11.23),
  },
});
