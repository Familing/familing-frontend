import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import searchIcon from '@assets/images/chatting/searchIcon.png';
import {resize} from 'react-native-responsive-sizer';

const ww = resize('ww', 360);
const wh = resize('wh', 800);

export default function SearchChatHeader({setIsSearch}) {
  const [searchValue, setSearchValue] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.rightWrapper}>
        <TouchableOpacity>
          <Image source={searchIcon} style={styles.icon} />
        </TouchableOpacity>
        <TextInput
          style={styles.textInput}
          value={searchValue}
          onChangeText={text => setSearchValue(text)}
          placeholder="메세지 검색"
          placeholderTextColor="rgba(255, 255, 255, 0.5)"
        />
      </View>
      <TouchableOpacity onPress={() => setIsSearch(false)}>
        <Text style={styles.cancel}>취소</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    zIndex: 9,
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: ww(24),
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: wh(64),
    backgroundColor: 'rgba(77, 131, 244, 1)',
    // shadow
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: wh(2)},
    shadowOpacity: 0.1,
    shadowRadius: wh(10),
    elevation: 5,
  },
  icon: {
    width: ww(24),
    height: ww(24),
  },
  rightWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: ww(8),
  },
  textInput: {
    color: '#fff',
    fontSize: ww(16),
    fontWeight: '400',
  },
  cancel: {
    fontSize: ww(18),
    fontWeight: '500',
    lineHeight: wh(22.46),
    color: '#FFFFFF',
  },
});
