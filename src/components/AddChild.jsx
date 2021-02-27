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
import Autocomplete from '@material-ui/lab/Autocomplete';
import {
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from '@material-ui/core';

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
        first_name: this.props.first_name,
        last_name: this.props.last_name,
        age: this.props.age,
        year_level: this.props.year_level,
        school: this.props.school,
        email: this.props.email,
      }
    }

    changeHandler = (event) => {
      let nam = event.target.name;
      let val = event.target.value;
      this.setState({[nam]: val}, () => {
        this.props.setChild(this.state)
      });
    }

    render(){
    const props = this.props;
    const {classes} = this.props;
    const gradeLevels = ['Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5', 'Grade 6', 'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10'];
  return (
    <React.Fragment>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="first_name"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                defaultValue={this.state.first_name}
                label="Child's First Name"
                autoFocus
                onChange={this.changeHandler}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
            <FormControl variant="outlined" className={classes.formControl} fullWidth>
              <InputLabel>Grade Level</InputLabel>
              <Select
                native
                variant="outlined"
                fullWidth
                label="Grade Level"
                required 
                id="grade-level"
                name="year_level"
                defaultValue={this.state.year_level}
                onChange={this.changeHandler}
                inputProps={{
                  name: 'year_level',
                  id: 'grade-level',
                }}
              >
                {gradeLevels.map((level) => (
                  <option key={level} value={level} >
                    {level}
                  </option>
                ))}
                
              </Select>
            </FormControl> 
            </Grid>
            {/* <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Child's Last Name"
                name="last_name"
                defaultValue={this.state.last_name}
                autoComplete="lname"
                onChange={this.changeHandler}
              />
            </Grid> */}
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                id="age"
                label="Age"
                name="age"
                type="number"
                defaultValue={this.state.age}
                helperText="Optional"
                autoComplete="age"
                onChange={this.changeHandler}
              />
            </Grid>


            <Grid item xs={12} sm={6}>
              <TextField
                  variant="outlined"
                  fullWidth
                  id="school"
                  label="School"
                  name="school"
                  defaultValue={this.state.school}
                  autoComplete="school"
                  helperText="Optional"
                  onChange={this.changeHandler}
                />
            </Grid>
            <Grid item xs={12}>
              <TextField
                  variant="outlined"
                  fullWidth
                  id="email"
                  label="Child's Email Address (Gmail)"
                  name="email"
                  defaultValue={this.state.email}
                  autoComplete="email"
                  helperText="Optional - we will send video call access to your child's email so you don't have to!"
                  onChange={this.changeHandler}
                />
            </Grid>
            <Grid item xs={12}>
              {/* <Button
                startIcon={<AddIcon/>}
                variant="outlined"
                color="primary"
                className={classes.addChild}
                >
                Add Another Child
              </Button> */}
            </Grid>
          </Grid>
      </React.Fragment>
  );
    }
}

export default withStyles(styles)(ChildDetails);