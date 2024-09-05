import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import arrowbtn from '@assets/images/button/arrowbtn2.png';
import nullImg from '@assets/images/chatting/nullImg.png';
import Profile from '@/components/features/Chatting/menu/Profile';
import onBellIcon from '@assets/images/chatting/onBellIcon.png';
import offBellIcon from '@assets/images/chatting/offBellIcon.png';

import axios from 'axios';
import {BASE_URL} from '@/util/base_url';
import {resize} from 'react-native-responsive-sizer';

const ww = resize('ww', 360);
const wh = resize('wh', 800);

export const MenuScreen = () => {
  const [isAlertOn, setIsAlertOn] = useState(true);
  const [me, setMe] = useState([]);
  const [familiy, setFamily] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/v1/family`)
      .then(res => {
        setFamily(res.data.result.family_users_dto.family_user_dto_list);
        setMe(res.data.result.me.family_user_dto_list);
      })
      .catch(error => {
        console.log('get familiy list failed ', error);
      });
  }, []);

  const toggleAlert = () => {
    setIsAlertOn(!isAlertOn);
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>채팅방 서랍</Text>

        <View style={styles.photoSection}>
          <View style={styles.photoHeader}>
            <Text style={styles.subtitle}>사진/동영상</Text>
            <TouchableOpacity>
              <Image source={arrowbtn} style={styles.btnImg} />
            </TouchableOpacity>
          </View>
          <View style={styles.imgGrid}>
            <TouchableOpacity>
              <Image source={nullImg} style={styles.leftImage} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={nullImg} style={styles.innerImage} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={nullImg} style={styles.innerImage} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={nullImg} style={styles.rightImage} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={nullImg} style={styles.leftImage} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={nullImg} style={styles.innerImage} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={nullImg} style={styles.innerImage} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={nullImg} style={styles.rightImage} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.personSection}>
          <Text style={styles.subtitle}>대화상대</Text>
          <View style={styles.profileSection}>
            {me.map(me => (
              <Profile
                profile={me.profileImg}
                name={me.nickName}
                key={me.username}
              />
            ))}

            {familiy.map(person => (
              <Profile
                profile={person.profileImg}
                name={person.nickName}
                key={person.username}
              />
            ))}
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity onPress={toggleAlert} style={styles.bellWrapper}>
          <Image
            source={isAlertOn ? onBellIcon : offBellIcon}
            style={styles.bellIcon}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#fff',
    width: ww * 0.802,
    height: '100%',
    paddingHorizontal: ww * 0.056,
  },
  title: {
    fontSize: ww * 0.056,
    fontWeight: '800',
    lineHeight: wh * 0.0312,
    color: '#383838',
    marginTop: wh * 0.02375,
  },
  photoSection: {
    marginTop: wh * 0.035,
  },
  photoHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imgGrid: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 3,
    marginTop: wh * 0.015,
  },
  btnImg: {
    width: ww * 0.044,
    height: ww * 0.044,
  },
  innerImage: {
    width: ww * 0.167,
    height: ww * 0.167,
    borderRadius: 2,
  },
  leftImage: {
    width: ww * 0.167,
    height: ww * 0.167,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 2,
  },
  rightImage: {
    width: ww * 0.167,
    height: ww * 0.167,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 4,
  },
  subtitle: {
    fontSize: ww * 0.044,
    fontWeight: '700',
    lineHeight: wh * 0.0249,
    color: '#383838',
  },
  profileSection: {
    display: 'flex',
    marginTop: wh * 0.025,
  },
  personSection: {
    marginTop: wh * 0.02875,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#F8F8F8',
    height: wh * 0.095,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  bellWrapper: {
    position: 'absolute',
    top: wh * 0.0325,
    right: ww * 0.0556,
  },
  bellIcon: {
    width: ww * 0.0667,
    height: ww * 0.0667,
  },
});
