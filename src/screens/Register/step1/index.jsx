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
    marginTop: wh * 0.25,
  },
  title: {
    fontSize: ww * 0.0667,
    fontWeight: '700',
    color: '#4D83F4',
  },
  subtitle: {
    fontSize: ww * 0.0667,
    fontWeight: '700',
    color: '#383838',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: wh * 0.04,
    gap: ww * 0.0278,
    width: ww * 0.3889,
    height: wh * 0.05,
    marginLeft: ww * 0.1,
  },
  noButton: {
    backgroundColor: '#EEEEEE',
    borderRadius: 70,
    paddingVertical: wh * 0.0125,
    paddingHorizontal: ww * 0.1361,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noText: {
    fontSize: ww * 0.0417,
    fontWeight: '700',
    color: '#CECECE',
    textAlign: 'center',
  },
  yesButton: {
    backgroundColor: '#4D83F4',
    borderRadius: 70,
    paddingVertical: wh * 0.0125,
    paddingHorizontal: ww * 0.1722,
    justifyContent: 'center',
    alignItems: 'center',
  },
  yesText: {
    fontSize: ww * 0.0417,
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
  },
});
