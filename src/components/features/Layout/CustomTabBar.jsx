import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {HomeIcon} from '../../icon/HomeIcon';
import {MessageIcon} from '../../icon/MessageIcon';
import {CardIcon} from '../../icon/CardIcon';
import {PersonIcon} from '../../icon/PersonIcon';
import {resize} from 'react-native-responsive-sizer';

const ww = resize('ww', 360);
const wh = resize('wh', 800);

export const CustomTabBar = ({navigation}) => {
  const [selectedTab, setSelectedTab] = useState('Home');

  const handleTabPress = tabName => {
    setSelectedTab(tabName);
    navigation.navigate(tabName);
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerWrapper}>
        <TouchableOpacity
          style={[styles.iconWrapper, styles.home]}
          onPress={() => handleTabPress('Home')}>
          <HomeIcon
            height={24}
            width={24}
            color={selectedTab === 'Home' ? '#4D83F4' : '#D3D3D3'}
          />
          <Text style={selectedTab === 'Home' ? styles.focusText : styles.text}>
            홈
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.iconWrapper, styles.message]}
          onPress={() => handleTabPress('ChattingDrawer')}>
          <MessageIcon
            height={24}
            width={24}
            color={selectedTab === 'ChattingDrawer' ? '#4D83F4' : '#D3D3D3'}
          />
          <Text
            style={
              selectedTab === 'ChattingDrawer' ? styles.focusText : styles.text
            }>
            채팅
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.iconWrapper, styles.loveCard]}
          onPress={() => handleTabPress('LoveCardNavigator')}>
          <CardIcon
            height={24}
            width={24}
            color={selectedTab === 'LoveCardNavigator' ? '#4D83F4' : '#D3D3D3'}
          />
          <Text
            style={
              selectedTab === 'LoveCardNavigator'
                ? styles.focusText
                : styles.text
            }>
            애정카드
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.iconWrapper, styles.person]}
          onPress={() => handleTabPress('MyPageNavigator')}>
          <PersonIcon
            height={24}
            width={24}
            color={selectedTab === 'MyPageNavigator' ? '#4D83F4' : '#D3D3D3'}
          />
          <Text
            style={
              selectedTab === 'MyPageNavigator' ? styles.focusText : styles.text
            }>
            마이페이지
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: wh(76),
    backgroundColor: '#FDFDFD',
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: -1},
    shadowOpacity: 0.1,
    shadowRadius: wh(9),
    elevation: 5,
  },
  innerWrapper: {
    marginLeft: ww(42),
    marginTop: wh(16),
    flexDirection: 'row',
  },
  iconWrapper: {
    height: wh(43),
    alignItems: 'center',
    gap: ww(4),
  },
  home: {},
  message: {
    marginLeft: ww(60),
  },
  loveCard: {
    marginLeft: ww(52),
  },
  person: {
    marginLeft: ww(40),
  },
  focusText: {
    fontSize: ww(12),
    fontWeight: '600',
    color: '#4D83F4',
  },
  text: {
    fontSize: ww(12),
    fontWeight: '600',
    color: '#D3D3D3',
  },
});
