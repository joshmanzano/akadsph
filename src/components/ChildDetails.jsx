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
  FormGroup,
  FormLabel,
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
        subjects_struggle: this.props.subjects_struggle,
        help_type: this.props.help_type,
        reason_tutoring: this.props.reason_tutoring,
        other: this.props.other,
      }
    }

    changeHandler = (event) => {
      let nam = event.target.name;
      let val = event.target.value;
      this.setState({[nam]: val}, () => {
        this.props.setSurvey(this.state)
      });
    }

    handleSubjects = (event) =>{
      var temp = this.state.subjects_struggle
      var index = temp.findIndex(obj => obj.subject === event.target.name)
      temp[index].checked = event.target.checked
      this.setState({subjects_struggle: temp}, () => {
        this.props.setSurvey(this.state)
      })
    }

    handleReasons = (event) =>{
      var temp = this.state.reason_tutoring
      var index = temp.findIndex(obj => obj.reason === event.target.name)
      temp[index].checked = event.target.checked
      this.setState({reason_tutoring: temp}, () => {
        this.props.setSurvey(this.state)
      })
    }

    render(){
    const props = this.props;
    const {classes} = this.props;
    const gradeLevels = ['Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5', 'Grade 6', 'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10'];
    const subjectselections = ['Math', 'English', 'Filipino', 'Science'];

  return (
    <React.Fragment>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={12}>
              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">What subject does your child need help with? Please check all that apply.*</FormLabel>
                <FormGroup>
                  {this.state.subjects_struggle.map((subject) =>(
                     <FormControlLabel
                     control={<Checkbox checked={subject.checked} onChange={this.handleSubjects} name={subject.subject} />}
                     label={subject.subject}
                   />
                  ))}
                 
                </FormGroup>
              </FormControl>
             
            </Grid>
            {/* <Grid item xs={12} sm={12}>
              <FormLabel component="legend">What kind of help does your child need?</FormLabel>
              <TextField 
              id="help_type" 
              name="help_type"
              label="Answer here" 
              variant="outlined" fullWidth
              multiline
              rows={4}
              onChange={this.changeHandler}
              value={this.state.help_type}
              />
            </Grid> */}
            
            <Grid item xs={12} sm={12}>
              <FormControl component="fieldset" className={classes.formControl}>
                  <FormLabel component="legend">Why do you want your child to be tutored? Please check all that apply.*</FormLabel>
                  <FormGroup>
                    {this.state.reason_tutoring.map((reason) =>(
                      <FormControlLabel
                      control={<Checkbox checked={reason.checked} onChange={this.handleReasons} name={reason.reason} />}
                      label={reason.reason}
                    />
                    ))}
                  
                  </FormGroup>
                </FormControl>
                {this.state.reason_tutoring[5].checked === true ?
                  <TextField 
                  id="other" 
                  name="other"
                  variant="outlined" fullWidth
                  onChange={this.changeHandler}
                  value={this.state.other}
                  label="Specify here"
                  />
                :
                <React.Fragment></React.Fragment>
              }
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