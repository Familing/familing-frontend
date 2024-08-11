import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import shineCard from '../../../../../assets/images/lovecard/lovecard5.png';

export default function TodayReceiveCard() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title1}>오늘 받은 애정 카드</Text>
        <Text style={styles.subtitle1}>오늘 받은 애정 카드는 이거예요!</Text>
      </View>
      <View style={styles.scrollContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Image source={shineCard} style={styles.image1} />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 24,
    marginTop: 32,
  },
  title1: {
    fontSize: 16,
    fontWeight: '800',
    color: '#383838',
    marginBottom: 4,
  },
  subtitle1: {
    fontSize: 12,
    fontWeight: '500',
    color: '#383838',
  },
  scrollContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  image1: {
    width: 140,
    height: 210,
  },
});
