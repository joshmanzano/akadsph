import React, { useState } from 'react';
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
} from '@material-ui/core';
import Page from 'src/components/Page';

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
    marginTop: "5%",
    marginBottom: "5%",
  },
  payButton: {
    width: "40%",
    // marginLeft: "10%",
    // marginRight: "10%",
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
  }
}));




const CreditStore = () => {
  const classes = useStyles();
  const [customers] = useState(data);
  const [detailsDone, setDetailsDone] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const themebp = useTheme();
  const fullScreen = useMediaQuery(themebp.breakpoints.down('sm'));

  const [cardState, setCardState] = React.useState();
  


  const handleChangeNext = (event) => {
    setDetailsDone(!detailsDone);
  };

  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      console.log(cardState)
      checkout(500, cardState['number'], cardState['expiry'], cardState['cvc']);
      setOpen(false);
    };

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
              <Bundle/>
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
                
            </Grid>
          </Grid>
        </React.Fragment>
        : 
        
        <React.Fragment>
          <PayPage/>
          <Grid container spacing={0}>
            <Grid
              item
              lg={1}
              md={1}
              xl={0}
              xs={0}
              ></Grid>
            <Grid item
              lg={5}
              md={5}
              xl={5}
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
              lg={5}
              md={5}
              xl={5}
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
        
          
        </React.Fragment>
        }
  
      </Container>
    </Page>
  );
};

export default CreditStore;
