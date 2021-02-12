import React, {useState} from 'react';
import {
  Box,
  Container,
  makeStyles,
  Grid,
  Hidden,
} from '@material-ui/core';
import {Button,ChatItem, ChatList, Input, Popup, Sidebar, Navbar} from 'react-chat-elements';
import ReactGifted from 'src/components/ReactGiftedChat'
import Websocket from 'react-websocket';
import {post_api} from 'src/Api'
import jwt from 'jwt-decode';

class Chat extends React.Component {
  constructor(props){
      console.log(props)
    super(props);

    this.state = {
      loaded: false,
      conversation: this.props.id,
      messages: [],
      chatList: []
    }
  }

  componentDidMount(){
    const payload = {
      'conversation_id': this.props.id 
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
              id: message['sender'] == 'admin' ? 1 : 3,
              name: this.props.name,
              avatar: this.props.picture,
            }
          }
        )
      })
      post_api('seen-admin-parent-conversation', {
        'conversation_id': this.props.id,
        'looker': 'admin'
      } ,(res) => {})
      this.setState({messages:messages, loaded: true})
    })
  }

  handleData = (data) => {
    const message = JSON.parse(data)
    if(message['message'] == 'update'){
      const payload = {
        'conversation_id': this.props.id,
        'receiver': 'admin' 
      }
      // post_api('get-unseen-specific-parent-admin-conversation', payload, (res) => {
      //   const messages = this.state.messages
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
      //   this.setState({messages:messages})
      // })
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
              id: message['sender'] == 'admin' ? 1 : 3,
              name: this.props.name,
              avatar: this.props.picture,
            }
          }
        )
      })
      post_api('seen-admin-parent-conversation', {
        'conversation_id': this.props.id,
        'looker': 'parent'
      } ,(res) => {})
      this.setState({messages:messages, loaded: true})
    })
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
        <Websocket url={'wss://api.akadsph.com/ws/'+'parent'+String(this.props.parent_id)+'/'} onMessage={this.handleData}/>
        <div style={styles.channelList}>
          <Button onClick={() => this.props.openChat(false)} variant="contained" color="primary">
            Back
          </Button>
        </div>
        <div style={styles.chat}>
        <ReactGifted loaded={true} user={'admin'} conversation={this.state.conversation} messages={this.state.messages}/>
        </div>
      </div>
    );
  }


}

export default Chat;
