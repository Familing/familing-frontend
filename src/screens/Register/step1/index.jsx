import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {ProgressIndicator} from '../ProgressIndicator';
import {resize} from 'react-native-responsive-sizer';

const ww = resize('ww', 360);
const wh = resize('wh', 800);

export const RegisterStep1 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ProgressIndicator currentStep={1} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>가족 그룹</Text>
        <Text style={styles.subtitle}>이 있나요?</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.noButton}
          onPress={() => navigation.navigate('RegisterStep3')}>
          <Text style={styles.noText}>아니요</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.yesButton}
          onPress={() => navigation.navigate('RegisterStep2')}>
          <Text style={styles.yesText}>예</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: wh(200),
  },
  title: {
    fontSize: ww(24),
    fontWeight: '700',
    color: '#4D83F4',
  },
  subtitle: {
    fontSize: ww(24),
    fontWeight: '700',
    color: '#383838',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: wh(32),
    gap: ww(10),
    width: ww(140),
    height: wh(40),
    marginLeft: ww(36),
  },
  noButton: {
    backgroundColor: '#EEEEEE',
    borderRadius: 70,
    paddingVertical: wh(10),
    paddingHorizontal: ww(49),
    justifyContent: 'center',
    alignItems: 'center',
  },
  noText: {
    fontSize: ww(15),
    fontWeight: '700',
    color: '#CECECE',
    textAlign: 'center',
  },
  yesButton: {
    backgroundColor: '#4D83F4',
    borderRadius: 70,
    paddingVertical: wh(10),
    paddingHorizontal: ww(62),
    justifyContent: 'center',
    alignItems: 'center',
  },
  yesText: {
    fontSize: ww(15),
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
  },
});
