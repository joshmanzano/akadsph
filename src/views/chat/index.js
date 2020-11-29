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

  const akadMessages = [
    {
      id: 1,
      text: 'Welcome to AKADS!\nIf you need any help, don\'t hesitate to message us!',
      createdAt: new Date(),
      user: {
        id: 2,
        name: 'AKADS Buddy',
        avatar: '/static/images/oli-happy.png',
      },
    },
  ]

  const joshMessages = [
    {
      id: 1,
      text: 'Good morning ! Can I have more details about which specific parts\nabout Algebra in which Angel is having a hard time with?',
      createdAt: new Date(),
      user: {
        id: 2,
        name: 'Joshua Manzano',
        avatar: 'https://lh4.googleusercontent.com/-mxVpz__Ts-M/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuckmHZi5Zpu2DZtViCFKRTK55uLgRQ/s96-c/photo.jpg',
      },
    },
  ]

  const [messages, changeMessage] = useState(joshMessages)
  const [joshUnread, changeJosh] = useState(1)
  const [akadsUnread, changeAkads] = useState(1)

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

  const changeChat = (id) => {
    if(id == 0){
      changeMessage(akadMessages)
      changeAkads(0)
    }else if (id == 1){
      changeMessage(joshMessages)
      changeJosh(0)
    }else if (id == 2){
      changeMessage(null)
    }

  }

  const chatList = [
    {
        avatar: '/static/images/oli-chat.png',
        alt: 'Oli',
        title: 'AKADS Buddy',
        subtitle: 'Welcome to AKADS!',
        date: new Date(),
        onClick:{changeChat},
        chatID: 0,
        unread: akadsUnread,
    },
    {
        avatar: 'https://lh4.googleusercontent.com/-mxVpz__Ts-M/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuckmHZi5Zpu2DZtViCFKRTK55uLgRQ/s96-c/photo.jpg',
        alt: 'Joshua',
        title: 'Joshua Manzano',
        subtitle: 'Hello! Can I have more details about...',
        date: new Date(),
        chatID: 1,
        unread: joshUnread,
    },
    {
        avatar: 'https://lh4.googleusercontent.com/-mxVpz__Ts-M/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuckmHZi5Zpu2DZtViCFKRTK55uLgRQ/s96-c/photo.jpg',
        alt: 'Carl Cornejo',
        title: 'Carl Cornejo (Inactive)',
        subtitle: 'Thank you!',
        date: new Date(1603958808000),
        chatID: 2,
        unread: 0,
        statusColor: '#D4D4D4',
        statusColorType: 'encircle',
        className: 'inactiveChat',
        // statusText: 'Done',
    },
  ]

  const chatList2 = [
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
        subtitle: 'Hello! Can I have more details about...',
        date: new Date(),
        unread: 1,
    },

  ]


  for(var i = 0; i < 5 ; i++){
    chatList2.push({
      avatar: 'https://lh4.googleusercontent.com/-mxVpz__Ts-M/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuckmHZi5Zpu2DZtViCFKRTK55uLgRQ/s96-c/photo.jpg',
      alt: 'Anon',
      title: 'Anon',
      subtitle: 'Lorem ipsum',
      date: new Date(),
      unread: 1,
    })
  }
  chatList2.push(
    {
        avatar: 'https://lh4.googleusercontent.com/-mxVpz__Ts-M/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuckmHZi5Zpu2DZtViCFKRTK55uLgRQ/s96-c/photo.jpg',
        alt: 'Carl Cornejo',
        title: 'Carl Cornejo (Inactive)',
        subtitle: 'Thank you!',
        date: new Date(1603958808000),
        unread: 0,
        statusColor: '#D4D4D4',
        statusColorType: 'encircle',
        className: 'inactiveChat',
        // statusText: 'Done',
    }
  )


  

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
          onClick={() => changeChat(chat.chatID)}
          />
        ))}
        </div>
      <div style={styles.chat}>
        <ReactGifted messages={messages}/>
      </div>
    </div>
  );

};

export default Chat;
