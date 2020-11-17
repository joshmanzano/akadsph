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
        promo: ''
      }
      props.setPromo(this.state)
    }

  
    changeHandler = (event) => {
      let nam = event.target.name;
      let val = event.target.value;
      this.setState({[nam]: val});
      this.props.setPromo(this.state)
    }

   

    render(){
    
  return (
    <React.Fragment>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="promo"
                helperText="Optional"
                variant="outlined"
                fullWidth
                id="promo-code"
                defaultValue="AKADSPH2020"
                label="Promo Code"
                autoFocus
                onChange={this.changeHandler}
              />
            </Grid>
            
          </Grid>
      </React.Fragment>
  );
    
    }
}

export default withStyles(styles)(SignUp);