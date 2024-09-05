import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {resize} from 'react-native-responsive-sizer';

const ww = resize('ww', 360);
const wh = resize('wh', 800);

export default function SendProfile({userId, name, image, handleAvatarClick}) {
  return (
    <View>
      <TouchableOpacity
        style={styles.avatarContent}
        onPress={() => handleAvatarClick(name, userId)}>
        <Image source={{uri: image}} style={styles.avatarImage} />
        <Text style={styles.avatarName}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  avatarContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: wh(8),
  },
  avatarImage: {
    borderRadius: 50,
    width: ww(64),
    height: wh(64),
  },
  avatarName: {
    fontSize: ww(12),
    fontWeight: '700',
    color: '#383838',
  },
});
