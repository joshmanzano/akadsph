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
import AddIcon from '@material-ui/icons/Add';

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
  addChild: {
    textAlign: 'center',
  },
});

class ChildDetails extends Component{

    constructor(props){
      super(props);
      this.state = {
        firstName: props.givenName,
        lastName: props.familyName,
        email: props.email,
        googleId: props.googleId,
        phone: '',
      }
      props.setChild(this.state)
    }

    submitHandler = (event) => {
      event.preventDefault();
      this.props.register(this.state)
    }

    changeHandler = (event) => {
      let nam = event.target.name;
      let val = event.target.value;
      this.setState({[nam]: val});
      this.props.setChild(this.state)
    }

    phoneChangeHandler = (val) => {
      this.setState({phone: val});
    }

    render(){
    const props = this.props;
    const {classes} = this.props;

  return (
    <React.Fragment>
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
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="age"
                label="Age"
                name="age"
                autoComplete="age"
                onChange={this.changeHandler}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="grade-level"
                label="Grade Level"
                name="grade"
                autoComplete="grade level"
                onChange={this.changeHandler}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                  variant="outlined"
                  fullWidth
                  id="school"
                  label="School"
                  name="school"
                  autoComplete="school"
                  helperText="Optional"
                  onChange={this.changeHandler}
                />
            </Grid>
            <Grid item xs={12}>
              <Button
                startIcon={<AddIcon/>}
                variant="outlined"
                color="primary"
                className={classes.addChild}
                >
                Add Another Child
              </Button>
            </Grid>
          </Grid>
      </React.Fragment>
  );
    }
}

export default withStyles(styles)(ChildDetails);