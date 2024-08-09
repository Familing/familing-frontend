import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Home from './src/screens/Home/Home';
import Chatting from './src/screens/Chatting/Chatting';
import LoveCard from './src/screens/LoveCard/LoveCard';
import MyPage from './src/screens/MyPage/MyPage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BottomTabScreen} from './src/components/features/Layout/BottomTabScreen';
import {CustomHeader} from './src/components/features/Layout/CustomHeader';
import { StatusBar } from 'react-native';

function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <StatusBar hidden={true} />
      <Stack.Navigator>
        <Stack.Screen
          name="Bottom"
          component={BottomTabScreen}
          options={{header: () => <CustomHeader />}}
        />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Chatting" component={Chatting} />
        <Stack.Screen name="LoveCard" component={LoveCard} />
        <Stack.Screen name="MyPage" component={MyPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
