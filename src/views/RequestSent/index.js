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
import ChildDetails from './ChildDetails';
import Availability from './Availability';
import SpecialRequests from './SpecialRequests';
import Breakdown from './Breakdown';
import Summary from './Summary';
import {get_user, post_api} from 'src/Api'
import LoadingBack from 'src/components/loadingBack';
import MuiAlert from '@material-ui/lab/Alert';
import Toast from 'light-toast';

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

}));




const CustomerListView = (props) => {
  const classes = useStyles();
  

  return (
    <Page
      className={classes.root}
      title="Request Sent" 
    >
      <Container maxWidth={false}>
        <Card>
          
        <Grid container spacing={3}>
          <Grid
            item
            lg={12}
            md={12}
            xl={12}
            xs={12}
            align='center'
          >
            <Typography variant="h2" align='center'>
              Tutor request successfully sent!
            </Typography>
          </Grid>
          <Grid
            item
            lg={12}
            md={12}
            xl={12}
            xs={12}
            align='center'
          >
            <img width='100' src='../static/images/oli-wink.png'/>
          </Grid>
          <Grid
            item
            lg={12}
            md={12}
            xl={12}
            xs={12}
            align='center'
          >
            <Typography variant="body1" align='center'>
              Your request has been sent to our tutors. Kindly wait for one of them to accept it. You will be notified as soon as possible through your notifications. You may also go to the dashboard overview to see the status of pending requests and its details
            </Typography>
          </Grid>
          <Grid
            item
            lg={4}
            md={4}
            xl={4}
            xs={12}
            align='center'
          >
            <Button size="large" variant="contained" color="primary" href='#/findtutor'>
              Request for more tutors
            </Button>
          </Grid>
          <Grid
            item
            lg={4}
            md={4}
            xl={4}
            xs={12}
            align='center'
          >
            <Button size="large" variant="contained" color="primary" href='#/'>
              View pending details in overview
            </Button>
          </Grid>
         
        </Grid>
        </Card>
      </Container>
      
    </Page>
  );
};

export default CustomerListView;
