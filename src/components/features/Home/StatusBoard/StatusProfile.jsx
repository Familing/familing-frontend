import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

export default function StatusProfile({Profile, name}) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [statusItems, setStatusItems] = useState([
    {label: '공부 중', value: '공부 중'},
    {label: '노는 중', value: '노는 중'},
    {label: '쉬는 중', value: '쉬는 중'},
    {label: '일하는 중', value: '일하는 중'},
  ]);

  return (
    <View>
      <View style={styles.container}>
        <Profile />
        <Text style={styles.font}>{name}</Text>
        <View style={styles.DropDownContainer}>
          <DropDownPicker
            open={open}
            value={value}
            items={statusItems}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setStatusItems}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  font: {
    fontSize: 14,
    fontWeight: '500',
    color: '#383838',
  },
  DropDownContainer: {
    flex: 1,
    height: 28,
    border: 'none',
    backgroundColor: '#4D83F4',
    color: '#fff',
    fontSize: 12,
    fontWeight: '500',
    borderRadius: 40,
    paddingVertical: 6,
    paddingHorizontal: 14,
  },
});
