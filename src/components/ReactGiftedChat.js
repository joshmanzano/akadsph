import React, { Component, Fragment, useState } from 'react';
import { GiftedChat } from 'react-web-gifted-chat';
import {
  Container,
  Box,
  CircularProgress,
} from '@material-ui/core';

import Websocket from 'react-websocket';
import {post_api} from 'src/Api';

class Example extends Component {

  constructor(props){
    super(props);
    this.state = {
      messages: this.props.messages,
      loading: false,
      chatID: 1,
    };
  }

  loadingCircle = () => {
    return (
      <Container>
        <CircularProgress/>
      </Container>
    )
  }

  componentDidUpdate(prevProps) {
    if(this.props.messages !== prevProps.messages){
      this.setState({loading: true},() => {
        this.setState({messages:this.props.messages}, () => {
          this.setState({loading:false})
        })
      })
    }
  }

  onSend(messages = []) {
    messages.forEach(message => {
      console.log(message)
      const payload = {
        'conversation_id': this.props.conversation,
        'sender': this.props.user,
        'text': message['text'],
        // 'created': message['createdAt']
      }
      post_api('send-admin-parent-message', payload, (res) => {
        console.log(res)
      })
    })
    // this.setState((previousState) => ({
    //   messages: GiftedChat.append(previousState.messages, messages),
    // }));
  }

  // handleData = (data) => {
  //   const message = JSON.parse(data)
  //   console.log(message)

  //   const messages = []
  //   messages.push(
  //     {
  //       id: this.state.chatID,
  //       text: message['message'],
  //       createdAt: new Date(),
  //       user: {
  //         id: 2,
  //         name: 'AKADS Buddy',
  //         avatar: '/static/images/oli-happy.png',
  //       }
  //     }
  //   )
  //   this.setState((previousState) => ({
  //     messages: GiftedChat.append(previousState.messages, messages),
  //   }));
  // }

  render() {
    return (
      <Fragment>
      {this.props.loaded ? 
        <React.Fragment>
          {/* <Websocket url={'wss://api.akadsph.com/ws/chat/'} onMessage={this.handleData}/> */}
          <GiftedChat
            messages={this.state.messages}
            onSend={(messages) => this.onSend(messages)}
            user={{
              id: 1,
            }}
          />
        </React.Fragment>
      :
        <Container>
          <CircularProgress/>
        </Container>
      }
      </Fragment>
    );
  }

}

export default Example;