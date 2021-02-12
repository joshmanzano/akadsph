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
import ChildDetails from './ChildDetails';
import Availability from './Availability';
import SpecialRequests from './SpecialRequests';
import Breakdown from './Breakdown';
import Summary from './Summary';
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
  const [data, setData] = React.useState({
    tutees: props.tutees[0],
    subjects: props.subjects[0],
    lengths: props.lengths[0],
    topics: '',
    times: [],
    favtutors: props.favtutors.length > 0 ? props.favtutors[0] : null,
    files: props.files,
    special_request: '',
    allTutors: true,
    credits: props.credits,
  });
  const [sendingRequest, setSendingRequest] = React.useState(false);
  const [url, setURL] = React.useState(data['files']+'?path=%2F'+data['subjects']['subject_field'])
  const confirm = useConfirm()

  
    const handleClickOpen = () => {
      if(props.favtutors.length > 0 && data.allTutors){
        confirm({
          title: "Confirm All Tutors",
          description: "Are you sure you would like to get any tutor for this request?",
          confirmationText: 'Proceed',
        }).then(() => {
          setOpen(true);
        }).catch({

        })
      }else{
        setOpen(true);
      }
    };
  
    const handleClose = () => {
      setOpen(false);
    };

  const submitData = () => {
    setOpen(false);
    setProcessing(true);
    get_user((res) => {
      const id = res['id']
      const available_days = []
      Object.keys(data['times']).forEach(time => {
        const fromDay = new Date(Number(time))
        const untilDay = new Date(Number(time))
        const from = data['times'][time].from.split(':')
        const until = data['times'][time].until.split(':')
        fromDay.setUTCHours(Number(from[0]), Number(from[1]))
        untilDay.setUTCHours(Number(until[0]), Number(until[1]))
        available_days.push({
          'start_date_time': fromDay,
          'end_date_time': untilDay,
          'time': data['lengths'].value,
        })
      })
      const postData = {
        'parent_id': id,
        'child_id': data['tutees'].id,
        'extra_files': url,
        'is_favourite': !data['allTutors'],
        'subject': data['subjects'].id,
        'topics': data['topics'],
        'special_request': data['special_request'],
        'available_days': available_days,
        'fav_tutor': !data['allTutors'] ? data['favtutors'].tutor.id : null,
        'time': data['lengths'].value,
      }
      console.log(postData)
      post_api('parent-make-request', postData, (res) => {
        console.log(res)
        setProcessing(false);
        if(res['return_status'] == 'success'){
          // Toast.success(res['return_message']);
          setSendingRequest(true)
          props.refresh()
          window.location.replace('/request-sent')
        }else if(res['return_status'] == 'error'){
          Toast.fail(res['return_message']);
        }else{
          Toast.fail('Request Failed. Please complete the form.');
        }
      })
    })
  }

  return (
    <Page
      className={classes.root}
      title="Request A Tutor" 
    >
      <RequestTutorial enabled={true}/>
      <LoadingBack processing={sendingRequest}/>
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
              <ChildDetails data={data} url={url} setURL={setURL} setData={setData} props={props}/>
            </Grid>
            <Grid
              item
              lg={12}
              md={12}
              xl={12}
              xs={12}
              id="availability"
            >
              <Availability data={data} setData={setData}/>
            </Grid>
            <Grid
              item
              lg={12}
              md={12}
              xl={12}
              xs={12}
              id="specialRequests"
            >
              <SpecialRequests data={data} setData={setData}/>
            </Grid>
            <Grid
              item
              lg={12}
              md={12}
              xl={12}
              xs={12}
              align='right'
            >
              <Box mb={4}>
                <Button className={classes.nextButton}  
                  color="primary"
                  variant="contained"
                  onClick={handleClickOpen}
                  >
                    Submit Request
                </Button>
              </Box>
            
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-title">{"Tutor Request Confirmation"}</DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      <Summary data={data}/>
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose} color="primary">
                      Cancel
                    </Button>
                    <Button onClick={submitData} color="primary" autoFocus>
                      Send Request
                    </Button>
                  </DialogActions>
              </Dialog>
            </Grid>
          </Grid>
        </React.Fragment>
        
      </Container>
    </Page>
  );
};

export default CustomerListView;
