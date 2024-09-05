import React, {useCallback, useState} from 'react';
import {
  Text,
  FlatList,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import Arrow from '@assets/images/register/arrowImg.png';
import {BASE_URL} from '@/util/base_url';
import {useFocusEffect} from '@react-navigation/native';
import {resize} from 'react-native-responsive-sizer';

const ww = resize('ww', 360);
const wh = resize('wh', 800);

export default function NotificationPage({navigation}) {
  const [yesterdayNotifications, setYesterdayNotifications] = useState([]);
  const [unreadNotifications, setUnreadNotifications] = useState([]);
  const [sevendayNotifications, setSevendayNotifications] = useState([]);

  useFocusEffect(
    useCallback(() => {
      fetchNotification();
    }, []),
  );

  const fetchNotification = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/v1/alarms`);
      const data = response.data;

      setYesterdayNotifications(data.result.unread);
      setUnreadNotifications(data.result.yesterday);
      setSevendayNotifications(data.result.sevenday);
    } catch (error) {
      console.error(error);
    }
  };

  const renderNotificationItem = ({item}) => (
    <View style={styles.notificationItem}>
      <Image source={{uri: item.alarm_img}} style={styles.notificationImage} />
      <Text style={styles.notificationText}>{item.message}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={Arrow} style={styles.arrowImage} />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>알림</Text>
        </View>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>읽지 않음</Text>
      </View>
      <FlatList
        data={unreadNotifications}
        renderItem={renderNotificationItem}
        keyExtractor={item => item.id.toString()}
      />

      <View style={styles.separator} />

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>어제</Text>
      </View>
      <FlatList
        data={yesterdayNotifications}
        renderItem={renderNotificationItem}
        keyExtractor={item => item.id.toString()}
      />

      <View style={styles.separator} />

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>최근 7일</Text>
      </View>
      <FlatList
        data={sevendayNotifications}
        renderItem={renderNotificationItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    gap: ww * 0.328,
    marginTop: wh * 0.025,
  },
  arrowImage: {
    width: ww * 0.0556,
    height: wh * 0.01875,
    marginLeft: ww * 0.0667,
  },
  titleContainer: {
    marginBottom: wh * 0.03125,
    alignItems: 'center',
  },
  title: {
    fontSize: ww * 0.0556,
    fontWeight: '800',
    color: '#383838',
    textAlign: 'center',
  },
  separator: {
    width: ww * 1.0833,
    height: StyleSheet.hairlineWidth,
    borderTopWidth: 1,
    borderColor: '#E7E7E7',
    marginTop: wh * 0.0125,
    marginBottom: wh * 0.025,
    opacity: 1,
  },
  sectionContainer: {
    marginLeft: ww * 0.0667,
  },
  sectionTitle: {
    fontSize: ww * 0.0444,
    fontWeight: '800',
    color: '#383838',
  },
  notificationItem: {
    marginLeft: ww * 0.0667,
    marginBottom: wh * 0.00625,
  },
  notificationImage: {
    width: ww * 0.1167,
    height: ww * 0.1167,
    marginRight: ww * 0.0139,
  },
  notificationText: {
    fontSize: ww * 0.0389,
    fontWeight: '800',
    color: '#383838',
  },
});
