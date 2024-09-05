import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import TodayCards from './TodayCards';
import {resize} from 'react-native-responsive-sizer';

const ww = resize('ww', 360);
const wh = resize('wh', 800);

export default function TodayReceiveCard({todayCards, handleCardClick}) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title1}>오늘 받은 애정 카드</Text>
        <Text style={styles.subtitle1}>오늘 받은 애정 카드는 이거예요!</Text>
      </View>

      <View style={styles.scrollContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {todayCards == undefined ? (
            <Text style={styles.text}>오늘 받은 카드가 없어요!</Text>
          ) : (
            todayCards.map(card => (
              <TodayCards
                key={card.id}
                handleCardClick={handleCardClick}
                card={card.lovecardResponse}
              />
            ))
          )}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: ww(24),
    marginTop: wh(32),
  },
  title1: {
    fontSize: ww(16),
    fontWeight: '800',
    color: '#383838',
    marginBottom: wh(4),
  },
  subtitle1: {
    fontSize: ww(12),
    fontWeight: '500',
    color: '#383838',
  },
  scrollContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: wh(16),
    height: wh(210),
  },
  text: {
    marginTop: wh(90),
    color: '#C5C5C5',
  },
});
