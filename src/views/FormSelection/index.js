import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  makeStyles,
  Typography,
  Grid,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Snackbar,
} from '@material-ui/core';
import Page from 'src/components/Page';
import Selection from './Selection';
import {get_user, post_api} from 'src/Api';
import LoadingBack from 'src/components/loadingBack';
import MuiAlert from '@material-ui/lab/Alert';
import Toast from 'light-toast';
import RequestTutorial from 'src/components/RequestTutorial';
import {useConfirm} from 'material-ui-confirm';

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
  nextButton: {
    placeItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    width: "30vh",
    padding: "1%"
   
  },
  backButton: {
    // backgroundColor: "white",
    // color: theme.palette.primary,
    // textColor: theme.palette.primary,
    // border: "10px solid theme.palette.primary",
    // borderColor: theme.palette.primary,
    // // marginRight: theme.spacing(1)
    // "&:hover": {
    //   backgroundColor: theme.palette.primary,
    // }
  },
}));

const CustomerListView = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [processing, setProcessing] = React.useState(false);
  const [returnMessage, setMessage] = React.useState('');
  const confirm = useConfirm()

  return (
    <Page
      className={classes.root}
      title="Request A Tutor" 
    >
      <RequestTutorial enabled={true}/>
      <Container maxWidth={false}>
        {/* <Toolbar /> */}
        <Grid container spacing={3}>
          <Grid
            item
            lg={1}
            md={1}
            xl={1}
            xs={12}
          >
          <img width='100' src='../static/images/oli-smirk.png'>
          </img>
          </Grid>
          <Grid
          item
          lg={11}
          md={11}
          xl={11}
          xs={12}
          >
            <Box ml={2} mt={3}>
              <Grid container spacing={0}
              direction="column"
              >
                <Grid item>
                <Box flexGrow={1}/>
                </Grid>
                <Grid item>
                  <Typography variant="h1" align='left'>
                    Request for a Tutor
                </Typography>
                </Grid>
               
              </Grid>
            </Box>
          </Grid>
        </Grid>
        <React.Fragment>
          <Snackbar open={success} autoHideDuration={6000} onClose={() => setSuccess(false)}>
            <Alert onClose={() => setSuccess(false)} severity="success">
              {returnMessage}
            </Alert>
          </Snackbar>
          <Snackbar open={error} autoHideDuration={6000} onClose={() => setError(false)}>
            <Alert onClose={() => setError(false)} severity="error">
              {returnMessage}
            </Alert>
          </Snackbar>
          <LoadingBack processing={processing}/>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              lg={12}
              md={12}
              xl={12}
              xs={12}
            >
              {/* <Bundle/> */}
            </Grid>
            <Grid
              item
              lg={12}
              md={12}
              xl={12}
              xs={12}
              id="tutoringDetails"
            >
              <Selection />
            </Grid>
          </Grid>
        </React.Fragment>
        
      </Container>
    </Page>
  );
};

export default CustomerListView;
