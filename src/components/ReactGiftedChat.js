import React, { Component, Fragment, useState } from 'react';
import { GiftedChat } from 'react-web-gifted-chat';
import {
  Container,
  Box,
  CircularProgress,
} from '@material-ui/core';

class Example extends Component {

  constructor(props){
    super(props);
    this.state = {
      messages: this.props.messages,
      loading: false,
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
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
  }

  render() {
    return (
      <Fragment>
      {this.state.loading ? 
        this.loadingCircle
      :
      <GiftedChat
        messages={this.state.messages}
        onSend={(messages) => this.onSend(messages)}
        user={{
          id: 1,
        }}
      />
      }
      </Fragment>
    );
  }

}

export default Example;