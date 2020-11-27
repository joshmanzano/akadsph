import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
  makeStyles,
  Typography,
  Grid,
  Container,
  Select,
  FormControl,
  InputLabel,
  CardHeader,
  Divider,
} from '@material-ui/core';
import PublishIcon from '@material-ui/icons/Publish';
import { Search as SearchIcon } from 'react-feather';
import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import FileUpload from './FileUpload';
import { DropzoneDialog } from 'material-ui-dropzone';

const useStyles = makeStyles((theme) => ({
  root: {},
  importButton: {
    // marginRight: theme.spacing(1)
  },
  exportButton: {
    // marginRight: theme.spacing(1)
  },
  bundleButton: {
    minWidth: "30vh",
    paddingTop: "7%",
    paddingBottom: "7%",
  },
}));

const ChildDetails = ({ className, data, setData, props, ...rest }) => {
  const classes = useStyles();
  const topicselections = ['Algebra', 'Calculus', 'Mga Tula', 'Vocabulary'];
  const [tutorOption, setTutorOption] = React.useState(true);
  const [open, setOpen] = React.useState(false);

  const handleRadioChange = (event) => {
    if(event.target.value == 'all-tutors'){
      data['allTutors'] = true;
      setTutorOption(true);
    }else{
      data['allTutors'] = false;
      setTutorOption(false);
    }
  };

  const handleChange = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    data[nam] = props[nam][val];
    setData(data)
  }

  const handleFreeChange = (event, value) => {
    data['topics'] = value; 
    setData(data)
  }

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      {/* <Typography variant="h4" align='center'>
            Tutoring Details
      </Typography> */}
      <Box /*mt={3}*/>
        <Card>
        <CardHeader
          subheader="Input the relevant information"
          title="Tutoring Details"
        />
        <Divider />
          <CardContent >
            <Box>
              <Grid container spacing={2} >
                
                <Grid
                  item
                  lg={4}
                  md={4}
                  xl={4}
                  xs={12}
                >
                  <Grid container spacing={2}>

                    <Grid item xs={12}>  
                      <FormControl onChange={handleChange} variant="outlined" className={classes.formControl} fullWidth>
                        <InputLabel>Tutee's Name</InputLabel>
                        <Select
                          fullWidth
                          native
                          label="Child's Name"
                          inputProps={{
                            name: 'tutees',
                            id: 'tutees',
                          }}
                        >
                        {props.tutees.map((tutee, index) =>
                          <option value={index}>{tutee.first_name}</option>
                        )}
                        </Select>
                      </FormControl>
                    </Grid>

                    {/* <Grid item xs={12}>
                      <Typography variant="h5">
                        Tutee's Grade Level
                      </Typography>
                    </Grid> */}

                    <Grid item xs={12}>
                      <FormControl onChange={handleChange} variant="outlined" className={classes.formControl} fullWidth>
                        <InputLabel>Grade Level</InputLabel>
                        <Select
                          native
                          label="Grade Level"
                          inputProps={{
                            name: 'year_level',
                            id: 'year_level',
                          }}
                        >
                        <option value={data['tutees'].year_level}>{data['tutees'].year_level}</option>
                        </Select>
                      </FormControl> 
                    </Grid>
                    <Grid item xs={12}>
                      
                      <FormControl onChange={handleChange} variant="outlined" className={classes.formControl} fullWidth>
                        <InputLabel>Length of Session</InputLabel>
                        <Select
                          native
      
                          label="Length of Session"
                          inputProps={{
                            name: 'lengths',
                            id: 'lengths',
                          }}
                        >
                          {props.lengths.map((length, index) => 
                            <option value={index}>{length.name}</option>
                          )}
                          {/* <option value={10}>1 hour</option>
                          <option value={20}>1 hour 30 minutes</option>
                          <option value={10}>2 hours</option> */}
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>
                
                </Grid>

                <Grid
                  item
                  lg={4}
                  md={4}
                  xl={4}
                  xs={12}
                >
                <Grid container spacing={2}>
                  {/* <Grid item xs={12}>
                      <Typography variant="h5">
                          Sessions and Tutor Details
                      </Typography>
                    </Grid> */}
                  
                    <Grid item xs={12}>
                      <FormControl component="fieldset">
                        <FormLabel component="legend">Tutor Options</FormLabel>
                        <RadioGroup name="tutor-choice" defaultValue="all-tutors" onChange={handleRadioChange}>
                          <FormControlLabel value="all-tutors" control={<Radio />} label="All Tutors Accepted" />
                          <FormControlLabel value="fave-tutors" control={<Radio />} label="Favorite Tutors Only" />
                          
                        </RadioGroup>
                      </FormControl>
                     
                    </Grid>
                    <Grid item xs={12}>
                      <FormControl onChange={handleChange} variant="outlined" className={classes.formControl} fullWidth disabled={tutorOption}>
                        <InputLabel>Favorite Tutors</InputLabel>
                        <Select
                          native
      
                          label="Favorite Tutors"
                          inputProps={{
                            name: 'favtutors',
                            id: 'favtutors',
                          }}
                        >
                          {props.favtutors.map((tutor, index) => 
                            <option value={index}>{tutor}</option>
                          )}
                          {/* <option value={10}>Tolo Pena</option>
                          <option value={20}>Charles Samoy</option> */}
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>
                </Grid>


                <Grid
                  item
                  lg={4}
                  md={4}
                  xl={4}
                  xs={12}
                >
                  <Grid container spacing={2}>
                    {/* <Grid item xs={12}>
                    <Typography variant="h5">
                        Let us know the subject, topics, and materials
                    </Typography>
                    </Grid> */}
                    <Grid item xs={12}>
                      <FormControl onChange={handleChange} variant="outlined" className={classes.formControl} fullWidth>
                        <InputLabel>Subject</InputLabel>
                        <Select
                          native
                          label="Subject"
                          inputProps={{
                            name: 'subjects',
                            id: 'subjects',
                          }}
                        >
                          {props.subjects.map((subject, index) => 
                            <option value={index}>{subject.subject_field}</option>
                          )}
                          {/* <option value={10}>Math</option>
                          <option value={20}>Science</option>
                          <option value={10}>Filipino</option>
                          <option value={10}>English</option>
                          <option value={20}>Chinese</option> */}
                        </Select>
                      </FormControl> 
                    </Grid>
                    <Grid item xs={12}>
                    {/* <TextField
                        fullWidth
                        label="Topic/s"
                        name="topics"
                        required
                        variant="outlined"
                        helperText="(e.g. Algebra, Trigonometry, Vocalubary)"
                      /> */}
                      <Autocomplete
                        multiple
                        id="tags-filled"
                        name='topics'
                        options={topicselections.map((option) => option)}
                        freeSolo
                        variant="outlined"
                        renderTags={(value, getTagProps) =>
                          value.map((option, index) => (
                            <Chip variant="outlined" label={option} {...getTagProps({ index })} />
                          ))
                        }
                        renderInput={(params) => (
                          <TextField {...params} variant="outlined" label="Topic/s" placeholder="Topic" helperText="(e.g. Algebra, Trigonometry, Vocalubary)"/>
                        )}
                        onChange={handleFreeChange}
                      />
                    </Grid>
                    <Grid item xs={12} align='center'>
                    <Typography variant="h6">
                        Upload any relevant materials such handouts or slides
                    </Typography>
                    <Button variant="contained" color="primary" startIcon={<PublishIcon/>} onClick={() => setOpen(true)}>
                      Upload Files
                    </Button>
                    <DropzoneDialog open={open}
                      onClose={() => setOpen(false)}
                    
                    />
                      {/* <Button className={classes}  
                        color="primary"
                        variant="contained"
                        startIcon={<PublishIcon/>}>
                        Upload Files
                      </Button> */}
                    </Grid>
                    
                    
                  </Grid>
                  
                </Grid>
                
                
 
              </Grid>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

ChildDetails.propTypes = {
  className: PropTypes.string
};

export default ChildDetails;
