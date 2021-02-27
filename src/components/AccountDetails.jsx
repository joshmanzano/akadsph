import React, {Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
import {Paper, InputAdornment} from '@material-ui/core';
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
import validator from 'validator';

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
        givenName: props.givenName,
        familyName: props.familyName,
        email: props.email,
        googleId: props.googleId,
        phone: props.phone,
        picture: props.picture,
        validEmail: true,
        validPhone: true,
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
      this.setState({[nam]: val}, () => {
        this.props.setAccount(this.state);
      });

      if(nam === "email"){
        this.setState({validEmail: validator.isEmail(val)})
      }else if (nam === "phone"){
        this.setState({validPhone: validator.isMobilePhone(val)})
      }

    }

    phoneChangeHandler = (val) => {
      this.setState({"phone": val}, () => {
        this.props.setAccount(this.state);
      });
      // this.setState({"phone": val});
      // this.props.setAccount(this.state);
      
    }

    

    render(){
    const props = this.props;
    const {classes} = this.props;
    const validEmail = true;

  return (
    <React.Fragment>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="givenName"
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
                id="familyName"
                label="Last Name"
                name="familyName"
                defaultValue={props.familyName}
                value={this.state.lastName}
                autoComplete="lname"
                onChange={this.changeHandler}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                error={!this.state.validEmail}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address (Gmail)"
                name="email"
                value={props.email}
                autoComplete="email"
                onChange={this.changeHandler}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField name="phone" error={!this.state.validPhone} value={props.phone} id="outlined-basic" label="Cellphone Number (+63)" type="phone" variant="outlined"           InputProps={{
                startAdornment: <InputAdornment position="start">+63</InputAdornment>,
              }}
              fullWidth required
              onChange={this.changeHandler}
              />
              {/* <TextField
                variant="outlined"
                required
                fullWidth
                id="phone"
                label="Phone Number"
                name="phone"
                value={props.phone}
                autoComplete="phone"
                onChange={this.changeHandler}
              /> */}
                {/* <MuiPhoneNumber name="phone" value={this.state.phone} fullWidth variant="outlined" defaultCountry={'ph'} onlyCountries={['ph']} onChange={this.phoneChangeHandler} autoFormat={false} countryCodeEditable={false}/>, */}
            </Grid>
            
          </Grid>
      </React.Fragment>
  );
    }
}

export default withStyles(styles)(SignUp);