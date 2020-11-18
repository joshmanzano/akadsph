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
    marginTop: theme.spacing(8),
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
});

class SignUp extends Component{

    constructor(props){
      super(props);
      this.state = {
        firstName: props.givenName,
        lastName: props.familyName,
        email: props.email,
        googleId: props.googleId,
        phone: '',
        picture: props.picture,
      }
      props.setAccount(this.state);
    }

    submitHandler = (event) => {
      event.preventDefault();
      this.props.register(this.state)
    }
    changeHandler = (event) => {
      let nam = event.target.name;
      let val = event.target.value;
      this.setState({[nam]: val});
      this.props.setAccount(this.state);
    }

    phoneChangeHandler = (val) => {
      this.setState({phone: val});
      this.props.setAccount(this.state);
    }

    render(){
    const props = this.props;
    const {classes} = this.props;
    if(props.googleId == undefined){
        window.location.replace('/')
    }else{
  return (
    <React.Fragment>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <img
                src={this.state.picture}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                defaultValue={props.givenName}
                value={this.state.firstName}
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
                value={this.state.lastName}
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
                <MuiPhoneNumber name="phone" value={this.state.phone} fullWidth variant="outlined" defaultCountry={'ph'} onlyCountries={['ph']} onChange={this.phoneChangeHandler} autoFormat={false} countryCodeEditable={false}/>,
            </Grid>
            
          </Grid>
      </React.Fragment>
  );
    }
    }
}

export default withStyles(styles)(SignUp);