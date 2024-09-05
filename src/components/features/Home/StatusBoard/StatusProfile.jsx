import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import DropdownSelectBox from './selectBox';
import StatusBtn from './StatusBtn';
import {resize} from 'react-native-responsive-sizer';

const ww = resize('ww', 360);
const wh = resize('wh', 800);

export default function StatusProfile({
  person,
  myName,
  selectedItem,
  setSelectedItem,
}) {
  return (
    <View style={styles.divider}>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Image source={{uri: person.image_url}} style={styles.profile} />
          <Text style={styles.font}>{person.nickname}</Text>
        </View>
        <View style={styles.rightContainer}>
          {person.nickname === myName ? (
            <DropdownSelectBox
              myStatus={person.status}
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
            />
          ) : (
            <StatusBtn nowStatus={person.status} />
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F2',
    paddingBottom: wh(8),
    marginBottom: wh(8),
  },
  container: {
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: wh(38),
  },
  font: {
    fontSize: ww(14),
    fontWeight: '500',
    color: '#383838',
    lineHeight: wh(17.47),
  },
  leftContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: ww(16),
  },
  rightContainer: {
    justifyContent: 'center',
  },
  profile: {
    borderRadius: 50,
    width: wh(38),
    height: wh(38),
  },
});
