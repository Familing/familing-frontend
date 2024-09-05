import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {resize} from 'react-native-responsive-sizer';

const ww = resize('ww', 360);
const wh = resize('wh', 800);

export default function Profile({profileImg, name, userId, navigation}) {
  const handleProfileClick = () => {
    navigation.navigate('LoveCardDetailScreen', {
      name: name,
      image: profileImg,
      userId: userId,
    });
  };

  return (
    <View style={styles.profileCard}>
      <TouchableOpacity onPress={handleProfileClick}>
        <Image source={{uri: profileImg}} style={styles.avatar} />
        <Text style={styles.name}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  profileCard: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginRight: ww(16),
  },
  avatar: {
    justifyContent: 'center',
    alignItems: 'center',
    width: ww(68),
    height: wh(68),
    marginBottom: wh(8),
    borderRadius: 50,
  },
  name: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: ww(12),
    fontWeight: '700',
    color: '#383838',
  },
});
