import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {HomeIcon} from '../../icon/HomeIcon';
import {MessageIcon} from '../../icon/MessageIcon';
import {CardIcon} from '../../icon/CardIcon';
import {PersonIcon} from '../../icon/PersonIcon';
import React from 'react';

export const CustomTabBar = ({state, descriptors, navigation}) => {
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        let IconComponent;
        switch (route.name) {
          case 'Home':
            IconComponent = HomeIcon;
            break;
          case 'Chatting':
            IconComponent = MessageIcon;
            break;
          case 'LovecardMainScreen':
            IconComponent = CardIcon;
            break;
          case 'MyPage':
            IconComponent = PersonIcon;
            break;
        }

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabItem}>
            <IconComponent
              width={24}
              height={24}
              color={isFocused ? '#4D83F4' : '#D3D3D3'}
            />
            <Text
              style={[
                styles.text,
                isFocused ? styles.focusedText : styles.unfocusedText,
              ]}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    height: 76,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: -1},
    shadowOpacity: 0.1,
    shadowRadius: 9,
    elevation: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 42,
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  text: {
    fontSize: 11,
    fontWeight: '600',
  },
  focusedText: {
    color: '#4D83F4',
  },
  unfocusedText: {
    color: '#D3D3D3',
  },
});
