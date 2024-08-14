import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import selectArrow from '@assets/images/button/selectArrow.png';

const data = [
  {id: '1', label: '공부 중'},
  {id: '2', label: '노는 중'},
  {id: '3', label: '쉬는 중'},
  {id: '4', label: '일하는 중'},
];

const DropdownSelectBox = () => {
  const [selectedItem, setSelectedItem] = useState(data[3]);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleSelectItem = item => {
    setSelectedItem(item);
    setDropdownVisible(false);
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.selectBox}
        onPress={() => setDropdownVisible(!dropdownVisible)}>
        <View style={styles.textContainer}>
          <Text style={styles.selectedText}>{selectedItem.label}</Text>
          <Image style={styles.arrowImg} source={selectArrow} />
        </View>
      </TouchableOpacity>

      {dropdownVisible && (
        <View style={styles.dropdown}>
          {data.map(item => (
            <TouchableOpacity
              key={item.id}
              style={[
                styles.item,
                item.id === selectedItem.id && styles.selectedItem,
              ]}
              onPress={() => handleSelectItem(item)}>
              <Text
                style={[
                  styles.itemText,
                  item.id === selectedItem.id && styles.selectedItem,
                ]}>
                {item.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  arrowImg: {
    width: 10,
    height: 6,
  },
  selectBox: {
    zIndex: 9,
    height: 28,
    width: 88,
    backgroundColor: '#4D83F4',
    borderRadius: 40,
    paddingHorizontal: 14,
    paddingVertical: 6,
  },
  textContainer: {
    gap: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedText: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 12,
  },
  dropdown: {
    position: 'absolute',
    top: 14,
    width: 88,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 5, // 안드로이드에서 그림자 효과
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    paddingTop: 14,
    alignItems: 'center',
  },
  item: {
    height: 16,
    width: 77,
    justifyContent: 'center',
    paddingVertical: 2,
    paddingLeft: 4,
    borderRadius: 2,
    marginVertical: 2,
  },
  selectedItem: {
    backgroundColor: '#DBE6FD',
  },
  itemText: {
    color: '#383838',
    fontSize: 10,
    fontWeight: 500,
    lineHeight: 12.48,
  },
});

export default DropdownSelectBox;
