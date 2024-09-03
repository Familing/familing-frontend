import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import defaultImg from '@assets/images/photocard/photocard1.png';

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
        <Image source={profileImg | defaultImg} style={styles.avatar} />
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
    marginRight: 16,
  },
  avatar: {
    width: 68,
    height: 68,
    marginBottom: 8,
  },
  name: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 12,
    fontWeight: '700',
    color: '#383838',
  },
});
