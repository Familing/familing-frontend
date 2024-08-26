import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MyPage from '@/screens/MyPage';
import NicknameScreen from '@/screens/MyPage/Nickname';
import MyFamilyScreen from '@/screens/MyPage/MyFamily';
import SnapshotTimeScreen from '@/screens/MyPage/SnapshotTime';

const MyPageStack = createStackNavigator();

export const MyPageNavigator = () => {
  return (
    <MyPageStack.Navigator initialRouteName="MyPage">
      <MyPageStack.Screen
        name="MyPage"
        component={MyPage}
        options={{headerShown: false}}
      />
      <MyPageStack.Screen
        name="Nickname"
        component={NicknameScreen}
        options={{headerShown: false}}
      />
      <MyPageStack.Screen
        name="MyFamiliy"
        component={MyFamilyScreen}
        options={{headerShown: false}}
      />
      <MyPageStack.Screen
        name="SnapshotTime"
        component={SnapshotTimeScreen}
        options={{headerShown: false}}
      />
    </MyPageStack.Navigator>
  );
};
