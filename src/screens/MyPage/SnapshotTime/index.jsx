import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

export default function SnapshotTimeScreen({navigation}) {
  const [selectedTime, setSelectedTime] = useState(null);

  const times = [
    {label: '8:00', key: '8:00'},
    {label: '9:00', key: '9:00'},
    {label: '10:00', key: '10:00'},
    {label: '11:00', key: '11:00'},
    {label: '12:00', key: '12:00'},
    {label: '1:00', key: '1:00'},
    {label: '2:00', key: '2:00'},
    {label: '4:00', key: '4:00'},
    {label: '6:00', key: '6:00'},
    {label: '8:00', key: '8:00'},
  ];

  const handleTimePress = time => {
    setSelectedTime(time);
  };

  const renderTimeButtons = () => {
    const rows = [];
    for (let i = 0; i < times.length; i += 3) {
      rows.push(
        <View style={styles.timeRow} key={i}>
          {times.slice(i, i + 3).map(time => (
            <TouchableOpacity
              key={time.key}
              style={[
                styles.timeButton,
                selectedTime === time.key && styles.selectedTime,
              ]}
              onPress={() => handleTimePress(time.key)}>
              <Text
                style={
                  selectedTime === time.key
                    ? styles.selectedTimeText
                    : styles.defaultText
                }>
                {time.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>,
      );
    }
    return rows;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>스냅샷 시간 설정</Text>
      <Text style={styles.subtitle}>주제 알림 받을 시간</Text>

      <ScrollView>
        <View style={styles.sectionBox1}>
          <Text style={styles.sectionTitle1}>•</Text>
          <Text style={styles.sectionTitle2}>오전</Text>
        </View>
        {renderTimeButtons().slice(0, 4)}

        <View style={styles.sectionBox2}>
          <Text style={styles.sectionTitle1}>•</Text>
          <Text style={styles.sectionTitle2}>오후</Text>
        </View>
        {renderTimeButtons().slice(4)}
      </ScrollView>

      <TouchableOpacity style={styles.changeButton}>
        <Text style={styles.buttonText}>변경하기</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
    color: '#383838',
    position: 'absolute',
    top: 20,
    left: 114,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#383838',
    marginTop: 60,
    marginLeft: 24,
  },
  sectionBox1: {
    width: 36,
    height: 20,
    flexDirection: 'row',
    gap: 4,
    position: 'absolute',
    top: 137,
    left: 24,
  },
  sectionTitle1: {
    width: 4,
    height: 4,
    color: '#383838',
  },
  sectionTitle2: {
    fontSize: 16,
    fontWeight: '700',
    color: '#383838',
  },
  sectionBox2: {
    width: 36,
    height: 20,
    flexDirection: 'row',
    gap: 4,
    position: 'absolute',
    top: 259,
    left: 24,
  },
  changeButton: {
    width: 312,
    height: 40,
    position: 'absolute',
    top: 720,
    left: 24,
    borderRadius: 6,
    backgroundColor: '#4D83F4',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
    position: 'absolute',
    top: 730,
    left: 151,
  },
  timeRow: {
    width: 312,
    height: 78,
    flexDirection: 'row',
    gap: 6,
  },
  timeButton: {
    width: 100,
    height: 36,
    padding: 8,
    paddingHorizontal: 33,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#C5C5C5',
    opacity: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedTime: {
    width: 100,
    height: 36,
    padding: 8,
    paddingHorizontal: 33,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#4D83F4',
    opacity: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  defaultTime: {
    fontSize: 16,
    fontWeight: '400',
    color: '#C5C5C5',
    textAlign: 'center',
  },
  selectedTimeText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#4D83F4',
    textAlign: 'center',
  },
});
