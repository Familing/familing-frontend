import {FamilingBanner} from '@/components/features/Home/Banner/FamilingBanner';
import {SnapShot} from '@/components/features/Home/SnapShot/SnapShot';
import StatusBorad from '@/components/features/Home/StatusBoard/StatusBoard';
import React from 'react';
import {ScrollView, View} from 'react-native';

export default function Home({navigation}) {
  return (
    <View>
      <ScrollView>
        <FamilingBanner />
        <StatusBorad />
        <SnapShot />
      </ScrollView>
    </View>
  );
}
