import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import DropdownSelectBox from './selectBox';

export default function StatusProfile({Profile, name}) {
  return (
    <View style={styles.divider}>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Profile />
          <Text style={styles.font}>{name}</Text>
        </View>
        <View style={styles.rightContainer}>
          <DropdownSelectBox />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F2',
    paddingBottom: 8,
    marginBottom: 8,
  },
  container: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 38,
  },
  font: {
    fontSize: 14,
    fontWeight: '500',
    color: '#383838',
    lineHeight: 17.47,
  },
  leftContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  rightContainer: {
    justifyContent: 'center', 
  },
});
