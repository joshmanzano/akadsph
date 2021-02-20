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
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';



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
        promo_code: this.props.promo_code,
        referral_code: this.props.referral_code,
        referrer: '',
      }
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
                name="referral_code"
                helperText="Optional"
                variant="outlined"
                fullWidth
                id="promo-code"
                defaultValue={this.state.referral_code}
                label="Referral Code"
                autoFocus
                onChange={this.changeHandler}
              />
            </Grid>
            {/* <Grid item xs={12}>
              <TextField
                name="promo_code"
                helperText="Optional"
                variant="outlined"
                fullWidth
                id="promo-code"
                defaultValue={this.state.promo_code}
                label="Promo Code"
                autoFocus
                onChange={this.changeHandler}
              />
            </Grid> */}
            <Grid item xs={12}>
              <FormControl component="fieldset">
                <FormLabel component="legend">How did you find out about us?</FormLabel>
                <RadioGroup name="referrer" value={this.state.referrer} onChange={this.changeHandler}>
                  <FormControlLabel value="google" control={<Radio />} label="Google" />
                  <FormControlLabel value="facebook" control={<Radio />} label="Facebook" />
                  <FormControlLabel value="instagram" control={<Radio />} label="Instagram" />
                  <FormControlLabel value="linkedin" control={<Radio />} label="LinkedIn" />
                  <FormControlLabel value="friend" control={<Radio />} label="A post from a friend on social media" />
                  <FormControlLabel value="word" control={<Radio />} label="Word of mouth" />
                  <FormControlLabel value="other" control={<Radio/>} label="Other" />
                </RadioGroup>
                {this.state.referrer == 'other' &&
                <TextField
                  disabled={this.state.referrer != 'other'}
                  variant="outlined"
                />
                }
              </FormControl>
            </Grid>
            
          </Grid>
      </React.Fragment>
  );
    
    }
}

export default withStyles(styles)(SignUp);