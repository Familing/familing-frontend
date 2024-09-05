import React from 'react';
import {View, StyleSheet} from 'react-native';
import {resize} from 'react-native-responsive-sizer';

const ww = resize('ww', 360);
const wh = resize('wh', 800);

export const ProgressIndicator = ({currentStep}) => {
  return (
    <View style={styles.progressContainer}>
      {[1, 2, 3].map(step => (
        <View
          key={step}
          style={[
            styles.stepIndicator,
            currentStep === step ? styles.activeStep : styles.inactiveStep,
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  progressContainer: {
    flexDirection: 'row',
    marginTop: wh(20),
    marginLeft: ww(24),
  },
  stepIndicator: {
    width: ww(8),
    height: ww(8),
    borderRadius: 5,
    marginHorizontal: ww(8),
  },
  activeStep: {
    width: ww(40),
    borderRadius: 32,
    backgroundColor: '#4D83F4',
  },
  inactiveStep: {
    backgroundColor: '#D3D3D3',
  },
});
