import React from 'react';
import {
  Box,
  Container,
  makeStyles,
  Grid,
} from '@material-ui/core';
import Page from 'src/components/Page';
import {Button,MessageList, ChatList, Input, Popup, Sidebar, Navbar} from 'react-chat-elements';
import 'react-chat-widget/lib/styles.css';
import 'react-chat-elements/dist/main.css';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const Chat = () => {
  const classes = useStyles();

  return (
      <Grid container>
        <Grid item xs={12} lg={3}>
        <ChatList
          className='chat-list'
          dataSource={[
              {
                  avatar: 'https://lh4.googleusercontent.com/-mxVpz__Ts-M/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuckmHZi5Zpu2DZtViCFKRTK55uLgRQ/s96-c/photo.jpg',
                  alt: 'AD',
                  title: 'Adrienne Soliven',
                  subtitle: 'I am a tutor.',
                  date: new Date(),
                  unread: 1,
              },
              {
                  avatar: 'https://lh4.googleusercontent.com/-mxVpz__Ts-M/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuckmHZi5Zpu2DZtViCFKRTK55uLgRQ/s96-c/photo.jpg',
                  alt: 'RP',
                  title: 'Romeo Pena',
                  subtitle: 'I am a trooper!',
                  date: new Date(),
                  unread: 0,
              },
          ]} />
        </Grid>
        <Grid item xs={12} lg={9}>
        <Container>

        <MessageList
          className='message-list'
          lockable={true}
          toBottomHeight={'100%'}
          dataSource={[
              {
                  position: 'right',
                  type: 'text',
                  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
                  date: new Date('December 17, 1995 03:24:00'),
              },
              {
                  position: 'left',
                  type: 'text',
                  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
                  date: new Date('December 17, 2019 03:24:00'),
              },
              {
                  position: 'right',
                  type: 'text',
                  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
                  date: new Date('November 9, 2020 03:24:00'),
              },
              {
                  position: 'left',
                  type: 'text',
                  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
                  date: new Date(),
              },
              {
                  position: 'right',
                  type: 'text',
                  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
                  date: new Date(),
              },
          ]} />

<Input
    placeholder="Type here..."
    multiline={true}
    rightButtons={
        <Button
            text='Send'/>
    }/>

        </Container>
        </Grid>
      </Grid>
  );
};

export default Chat;
