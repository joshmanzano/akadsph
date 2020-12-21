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
  const [detailsDone, setDetailsDone] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [processing, setProcessing] = React.useState(false);
  const [returnMessage, setMessage] = React.useState('');
  const [data, setData] = React.useState({
    tutees: props.tutees[0],
    subjects: props.subjects[0],
    lengths: props.lengths[0],
    topics: [],
    times: [],
    favTutor: [],
    files: props.files,
    specialRequest: '',
    allTutors: true,
    credits: props.credits,
  });

  const handleChangeNext = (event) => {
    setDetailsDone(!detailsDone);
  };
  
    const handleClickOpen = () => {
      setOpen(true);
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
        'extra_files': '',
        'is_favourite': !data['allTutors'],
        'subject': data['subjects'].id,
        'topics': data['topics'].join(),
        'special_request': 'None',
        'available_days': available_days,
        'fav_tutor': null,
        'time': data['lengths'].value,
      }
      post_api('parent-make-request', postData, (res) => {
        console.log(res)
        setProcessing(false);
        if(res['return_status'] == 'success'){
          Toast.success(res['return_message']);
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
            <Box ml={2} mt={2}>
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
        {!detailsDone ? 
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
            >
              <ChildDetails data={data} setData={setData} props={props}/>
            </Grid>
            <Grid
              item
              lg={12}
              md={12}
              xl={12}
              xs={12}
            >
              <Availability data={data} setData={setData}/>
            </Grid>
            <Grid
              item
              lg={12}
              md={12}
              xl={12}
              xs={12}
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
              <Button className={classes.nextButton}  
                color="primary"
                variant="contained"
                onClick={handleClickOpen}
                >
                  Submit Request
              </Button>
            
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
        : 
        
        <React.Fragment>
          <Grid container spacing={2}>
            <Grid item 
                xs={12}
            >
              <Breakdown/>
            </Grid>
            <Grid item 
              xs={12}
            >
              {/* <Payment/> */}
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={0}>
                <Grid
                  item
                  lg={3}
                  md={3}
                  xl={0}
                  xs={0}
                  ></Grid>
                <Grid item
                  lg={3}
                  md={3}
                  xl={3}
                  xs={6}
                  >
                  
                  <Button className={classes.backButton}  
                    color="primary"
                    
                    onClick={handleChangeNext}
                    variant="outlined"
                    >
                    Back
                  </Button>
                  
                  {/* <Box component='span' m={2}>
                    <Button className={classes.nextButton}  
                    color="primary"
                    variant="contained"
                    onClick={handleClickOpen}
                    >
                    Submit
                  </Button>
                  <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <DialogTitle id="alert-dialog-title">{"Transaction Complete!"}</DialogTitle>
                    <DialogContent>
                      <DialogContentText id="alert-dialog-description">
                        Please wait for a tutor to accept your request. You will receive a notification once it has been accepted. Thank you!
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleClose} color="primary">
                        Cancel
                      </Button>
                      <Button onClick={handleClose} color="primary" autoFocus>
                        Done
                      </Button>
                    </DialogActions>
                  </Dialog>
                  </Box> */}
                </Grid> 
                <Grid
                  item
                  lg={3}
                  md={3}
                  xl={3}
                  xs={6}
                  align='right'
                  >
                    <Button className={classes.payButton}  
                      color="primary"
                      variant="contained"
                      
                      align='right'
                      onClick={handleClickOpen}
                      >
                      Pay Now
                    </Button>
                    
                </Grid>
              </Grid>
            </Grid>
          
            
          </Grid>
        </React.Fragment>
        }
        {/* <Box mt={3}>
          <Results customers={customers} />
        </Box> */}
      </Container>
    </Page>
  );
};

export default CustomerListView;
