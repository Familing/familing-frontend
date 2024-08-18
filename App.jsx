import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Home from './src/screens/Home';
import Chatting from './src/screens/Chatting/Chatting';
import LoveCardMainScreen from './src/screens/LoveCard/main';
import LoveCardDetailScreen from './src/screens/LoveCard/detail';
import MyPage from './src/screens/MyPage/index';
import MyFamilyScreen from './src/screens/MyPage/MyFamily';
import NicknameScreen from './src/screens/MyPage/Nickname';
import SnapshotTimeScreen from './src/screens/MyPage/SnapshotTime';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BottomTabScreen} from './src/components/features/Layout/BottomTabScreen';
import {StatusBar} from 'react-native';
import Start from './src/screens/Start/index.jsx';
import {RegisterScreen} from './src/screens/Register';
import {CustomHeader} from '@/components/features/Layout/CustomHeader.jsx';

function App() {
  const Stack = createNativeStackNavigator();

  const linking = {
    prefixes: ['myapp://'],
    config: {
      screens: {
        Home: '',
        RegisterScreen: 'auth/login',
      },
    },
  };

  return (
    <NavigationContainer linking={linking}>
      <StatusBar hidden={true} />
      <Stack.Navigator>
        <Stack.Screen
          name="Start"
          component={Start}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Bottom"
          component={BottomTabScreen}
          options={{header: CustomHeader}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Chatting" component={Chatting} />
        <Stack.Screen
          name="LovecardMainScreen"
          component={LoveCardMainScreen}
        />
        <Stack.Screen
          name="LoveCardDetailScreen"
          component={LoveCardDetailScreen}
        />
        <Stack.Screen name="MyPage" component={MyPage} />
        <Stack.Screen name="MyFamilyScreen" component={MyFamilyScreen} />
        <Stack.Screen name="NicknameScreen" component={NicknameScreen} />
        <Stack.Screen
          name="SnapshotTimeScreen"
          component={SnapshotTimeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
