import React, {useEffect, useState} from 'react';
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

import OtherParentDets from 'src/components/OtherParentDets';
import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';
import ModeOfPayment from 'src/views/TutorApp/ModeOfPayment';
import OtherTutorDets from 'src/components/OtherTutorDets';

import Toast from 'light-toast';

import {post_api} from 'src/Api';


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

const ModalAddParent = ({props, subjects, open, setOpen, className, ...rest }) => {
  const classes = useStyles();

  const subjectselections = subjects;

  const submitHandler = (event, props) => {
    event.preventDefault();
    // this.props.register(this.state)
  }

  const [tutorDetails, changeDetails] = useState({
    'username':'',
    'first_name':'',
    'last_name':'',
    'email':'',
    'school':'',
    'course':'',
    'achievements':'',
    'phone':'',
    'picture':'',
    'bank_name':'',
    'bank_account_number':'',
    'bank_account_name':'',
    'bank_account_type':'',
    'subjects':[]
  })


  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    Toast.loading('Adding tutor...')
    tutorDetails['username'] = tutorDetails['email']
    changeDetails(tutorDetails)
    post_api('register-tutor',tutorDetails,res => {
      Toast.success('Added tutor!',500)
      window.location.reload()
    })
    setOpen(false);
  };

  const changeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    console.log(nam)
    console.log(val)
    tutorDetails[nam] = val
    changeDetails(tutorDetails)
  }

  const changeSubjects = (event, value) => {
    tutorDetails['subjects'] = value
    changeDetails(tutorDetails)
  }

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
        <DialogTitle onClose={handleClose} id="alert-dialog-title" className={classes.dialogTitle}>{"Add Tutor"}</DialogTitle>
        <DialogContent >
        <Box>
          <Grid container spacing={3} >
              <Grid
                item
                lg={12}
                md={12}
                xl={12}
                xs={12}
              >
                <Typography variant="h3">
                  Contact Details
                </Typography>
              </Grid> 
              <Grid
                item
                lg={6}
                md={6}
                xl={6}
                xs={12}
              >
                <TextField onChange={changeHandler} name="first_name" id="outlined-basic" label="First Name" variant="outlined" fullWidth/>
              </Grid> 
              <Grid
                item
                lg={6}
                md={6}
                xl={6}
                xs={12}
              >
                <TextField onChange={changeHandler} name="last_name" id="outlined-basic" label="Last Name" variant="outlined" fullWidth/>
              </Grid> 
              <Grid
                item
                lg={6}
                md={6}
                xl={6}
                xs={12}
              >
                <FormControl component="fieldset">
                  <FormLabel component="legend">Sex</FormLabel>
                  <RadioGroup disabled row name="tutor-sex">
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    
                  </RadioGroup>
                </FormControl>
              </Grid> 
              <Grid
                item
                lg={6}
                md={6}
                xl={6}
                xs={12}
              >
                <TextField onChange={changeHandler} name="birth_date" id="outlined-basic" label="Birth Date" variant="outlined" type="date" InputLabelProps={{ shrink: true }}fullWidth/>
              </Grid> 

              <Grid
                item
                lg={6}
                md={6}
                xl={6}
                xs={12}
              >
                <TextField onChange={changeHandler} name="email" id="outlined-basic" label="Email Address" type="email" variant="outlined" fullWidth/>
              </Grid> 
              <Grid
                item
                lg={6}
                md={6}
                xl={6}
                xs={12}
              >
                <TextField onChange={changeHandler} name="phone" id="outlined-basic" label="Cellphone Number (+63)" type="phone" variant="outlined"           InputProps={{
                  startAdornment: <InputAdornment position="start">+63</InputAdornment>,
                }}fullWidth/>
              </Grid> 
              <Grid
                item
                lg={12}
                md={12}
                xl={12}
                xs={12}
              >
                <Typography variant="h3">
                  Education Background
                </Typography>
              </Grid> 
              <Grid
                item
                lg={6}
                md={6}
                xl={6}
                xs={12}
              >
                <TextField onChange={changeHandler} name="school" id="outlined-basic" label="Tertiary Education" type="college" variant="outlined" placeholder="Ex. Ateneo De Manila University" fullWidth/>
              </Grid> 
              {/* <Grid
                item
                lg={4}
                md={4}
                xl={4}
                xs={12}
              >
                <TextField id="outlined-basic" label="Year of Graduation" type="year" variant="outlined" fullWidth/>
              </Grid>  */}
              <Grid
                item
                lg={6}
                md={6}
                xl={6}
                xs={12}
              >
                <TextField onChange={changeHandler} name="course" id="outlined-basic" label="Course/Major" type="course" variant="outlined" placeholder="Ex. BS Information Technology Entrepreneurship" fullWidth/>
              </Grid> 
              <Grid
                item
                lg={12}
                md={12}
                xl={12}
                xs={12}
              >
                <TextField onChange={changeHandler} name="achievements" id="outlined-basic" label="Notable Achievements" type="course" variant="outlined" placeholder="Ex. Consistent Dean's Lister" fullWidth/>
              </Grid>
              <Grid
                item
                lg={12}
                md={12}
                xl={12}
                xs={12}
              >
                <Autocomplete
                  multiple
                  id="tags-filled"
                  options={subjectselections.map((option) => option)}
                  freeSolo
                  variant="outlined"
                  renderTags={(value, getTagProps) =>
                    value.map((option, index) => (
                      <Chip variant="outlined" label={option} {...getTagProps({ index })} />
                    ))
                  }
                  renderInput={(params) => (
                    <TextField {...params} variant="outlined" label="Subjects Teaching" />
                  )}
                  onChange={changeSubjects}
                />
              </Grid> 
              <Grid
                item
                lg={12}
                md={12}
                xl={12}
                xs={12}
              >
                <Typography variant="h3">
                  Mode of Payment
                </Typography>
              </Grid> 
              <Grid
                item
                lg={6}
                md={6}
                xl={6}
                xs={12}
              >
                <TextField onChange={changeHandler} name="bank_name" id="outlined-basic" label="Bank Name" variant="outlined" fullWidth/>
              </Grid> 
              <Grid
                item
                lg={6}
                md={6}
                xl={6}
                xs={12}
              >
                <TextField onChange={changeHandler} name="bank_account_number" id="outlined-basic" label="Bank Account Number" type="number" variant="outlined" fullWidth/>
              </Grid> 
              <Grid
                item
                lg={6}
                md={6}
                xl={6}
                xs={12}
              >
                <TextField onChange={changeHandler} name="bank_account_name" id="outlined-basic" label="Bank Account Name" variant="outlined" fullWidth/>
              </Grid> 
              <Grid
                item
                lg={6}
                md={6}
                xl={6}
                xs={12}
              >
                <TextField onChange={changeHandler} name="bank_account_type" id="outlined-basic" label="Bank Account Type" variant="outlined" fullWidth/>
              </Grid> 
              {/* <Grid
                item
                lg={12}
                md={12}
                xl={12}
                xs={12}
              >
                <ModeOfPayment/>
              </Grid> */}
              {/* <Grid
                item
                lg={12}
                md={12}
                xl={12}
                xs={12}
              >
                <Typography variant="h3">
                  Other Details
                </Typography>
              </Grid> 
              <Grid
                item
                lg={12}
                md={12}
                xl={12}
                xs={12}
              >
                <OtherTutorDets/>
              </Grid>  */}
            </Grid>


          </Box>
        </DialogContent>
        
        <DialogActions>
          <Button onClick={handleClose} color="primary">
              Cancel
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
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
