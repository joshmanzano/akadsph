import React, { Component, Fragment, useState } from 'react';
import { GiftedChat } from 'react-web-gifted-chat';

class Example extends Component {

  state = {
    messages: [],
  };

  componentWillMount() {
    this.setState({
      messages: [
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
      ],
    });
  }

  onSend(messages = []) {
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={(messages) => this.onSend(messages)}
        user={{
          id: 1,
        }}
      />
    );
  }

}

export default Example;