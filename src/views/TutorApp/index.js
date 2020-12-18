import React, { useState } from 'react';
import {useEffect} from 'react';
import {
  Box,
  makeStyles,
  Typography,
  Grid,
  Button,
  Card,
  Divider,
} from '@material-ui/core';
import Page from 'src/components/Page';
import data from './data';
import FormDetails from './FormDetails';
import Biodata from './Biodata';

import AppSent from './AppSent'

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';

import LoadingBack from 'src/components/loadingBack';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 1000,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(1),
    // marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
    //   marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
    textAlign: 'right',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(0),
  },
  alreadyLink: {
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginBottom: theme.spacing(6),
    },
  },
}));




export default function(props){
  const classes = useStyles();
  const [customers] = useState(data);
  const [detailsDone, setDetailsDone] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const steps = ['About You', 'Tutoring Related Details', 'Mode of Payment'];
  const [activeStep, setActiveStep] = React.useState(0);

  useEffect(() => {
    if(activeStep === steps.length){
      // const data = accountDetails;
      // data['child'] = childDetails;
      // props.register(data)
    }
  },[activeStep])

  function getStepContent(step, props) {
    switch (step) {
      case 0:
        return <Biodata/>;
      case 1:
        return <Biodata/>;
      case 2:
        return <Biodata/>;
      default:
        throw new Error('Unknown step');
    }
  }

  const handleSend = (event) => {
    setDetailsDone(!detailsDone);
  };

  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleNext = () => {
      console.log(activeStep);
      setActiveStep(activeStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep(activeStep - 1);
    };

  return (
    <Page
      className={classes.root}
      title="Tutor Application - AKADSPH" 
    >
      {activeStep === steps.length ? (
        <React.Fragment>
          <AppSent/>
        </React.Fragment>
      ) : (
      <React.Fragment>
        <main className={classes.layout}>
          <LoadingBack processing={activeStep === steps.length}/>
          <Box my={3}>
            <Typography variant="h1" align='center'>
              Tutor Application
            </Typography>
          </Box>
          <Card className={classes.paper}>
            <Stepper activeStep={activeStep} className={classes.stepper}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <Divider mb={2}/>
            <React.Fragment>
              
                <React.Fragment>
                  <Box my={3}>
                    {getStepContent(activeStep, props)}
                  </Box>
                  <Box>

                  <Grid container spacing={0} className={classes.buttons}>
                    <Grid item
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
                    align='right'
                    >
                    {activeStep !== 0 && (
                      <Button onClick={handleBack} className={classes.button}>
                        Back
                      </Button>
                    )}
                
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      className={classes.button}
                      align='right'
                      style={{textAlign: 'right'}}
                    >
                      {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                    </Button>
                    </Grid>
                  </Grid>

                  </Box>
                </React.Fragment>
              
            </React.Fragment>
          </Card>
        </main>
      </React.Fragment>
      )}
    </Page>
  );
};

