import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Profile from './Profile';
import {resize} from 'react-native-responsive-sizer';

const ww = resize('ww', 360);
const wh = resize('wh', 800);

export default function ReceiveCardSecton({familiy, navigation}) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title1}>내가 받은 애정 카드</Text>
        <Text style={styles.subtitle1}>
          가족들이 보낸 애정 카드를 모아놨어요.
        </Text>
      </View>
      <View style={styles.cardContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {familiy.map(person => (
            <Profile
              key={person.username}
              name={person.nickName}
              profileImg={person.profileImg}
              userId={person.username}
              navigation={navigation}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: wh(24),
    marginLeft: ww(24),
  },
  title1: {
    fontSize: ww(16),
    fontWeight: '800',
    color: '#383838',
  },
  subtitle1: {
    fontSize: ww(12),
    fontWeight: '500',
    color: '#383838',
    marginTop: wh(4),
  },
  cardContainer: {
    gap: wh(16),
    flexDirection: 'row',
    height: wh(91),
    marginTop: wh(16),
  },
});
