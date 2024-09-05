import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {resize} from 'react-native-responsive-sizer';

const ww = resize('ww', 360);
const wh = resize('wh', 800);

export const Message = ({message, showProfile}) => {
  if (message.senderId === 'date') {
    return (
      <View style={styles.dateContainer}>
        <Text style={styles.dateText}>{message.sendDate}</Text>
      </View>
    );
  } else if (message.isMine) {
    return (
      <View key={message.id} style={[styles.bubbleContainer, styles.myBubble]}>
        <Text style={[styles.messageText, styles.myText]}>
          {message.content}
        </Text>
      </View>
    );
  } else if (!message.isMine) {
    return (
      <View key={message.id} style={styles.otherContainer}>
        {showProfile ? (
          <Image
            source={{uri: message.senderProfileImg}}
            style={styles.profileImg}
          />
        ) : (
          <View style={styles.profileImg} />
        )}

        <View
          key={message.id}
          style={[styles.bubbleContainer, styles.otherBubble]}>
          <Text style={[styles.messageText, styles.otherText]}>
            {message.content}
          </Text>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  bubbleContainer: {
    display: 'flex',
    maxWidth: ww(273.72),
    borderRadius: wh(6),
    padding: wh(12.86),
  },
  profileImg: {
    zIndex: 99,
    width: ww(44),
    height: ww(44),
  },
  myBubble: {
    marginTop: wh(7.81),
    backgroundColor: '#4D83F4',
    alignSelf: 'flex-end',
  },
  otherBubble: {
    marginLeft: ww(-6),
    backgroundColor: '#F8F8F8',
    alignSelf: 'flex-start',
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: wh(0)},
    shadowOpacity: 0.1,
    shadowRadius: wh(4),
    elevation: 2,
  },
  otherContainer: {
    marginTop: wh(12.28),
    display: 'flex',
    flexDirection: 'row',
  },
  messageText: {
    flexWrap: 'wrap',
    fontSize: ww(12),
    fontWeight: '600',
    lineHeight: wh(14.98),
  },
  myText: {
    color: '#F8F8F8',
  },
  otherText: {
    color: '#383838',
  },
  dateContainer: {
    alignSelf: 'center',
    marginTop: wh(28.45),
    marginBottom: wh(16.17),
  },
  dateText: {
    color: '#B3B3B3',
    fontSize: ww(12),
    fontWeight: '600',
  },
});
