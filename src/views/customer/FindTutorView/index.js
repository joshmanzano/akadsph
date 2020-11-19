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
import Results from './Results';
import Toolbar from './Toolbar';
import Bundle from './Bundle';
import ChildDetails from './ChildDetails';
import Availability from './Availability';
import SpecialRequests from './SpecialRequests';
import Payment from './Payment';
import Breakdown from './Breakdown';
import Summary from './Summary';

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

  const handleChangeNext = (event) => {
    setDetailsDone(!detailsDone);
  };

  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    console.log(props)

  return (
    <Page
      className={classes.root}
      title="Request A Tutor" 
    >
      <Container maxWidth={false}>
        {/* <Toolbar /> */}
        <Box mb={2}>
          <Typography variant="h1" align='left'>
            Find A Tutor
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
              {/* <Bundle/> */}
            </Grid>
            <Grid
              item
              lg={12}
              md={12}
              xl={12}
              xs={12}
            >
              <ChildDetails props={props}/>
            </Grid>
            <Grid
              item
              lg={12}
              md={12}
              xl={12}
              xs={12}
            >
              <Availability/>
            </Grid>
            <Grid
              item
              lg={12}
              md={12}
              xl={12}
              xs={12}
            >
              <SpecialRequests/>
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
                      <Summary tutee={props.tutees[0]}/>
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose} color="primary">
                      Cancel
                    </Button>
                    <Button onClick={handleClose} color="primary" autoFocus>
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
