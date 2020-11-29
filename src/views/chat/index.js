import React from 'react';
import {
  Box,
  Container,
  makeStyles,
  Grid,
  Hidden,
} from '@material-ui/core';
import {Button,MessageList, ChatList, Input, Popup, Sidebar, Navbar} from 'react-chat-elements';
import 'react-chat-elements/dist/main.css';
import ReactGifted from 'src/components/ReactGiftedChat'

const Chat = () => {
  const styles = {
    container: {
      flex: 1,
      display: "flex",
      flexDirection: "row",
      height: "100%",
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

  const chatList = [
    {
        avatar: '/static/images/oli-chat.png',
        alt: 'Oli',
        title: 'AKADS Buddy',
        subtitle: 'Welcome to AKADS!',
        date: new Date(),
        unread: 1,
    },
    {
        avatar: 'https://lh4.googleusercontent.com/-mxVpz__Ts-M/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuckmHZi5Zpu2DZtViCFKRTK55uLgRQ/s96-c/photo.jpg',
        alt: 'Joshua',
        title: 'Joshua Manzano',
        subtitle: 'Hello! Can I have more details about',
        date: new Date(),
        unread: 1,
    },
    {
        avatar: 'https://lh4.googleusercontent.com/-mxVpz__Ts-M/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuckmHZi5Zpu2DZtViCFKRTK55uLgRQ/s96-c/photo.jpg',
        alt: 'Joshua',
        title: 'Johnny Bravo',
        subtitle: 'What topics does your child have a hard time on?',
        date: new Date(),
        unread: 0,
        statusColor: '#D4D4D4',
        statusColorType: 'encircle',
        // statusText: 'Done',
    },
  ]

  // For testing

  // for(var i = 0; i < 20 ; i++){
  //   chatList.push({
  //     avatar: 'https://lh4.googleusercontent.com/-mxVpz__Ts-M/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuckmHZi5Zpu2DZtViCFKRTK55uLgRQ/s96-c/photo.jpg',
  //     alt: 'Joshua',
  //     title: 'Joshua Manzano',
  //     subtitle: 'Hello! Can I have more details about',
  //     date: new Date(),
  //     unread: 1,
  //   })
  // }

  

  return (
    <div style={styles.container}>
      <div style={styles.channelList}>
      <ChatList
          className='chat-list'
          dataSource={chatList} />
        </div>
      <div style={styles.chat}>
        <ReactGifted/>
      </div>
    </div>
  );

};

export default Chat;
