import React, {useEffect} from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  useTheme,
  makeStyles,
  colors,
  Grid,
  Tooltip,
  Button,
  Box,
  Container,
  TextField,
  InputAdornment,
  Snackbar,
  Typography, 
  IconButton,
} from '@material-ui/core';
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    // DialogTitle,
  } from '@material-ui/core';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
  
import MuiDialogTitle from '@material-ui/core/DialogTitle';
  
import CloseIcon from '@material-ui/icons/Close';

import { withStyles } from '@material-ui/core/styles';


import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

import AccountDetails from 'src/components/AccountDetails';
import ChildDetails from 'src/components/ChildDetails';
import OtherParentDets from 'src/components/OtherParentDets';

import {post_api} from 'src/Api';

import Toast from 'light-toast';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%'
  },
  avatar: {
    backgroundColor: colors.red[600],
    height: 56,
    width: 56
  },
  differenceIcon: {
    color: colors.red[900]
  },
  differenceValue: {
    color: colors.red[900],
    marginRight: theme.spacing(1)
  },
  closeButton: {
    float:'right', marginTop: '5px'

  },
  dialogTitle:{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '4px 2px 5px 20px',
  }, 
  dialogStyle:{
    minWidth: "60vh",
  },
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

const ModalAddParent = ({props, open, setOpen, className, ...rest }) => {
  const classes = useStyles();
  // const [open, setOpen] = React.useState(false);

  const [activeStep, setActiveStep] = React.useState(0);
  const [accountDetails, setAccount] = React.useState();
  const [childDetails, setChild] = React.useState();
  // const [promoDetails, setPromo] = React.useState();
 
  const steps = ['Account Details', 'Child Details'];

  useEffect(() => {
    if(activeStep === steps.length){
      const data = accountDetails;
      data['child'] = childDetails;
      props.register(data)
    }
  },[activeStep])

  function getStepContent(step, props) {
    switch (step) {
      case 0:
        return /*<span>Potato</span>*/ <AccountDetails setAccount={setAccount} {...accountDetails} admin={true}/>;
      case 1:
         return <ChildDetails setChild={setChild} {...childDetails}/>;
      // case 2:
      //   return <OtherParentDets/>;
      default:
        throw new Error('Unknown step');
    }
  }

  const register = (data) => {
    Toast.loading('Adding parent...')
    post_api('register-parent', data, (res) => {
      console.log(res)
      window.location.replace('/')
    })
  }

  const handleNext = () => {
    console.log(activeStep);
    console.log(accountDetails)
    console.log(childDetails)
    // console.log(promoDetails)
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const submitHandler = (event, props) => {
    event.preventDefault();
    console.log(props)
    console.log(accountDetails)
    console.log(childDetails)
    const data = {
      username: accountDetails['email'],
      first_name: accountDetails['givenName'],
      last_name: accountDetails['familyName'],
      email: accountDetails['email'],
      phone: accountDetails['phone'],
      picture: '',
      child: childDetails,
    }
    register(data)
  }


  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };

  const DialogTitle = withStyles(useStyles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <React.Fragment>
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
          <Typography variant="h4">{children}</Typography>
          {onClose ? (
            <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
              <CloseIcon />
            </IconButton>
          ) : null}
        </MuiDialogTitle>
        <Divider/>
        <br/>
      </React.Fragment>
    );
  });

  return (
    <Dialog
    open={open}
    onClose={handleClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
    className={classes.dialogStyle}
    fullWidth={true}
    maxWidth={'sm'}
    >
        <DialogTitle onClose={handleClose} id="alert-dialog-title" className={classes.dialogTitle}>{"Add Parent"}</DialogTitle>
        <DialogContent >
          <React.Fragment>
        
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h1" gutterBottom>
                  Successfully Registered!
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
                  {activeStep === steps.length - 1 ?
                    <React.Fragment></React.Fragment>
                    :
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                    align='right'
                    style={{textAlign: 'right'}}
                  >
                    Next
                    {/* {activeStep === steps.length - 1 ? 'Save' : 'Next'} */}
                  </Button>   
                }
                  </Grid>
                </Grid>

                </Box>
              </React.Fragment>
            )}
          </React.Fragment>
          </React.Fragment>
        </DialogContent>
        
        <DialogActions>
          <Button onClick={handleClose} color="primary">
              Cancel
          </Button>
          <Button onClick={submitHandler} color="primary" autoFocus>
              Save
          </Button>
        </DialogActions>
    </Dialog>
  );
};

ModalAddParent.propTypes = {
  className: PropTypes.string
};

export default ModalAddParent;
