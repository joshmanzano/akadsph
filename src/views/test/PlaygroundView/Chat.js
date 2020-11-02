import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  useTheme,
  makeStyles,
  colors,
  Grid,
  Tooltip,
  Button,
  Box,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  InputAdornment,
  Snackbar,
  Typography
} from '@material-ui/core';

import {Widget} from 'react-chat-widget';
import {ChatList, Navbar} from 'react-chat-elements';
import 'react-chat-widget/lib/styles.css';
import 'react-chat-elements/dist/main.css';

class Chat extends React.Component {
  useStyles = makeStyles(() => ({
    root: {}
  }));


  constructor() {
    super();
    this.state = {
    };
  }

  componentDidMount(){
  }

  render() {
    return (
      <Container>
        <Widget/>
        <ChatList
    className='chat-list'
    dataSource={[
        {
            // avatar: 'https://facebook.github.io/react/img/logo.svg',
            alt: 'AD',
            title: 'Adrienne Soliven',
            subtitle: 'What are you doing?',
            date: new Date(),
            unread: 0,
        },
        {
            // avatar: 'https://facebook.github.io/react/img/logo.svg',
            alt: 'RP',
            title: 'Romeo Pena',
            subtitle: 'What are you doing?',
            date: new Date(),
            unread: 0,
        },
    ]} />
      </Container>
    )
  }
}

export default Chat;
