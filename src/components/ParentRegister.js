import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import AccountDetails from './AccountDetails';
import Grid from '@material-ui/core/Grid';
import PromoCode from './PromoCode';
import Box from '@material-ui/core/Box';
import ChildDetails from './ChildDetails';

import LoadingBack from 'src/components/loadingBack';
import Toast from 'light-toast';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
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



export default function ParentRegister(props) {
  const classes = useStyles();
  const registerPropsString = localStorage.getItem('registerProps')
  let registerProps = {
    givenName:'',
    familyName:'',
    email:'',
    username:'',
    phone:'', 
    googleId:'',
    picture:''
  }
  if(registerPropsString != null){
    registerProps = JSON.parse(registerPropsString)
  }
  const [activeStep, setActiveStep] = React.useState(0);
  const [accountDetails, setAccount] = React.useState({
    givenName:registerProps.givenName,
    familyName:registerProps.familyName,
    email:registerProps.email,
    username:registerProps.email,
    phone: '',
    googleId:registerProps.email,
    picture:'',
  });
  const [childDetails, setChild] = React.useState({
    first_name: '',
    last_name: '',
    age: '',
    year_level: 'Grade 1',
    school: '',
    email: '',
  });
  const [promoDetails, setPromo] = React.useState({
    promo_code: '',
    referral_code: localStorage.getItem('referrer'),
    receive_marketing: true,
  });
 
  const steps = ['Parent Details', 'Child Details', 'Referral'];

  const checkRequired = (data) => {
    const requiredAccount = ['email', 'familyName', 'givenName', 'phone']
    const requiredChild = ['first_name', 'year_level']
    let complete = true
    requiredAccount.forEach(field => {
      if(data[field].trim() == ''){
        complete = false
      }
    })
    requiredChild.forEach(field => {
      if(data['child'][field].trim() == ''){
        complete = false
      }
    })
    return complete
  }

  useEffect(() => {
    if(activeStep === steps.length){
      const data = accountDetails;
      data['username'] = accountDetails['email'];
      data['child'] = childDetails;
      data['promo'] = promoDetails;
      console.log(data)
      console.log(props)
      if(checkRequired(data)){
        setProcessing(true)
        localStorage.removeItem('registerProps')
        props.register(data)
      }else{
        Toast.fail('Missing required details.',750)
      setActiveStep(activeStep - 1);
      }
    }
  },[activeStep])

  function getStepContent(step, props) {
    switch (step) {
      case 0:
        return <AccountDetails setAccount={setAccount} {...accountDetails}/>;
      case 1:
        return <ChildDetails setChild={setChild} {...childDetails}/>;
      case 2:
        return <PromoCode setPromo={setPromo} {...promoDetails}/>;
      default:
        throw new Error('Unknown step');
    }
  }

  const handleNext = () => {
    console.log(activeStep);
    console.log(accountDetails)
    console.log(childDetails)
    console.log(promoDetails)
    setActiveStep(activeStep + 1);
    if (activeStep === steps.length - 1){
      // props.refresh()
      // this.props.register(this.state)
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const submitHandler = (event, props) => {
    event.preventDefault();

  }

  const [processing,  setProcessing] = useState(false);

  return (
    <React.Fragment>
      {/* <CssBaseline />
      <AppBar position="absolute" color="default" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Company name
          </Typography>
        </Toolbar>
      </AppBar> */}
      <main className={classes.layout}>
        <LoadingBack processing={processing}/>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Parent Account Registration
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h1" gutterBottom>
                  Processing...
                </Typography>
                
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep, props)}
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
                  {/* </Grid>
                  <Grid item
                  lg={5}
                  md={5}
                  xl={5}
                  xs={6}
                  > */}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                    align='right'
                    style={{textAlign: 'right'}}
                  >
                    {activeStep === steps.length - 1 ? 'Sign Up' : 'Next'}
                  </Button>
                  </Grid>
                </Grid>

                </Box>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        <Grid container justify="flex-end">
        <Grid item>
            <Link href="/login" variant="body2" className={classes.alreadyLink}>
            Already have an account? Sign in
            </Link>
        </Grid>
        </Grid>
        <Box mt={5}>
            <Copyright />
        </Box>
      </main>
    </React.Fragment>
  );
}