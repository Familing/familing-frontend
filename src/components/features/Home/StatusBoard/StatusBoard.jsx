import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import StatusProfile from './StatusProfile';
import {Dad_profile} from '../../../icon/Dad_profile';

export default function StatusBorad() {
  return (
    <View style={{backgroundColor: 'orange'}}>
      <View style={styles.container}>
        <Text style={styles.title}>상태보기</Text>
        <Text style={styles.subTitle}>현재 가족들의 상태를 볼 수 있어요.</Text>
        <StatusProfile Profile={Dad_profile} name="행복한 부자아빠" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
    marginTop: 24,
    marginHorizontal: 24,
  },
  title: {
    fontSize: 16,
    fontWeight: '800',
    color: '#383838',
  },
  subTitle: {
    fontSize: 12,
    fontWeight: '400',
    color: '#383838',
    marginTop: 3.89
  },
});
