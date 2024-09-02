import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Text,
} from 'react-native';
import infoIcon from '@assets/images/chatting/infoIcon.png';
import CameraIcon from '@/components/icon/chatting/CameraIcon';
import AiIcon from '@/components/icon/chatting/AiIcon';
import SendIcon from '@/components/icon/chatting/SendIcon';
import SockJS from 'sockjs-client';
import {Client, CompatClient, Stomp} from '@stomp/stompjs';
import {BASE_URL} from '@/util/base_url';
import {getChatRoomId} from '@/api/getChatRoomId';
import {getLoveChat} from '@/api/getLoveChat';

export const ChatInput = ({
  setReceiveMsg,
  setisSelectVisible,
  isSelectVisible,
}) => {
  const [inputValue, setInputValue] = useState('');
  const [selected, setSelected] = useState('원문');
  const [chatRoomId, setChatRoomId] = useState('');
  const [originInput, setOriginInput] = useState('');

  const client = useRef(null);

  useEffect(() => {
    connectWebSocket();
    return () => {
      if (client.current) {
        client.current.disconnect();
        console.log('websocket disconnected');
      }
    };
  }, []);

  //websocket 연결 & 채팅방 구독
  const connectWebSocket = async () => {
    try {
      const chatRoomIdData = await getChatRoomId();
      setChatRoomId(chatRoomIdData);
      const socket = new SockJS(`${BASE_URL}/ws`);
      const stompClient = Stomp.over(() => socket);

      stompClient.connect(
        {},
        () => {
          client.current = stompClient;

          client.current.subscribe(`/sub/${chatRoomIdData}`, message => {
            //var receive = JSON.parse(message.body);
            setReceiveMsg(message.body);
          });
        },
        error => {
          console.log('websocket connection error: ', error);
        },
      );
    } catch (error) {
      console.log('Error fetching chat room ID:', error);
    }
  };

  const sendMessage = () => {
    if (inputValue && client.current) {
      const message = {
        contentType: 'text',
        content: inputValue,
        chatRoomId: chatRoomId,
      };

      client.current.send('/pub/message', {}, JSON.stringify(message));
      console.log('전송완료');
      setInputValue('');
      setOriginInput('');
    }
  };

  const selectOriginal = () => {
    setSelected('원문');
    setInputValue(originInput);
    setOriginInput('');
  };

  const selectLovebot = async () => {
    setSelected('애정 봇');
    if (inputValue != null) {
      setOriginInput(inputValue);
      const loveChat = await getLoveChat(inputValue);
      setInputValue(loveChat);
    }
  };

  const selectSympathybot = () => {
    setSelected('공감 봇');
  };

  const handleAiToggle = () => {
    setisSelectVisible(!isSelectVisible);
  };

  return (
    <View style={styles.mainContainer}>
      {isSelectVisible && (
        <View style={styles.selectContainer}>
          <View style={styles.btnFlex}>
            <Image style={styles.infoImage} source={infoIcon} />
            <View style={styles.btnWrapper}>
              <TouchableOpacity
                style={
                  selected === '원문' ? styles.selectedBtn : styles.grayBtn
                }
                onPress={selectOriginal}>
                <Text
                  style={
                    selected === '원문' ? styles.selectedText : styles.grayText
                  }>
                  원문
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  selected === '애정 봇' ? styles.selectedBtn : styles.grayBtn
                }
                onPress={selectLovebot}>
                <Text
                  style={
                    selected === '애정 봇'
                      ? styles.selectedText
                      : styles.grayText
                  }>
                  애정 봇
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  selected === '공감 봇' ? styles.selectedBtn : styles.grayBtn
                }
                onPress={selectSympathybot}>
                <Text
                  style={
                    selected === '공감 봇'
                      ? styles.selectedText
                      : styles.grayText
                  }>
                  공감 봇
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
      <View style={styles.container}>
        <View style={styles.assetsContainer}>
          <TouchableOpacity>
            <CameraIcon />
          </TouchableOpacity>
          <TextInput
            style={styles.input}
            value={inputValue}
            onChangeText={text => setInputValue(text)}
            placeholder="메세지를 입력해주세요."
            placeholderTextColor="#CBCBCB"
          />
        </View>
        <View style={styles.assetsContainer}>
          <TouchableOpacity onPress={handleAiToggle}>
            <AiIcon />
          </TouchableOpacity>
          <TouchableOpacity onPress={sendMessage}>
            <SendIcon />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    flex: 1,
  },
  selectContainer: {
    position: 'static',
    alignSelf: 'center',
    bottom: -20,
    height: 60,
    width: 312,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: '#ffffff',
    // shadow
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 2,
  },
  btnFlex: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 12,
    marginTop: 8,
    gap: 14,
  },
  btnWrapper: {
    flexDirection: 'row',
    gap: 6,
  },
  infoImage: {
    width: 16,
    height: 16,
  },
  selectedBtn: {
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    borderWidth: 1,
    borderColor: '#383838',
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#fff',
  },
  selectedText: {
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 14.98,
    color: '#383838',
  },
  grayBtn: {
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#EEEEEE',
  },
  grayText: {
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 14.98,
    color: '#C5C5C5',
  },
  container: {
    marginBottom: 7,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-between',
    width: 312,
    height: 40,
    borderRadius: 35,
    backgroundColor: '#FDFDFD',
    paddingHorizontal: 4,
    paddingVertical: 3,
    //shadow
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.15,
    shadowRadius: 3.77,
    elevation: 2,
  },
  assetsContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  input: {
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 14.98,
    color: '#383838',
  },
});
