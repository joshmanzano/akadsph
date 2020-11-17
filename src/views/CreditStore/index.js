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
  Backdrop,
  Paper,
  CircularProgress,
  Snackbar,
} from '@material-ui/core';
import Page from 'src/components/Page';
import MuiAlert from '@material-ui/lab/Alert';

import data from './data';
import Bundle from './Bundle';
import Payment from './Payment';
import Breakdown from './Breakdown';
import Validity from './Validity';
import PromoCode from './PromoCode';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';

import {checkout} from 'src/Api';

import PayPage from './PayPage';

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
    // marginRight: theme.spacing(1)
   
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
  payButton: {
    width: "80%",
    marginLeft: "10%",
    marginRight: "10%",
    marginTop: "5%",
    marginBottom: "5%",
    // paddingTop: "7%",
    // paddingBottom: "7%",
  },
  closeButton: {
    // position: 'absolute',
    // right: theme.spacing(1),
    // top: theme.spacing(1),
    // color: theme.palette.grey[500],
    float:'right', marginTop: '5px'

  },
  dialogTitle:{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));




function CreditStore(){
  const classes = useStyles();
  const [customers] = useState(data);
  const [detailsDone, setDetailsDone] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [processing, setProcessing] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [error, setError] = React.useState(false);
  const themebp = useTheme();
  const fullScreen = useMediaQuery(themebp.breakpoints.down('sm'));

  const [cardState, setCardState] = React.useState();
  const [amount, setAmount] = React.useState(0);
  const [item, setItem] = React.useState();
  const [discount, setDiscount] = React.useState(0);
  
  useEffect(() => {
    if(processing){
      checkout(amount, cardState['number'], cardState['expiry'], cardState['cvc'], (res) => {
        setProcessing(false);
        if(res){
          setSuccess(true);
        }else{
          setError(true);
        }
      });
    }
  },[processing])

  const handleChangeNext = (event) => {
    setDetailsDone(!detailsDone);
  };

  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      console.log(cardState)
      setOpen(false);
    };
    
    const paynow = () => {
      setProcessing(true);

    }

    const DialogTitle = withStyles(useStyles)((props) => {
      const { children, classes, onClose, ...other } = props;
      return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
          <Typography variant="h4">{children}</Typography>
          {onClose ? (
            <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
              <CloseIcon />
            </IconButton>
          ) : null}
        </MuiDialogTitle>
      );
    });
  

  return (
    <Page
      className={classes.root}
      title="Store" 
    >
      <Snackbar open={success} autoHideDuration={6000} onClose={() => setSuccess(false)}>
        <Alert onClose={() => setSuccess(false)} severity="success">
          Transaction successful!
        </Alert>
      </Snackbar>
      <Snackbar open={error} autoHideDuration={6000} onClose={() => setError(false)}>
        <Alert onClose={() => setError(false)} severity="success">
          Transaction failed!
        </Alert>
      </Snackbar>
      <Backdrop className={classes.backdrop} open={processing}>
        <Box
          display="flex"
          flexDirection="column"
          height="100%"
          justifyContent="center"
        >
          <Container maxWidth="md">
            <Box mb={4} textAlign="center">
              <img width="400"
                alt="Loading..."
                src="/img/backdrop-logo.png"
              />
            </Box>
            <Box textAlign="center">
              <CircularProgress color="inherit" />
            </Box>
            {/* <h2 align="center">
              Loading...
            </h2> */}
          </Container>
        </Box>
      </Backdrop>
      <Container maxWidth={false}>
        {/* <Toolbar /> */}
        <Box mb={4}>
          <Typography variant="h1" align='center'>
            Buy Hours
          </Typography>
        </Box>
        {!detailsDone ? 
        <React.Fragment>
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
              <Bundle setAmount={setAmount} setItem={setItem}/>
            </Grid>
            <Grid
              item
              lg={12}
              md={12}
              xl={12}
              xs={12}
            >
              <Validity/>
            </Grid>
            <Grid
              item
              lg={12}
              md={12}
              xl={12}
              xs={12}
            >
              <PromoCode/>
            </Grid>
            <Grid
              item
              lg={12}
              md={12}
              xl={12}
              xs={12}
            >
              {/* <Payment/> */}
            </Grid>
            <Grid
              item
              lg={12}
              md={12}
              xl={12}
              xs={12}
            >
              <Button className={classes.nextButton}  
                    color="primary"
                    variant="contained"
                    onClick={handleChangeNext}
                    >
                    Proceed to Checkout
              </Button>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    fullScreen={fullScreen}
                    >
                      <DialogTitle onClose={handleClose} id="alert-dialog-title" className={classes.dialogTitle}>{"Checkout"}</DialogTitle>
                      <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                          <Payment setCardState={setCardState}/>
                          <br/>
                          <Breakdown/>
                        </DialogContentText>
                      </DialogContent>
                      <Button onClick={handleClose} color="primary" variant="contained" className={classes.payButton}>
                          Pay Now
                        </Button>
                      {/* <DialogActions>
                        <Button onClick={handleClose} color="primary">
                          Cancel
                        </Button>
                        <Button onClick={handleClose} color="primary" autoFocus>
                          Done
                        </Button>
                      </DialogActions> */}
                  </Dialog>
                  <Dialog
                    // open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    >
                      <DialogTitle id="alert-dialog-title">{"Payment Confirmed & Request Sent!"}</DialogTitle>
                      <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                          Payment was successful. You will be notified once a tutor accepts your request.
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
            </Grid>
          </Grid>
        </React.Fragment>
        : 
        
        <React.Fragment>
          <PayPage amount={amount} item={item} discount={discount} setCardState={setCardState} paynow={paynow}/>
          {/* <Grid container spacing={2}>
            <Grid item 
                xs={12}
            >
              <Breakdown/>
            </Grid>
            <Grid item 
              xs={12}
            > */}
              {/* <Payment/> */}
            {/* </Grid>
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
                    <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    >
                      <DialogTitle id="alert-dialog-title">{"Payment Confirmed & Request Sent!"}</DialogTitle>
                      <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                          Payment was successful. You will be notified once a tutor accepts your request.
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
                </Grid>
              </Grid>
            </Grid>
          
          </Grid> */}
        </React.Fragment>
        }
        {/* <Box mt={3}>
          <Results customers={customers} />
        </Box> */}
      </Container>
    </Page>
  );
};

export default CreditStore;
