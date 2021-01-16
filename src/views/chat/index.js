import React, {useState} from 'react';
import {
  Box,
  Container,
  makeStyles,
  Grid,
  Hidden,
} from '@material-ui/core';
import {Button,ChatItem, ChatList, Input, Popup, Sidebar, Navbar} from 'react-chat-elements';
import './main.css';
import ReactGifted from 'src/components/ReactGiftedChat'

const Chat = () => {

  const [messages, changeMessage] = useState([
  ])

  const styles = {
    container: {
      flex: 1,
      display: "flex",
      flexDirection: "row",
      height: "100%",
      background: "#FFF",
    },
    channelList: {
      display: "flex",
      flex: 1,
      flexDirection: "column",
    },
    chat: {
      display: "flex",
      flex: 3,
      flexDirection: "column",
      borderWidth: "1px",
      borderColor: "#ccc",
      borderRightStyle: "solid",
      borderLeftStyle: "solid",
    },
    settings: {
      display: "flex",
      flex: 1,
      flexDirection: "column",
    },
  };

  const [chatList , changeChatlist] = useState([
    {
      avatar: '/static/images/oli-chat.png',
      alt: 'Oli',
      title: 'AKADS Buddy',
      subtitle: 'Welcome to AKADS!',
      date: new Date(),
      // onClick:{changeChat},
      chatID: 0,
      // unread: akadsUnread,
      className: 'selectedChat',
    }
  ])



  return (
    <div style={styles.container}>
      <div style={styles.channelList}>
        {chatList.map(chat => (
          <ChatItem
          avatar={chat.avatar}
          alt={chat.alt}
          title={chat.title}
          subtitle={chat.subtitle}
          date={chat.date}
          unread={chat.unread}
          className={chat.className}
          // onClick={() => changeChat(chat.chatID)}
          />
        ))}
        </div>
      <div style={styles.chat}>
        <ReactGifted changeMessage={changeMessage} messages={messages}/>
      </div>
    </div>
  );

};

export default Chat;
