import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export const ChatBanner = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Familing만의</Text>
        <Text style={styles.subtitle}>공감봇과 애정봇</Text>
        <Text style={styles.description}>AI가 도와드릴게요!</Text>
      </View>
      <Image
        source={require('@assets/images/banner/ChatImage.png')}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#F8F8F8',
    width: '360px',
    height: '210px',
    padding: '24px',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    marginBottom: 24,
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
  title: {
    fontSize: 20,
    fontWeight: 800,
    color: '#4D83F4',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 800,
    color: '#383838',
  },
  description: {
    fontSize: 12,
    fontWeight: 500,
    color: '#383838',
  },
  image: {
    width: '190px',
    height: '110px',
    marginRight: 24,
  },
});
