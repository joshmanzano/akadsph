import React, {Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
import {Paper} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import MuiPhoneNumber from 'material-ui-phone-number';
import ParentRegister from './ParentRegister';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const styles = (theme) => ({
  paper: {
    marginTop: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  homebutton: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(0),
    color: theme.palette.primary.main,
    "&:hover": {
      color: theme.palette.text.primary,
    }
  },
});

class SignUp extends Component{

    constructor(props){
      super(props);
      this.state = {
        firstName: props.givenName,
        lastName: props.familyName,
        email: props.email,
        googleId: props.googleId,
        picture: props.picture,
        phone: '',
      }
    }

    submitHandler = (event) => {
      event.preventDefault();
      this.props.register(this.state)
    }
    changeHandler = (event) => {
      let nam = event.target.name;
      let val = event.target.value;
      this.setState({[nam]: val});
    }

    phoneChangeHandler = (val) => {
      this.setState({phone: val});
    }
    
    changeState = (state) => {
      this.setState(state);
    }

    render(){
    const props = this.props;
    const {classes} = this.props;
    if(props.googleId == undefined){
        window.location.replace('/')
    }else{
    console.log(props.googleId)
  return (
    <React.Fragment>
      <Box mx={3}> 
        <Button href="/#/login" className={classes.homebutton}  startIcon={<ArrowBackIosIcon/>}>
          Back
        </Button>
      </Box>
    <Container component="main">
      <CssBaseline />
      
      <div className={classes.paper}>
        <Box mt={6}>
            <Container align="center">
              <img height="100" src='./img/logo.png'/>
            </Container>
        </Box>
        <Container align="center">
          <ParentRegister register={this.props.register} changeState={this.changeState} givenName={this.state.firstName} familyName={this.state.lastName} email={this.state.email} googleId={this.state.googleId} picture={this.state.picture}/>
        </Container>
        {/* <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <h2>
          Sign up
        </h2>
        <form onSubmit={this.submitHandler} className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                defaultValue={props.givenName}
                label="First Name"
                autoFocus
                onChange={this.changeHandler}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                defaultValue={props.familyName}
                autoComplete="lname"
                onChange={this.changeHandler}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={props.email}
                autoComplete="email"
                onChange={this.changeHandler}
              />
            </Grid>
            <Grid item xs={12}>
                <MuiPhoneNumber name="phone" fullWidth variant="outlined" defaultCountry={'ph'} onlyCountries={['ph']} onChange={this.phoneChangeHandler} autoFormat={false} countryCodeEditable={false}/>,
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form> */}
      </div>
      {/* <Box mt={5}>
        <Copyright />
      </Box> */}
    </Container>
    </React.Fragment>
  );
    }
    }
}

export default withStyles(styles)(SignUp);