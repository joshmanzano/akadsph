import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  makeStyles,
  Typography,
  Grid,
  Button,
 
  Card,
} from '@material-ui/core';
import Page from 'src/components/Page';
import Summary from './Summary';
import {get_user, post_api} from 'src/Api'
import LoadingBack from 'src/components/loadingBack';
import MuiAlert from '@material-ui/lab/Alert';
import Toast from 'light-toast';
import Content from './Content';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  cardStyle:{
    maxWidth: 1200,
  }

}));




const RequestSent = ({ className, data, ...rest }) => {
  const classes = useStyles();
  
  return (
    <Page
      className={classes.root}
      title="Request Sent" 
    >
      <Container maxWidth={false}>
        <Box mx={1} align='center'>
          <Card className={classes.cardStyle}>
            <Content /*data={data}*//>
          </Card>
        </Box>
      </Container>
      
    </Page>
  );
};

export default RequestSent;
