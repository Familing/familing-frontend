import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Home from '../../../screens/Home/index';
import Chatting from '../../../screens/Chatting/Chatting';
import LoveCardMainScreen from '../../../screens/LoveCard/main';
import MyPage from '../../../screens/MyPage/index';
import {CustomTabBar} from './CustomTabBar';

const Tab = createBottomTabNavigator();

export const BottomTabScreen = () => {
  return (
    <Tab.Navigator tabBar={CustomTabBar}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{tabBarLabel: '홈', headerShown: false}}
      />
      <Tab.Screen
        name="Chatting"
        component={Chatting}
        options={{tabBarLabel: '채팅', headerShown: false}}
      />
      <Tab.Screen
        name="LovecardMainScreen"
        component={LoveCardMainScreen}
        options={{tabBarLabel: '애정카드', headerShown: false}}
      />
      <Tab.Screen
        name="MyPage"
        component={MyPage}
        options={{tabBarLabel: '마이페이지', headerShown: false}}
      />
    </Tab.Navigator>
  );
};
