import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import MonthCard from './MonthCard';
import {resize} from 'react-native-responsive-sizer';

const ww = resize('ww', 360);
const wh = resize('wh', 800);

export default function MonthReceiveCard({monthCards, handleCardClick}) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title2}>지난 날 받은 애정 카드(최근 30일)</Text>
        <Text style={styles.subtitle2}>
          최근 30일간 받은 카드를 모아봤어요.
        </Text>
      </View>

      <View style={styles.scrollCotainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {monthCards === undefined ? (
            <Text style={styles.text}>최근 30일간 받은 카드가 없어요!</Text>
          ) : (
            monthCards.map(card => (
              <MonthCard
                key={card.id}
                card={card.lovecardResponse}
                handleCardClick={handleCardClick}
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
    marginTop: wh(28),
    marginLeft: ww(24),
    marginBottom: wh(20),
  },
  title2: {
    fontSize: ww(16),
    fontWeight: '800',
    color: '#383838',
    marginBottom: wh(4),
  },
  subtitle2: {
    fontSize: ww(12),
    fontWeight: '500',
    color: '#383838',
  },
  scrollContainer: {
    alignItems: 'center',
    marginTop: wh(16),
    height: wh(156),
  },
  text: {
    marginTop: wh(64),
    color: '#C5C5C5',
  },
});
