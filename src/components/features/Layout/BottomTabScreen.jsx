import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Home from '../../../screens/Home/Home';
import Chatting from '../../../screens/Chatting/Chatting';
import LoveCard from '../../../screens/LoveCard/LoveCard';
import MyPage from '../../../screens/MyPage/MyPage';
import { CustomTabBar } from './CustomTabBar';

export const BottomTabScreen = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator tabBar={props => <CustomTabBar {...props} />}>
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
        name="LoveCard"
        component={LoveCard}
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
