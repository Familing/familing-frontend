import {FamilingBanner} from '../../components/features/Home/Banner/FamilingBanner';
import {SnapShot} from '../../components/features/Home/SnapShot/SnapShot';
import StatusBorad from '../../components/features/Home/StatusBoard/StatusBoard';
import {CustomHeader} from '../../components/features/Layout/CustomHeader';
import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';

export default function Home() {
  return (
    <View>
      <CustomHeader />
      <ScrollView>
        <CustomHeader />
        <FamilingBanner />
        <StatusBorad />
        <SnapShot />
        <View style={styles.space} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  space: {
    height: 64,
    width: '100%',
  },
});
