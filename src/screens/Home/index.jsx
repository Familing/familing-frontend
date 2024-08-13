import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import BannerImg from '@assets/images/banner/BannerImage.png';

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Familing</Text>
      <Text style={styles.subtitle}>더 가까운 가족이 되는 중</Text>
      <Image source={BannerImg} style={styles.image} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('RegisterStep1')}>
        <Text style={styles.buttonText}>카카오로 시작하기</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4D83F4',
  },
  title: {
    fontSize: 50,
    fontWeight: '800',
    color: '#fff',
    textAlign: 'center',
    marginTop: 164,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '400',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 40,
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    marginVertical: 20,
  },
  button: {
    backgroundColor: '#F9D62E',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
  },
});
