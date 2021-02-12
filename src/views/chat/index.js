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
import Websocket from 'react-websocket';
import {post_api} from 'src/Api'
import jwt from 'jwt-decode';

class Chat extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      loaded: false,
      conversation: this.props.adminchat.id,
      messages: [],
      chatList: [],
      avatar: '/static/images/oli-chat.png',
    }
  }

  changeChat = (id, avatar) => {

    const chatList = []
    this.state.chatList.forEach(chat => {
      if(chat.chatID == id){
        console.log('same')
        chat['className'] = 'selectedChat'
      }else{
        chat['className'] = ''
      }
      chatList.push(chat)
    })
    console.log(chatList)
    const payload = {
      'conversation_id': id
    }
    post_api('specific-conversation', payload, (res) => {
      const messages = []
      res['messages'].forEach(message => {
        console.log(message)
        messages.push(
          {
            id: message['id'],
            text: message['text'],
            createdAt: message['time_sent'],
            user: {
              id: message['sender'] == 'parent' ? 1 : 3,
              name: 'AKADS Buddy',
              avatar: avatar,
            }
          }
        )
      })
      const lastMessage = messages[0]
      console.log(lastMessage)
      post_api('seen-conversation', {
        'conversation_id': this.props.adminchat.id,
        'looker': 'parent'
      } ,(res) => {})
      this.setState({chatList: chatList, messages:messages, loaded: true})
    })

  }

  componentDidMount(){
    const chatList = [
      {
        avatar: '/static/images/oli-chat.png',
        alt: 'Oli',
        title: 'AKADS Buddy',
        subtitle: '',
        date: new Date(),
        // onClick:{changeChat},
        chatID: this.props.adminchat.id,
        // unread: akadsUnread,
        className: 'selectedChat',
      }
    ]

    this.props.activechat.forEach(chat => {
      const tutor = chat.tutor
      chatList.push({
        avatar: tutor.picture,
        alt: tutor.first_name,
        title: tutor.first_name + ' ' + tutor.last_name,
        date: new Date(),
        chatID: chat.conversation.id
      })
    })
    const payload = {
      'conversation_id': this.props.adminchat.id 
    }
    post_api('specific-parent-admin-conversation', payload, (res) => {
      const messages = []
      res['messages'].forEach(message => {
        console.log(message)
        messages.push(
          {
            id: message['id'],
            text: message['text'],
            createdAt: message['time_sent'],
            user: {
              id: message['sender'] == 'parent' ? 1 : 3,
              name: 'AKADS Buddy',
              avatar: '/static/images/oli-happy.png',
            }
          }
        )
      })
      const lastMessage = messages[0]
      console.log(lastMessage)
      post_api('seen-admin-parent-conversation', {
        'conversation_id': this.props.adminchat.id,
        'looker': 'parent'
      } ,(res) => {})
      this.setState({chatList: chatList, messages:messages, loaded: true})
    })
  }

  handleData = (data) => {
    const message = JSON.parse(data)
    if(message['message'] == 'update'){
      const payload = {
        'conversation_id': this.props.adminchat.id,
        'receiver': 'parent' 
      }
      post_api('get-unseen-specific-parent-admin-conversation', payload, (res) => {
        const messages = this.state.messages
        res['messages'].forEach(message => {
          console.log(message)
          messages.unshift(
            {
              id: message['id'],
              text: message['text'],
              createdAt: message['time_sent'],
              user: {
                id: message['sender'] == 'parent' ? 1 : 3,
                name: 'AKADS Buddy',
                avatar: '/static/images/oli-happy.png',
              }
            }
          )
        })
        post_api('seen-admin-parent-conversation', {
          'conversation_id': this.props.adminchat.id,
          'looker': 'parent'
        } ,(res) => {})
        console.log(messages)
        this.setState({messages:messages, loaded:true})
      })
    // post_api('specific-parent-admin-conversation', payload, (res) => {
    //   const messages = []
    //   res['messages'].forEach(message => {
    //     console.log(message)
    //     messages.push(
    //       {
    //         id: message['id'],
    //         text: message['text'],
    //         createdAt: message['time_sent'],
    //         user: {
    //           id: message['sender'] == 'parent' ? 1 : 3,
    //           name: 'AKADS Buddy',
    //           avatar: '/static/images/oli-happy.png',
    //         }
    //       }
    //     )
    //   })
    //   post_api('seen-admin-parent-conversation', {
    //     'conversation_id': this.props.adminchat.id,
    //     'looker': 'parent'
    //   } ,(res) => {})
    //   this.setState({messages:messages, loaded: true})
    // })
    }
  }


  render(){
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

    const chatList = this.state.chatList
    const loaded = this.state.loaded
    const user_id = jwt(localStorage.getItem('session_token')).id

    return (
      <div style={styles.container}>
        <Websocket url={'wss://api.akadsph.com/ws/'+'parent'+String(user_id)+'/'} onMessage={this.handleData}/>
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
            onClick={() => this.changeChat(chat.chatID, chat.avatar)}
            />
          ))}
        </div>
        <div style={styles.chat}>
          <ReactGifted loaded={this.state.loaded} user={'parent'} conversation={this.state.conversation} messages={this.state.messages}/>
        </div>
      </div>
    );
  }


}

export default Chat;
