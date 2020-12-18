import React from 'react';
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
import CssBaseline from '@material-ui/core/CssBaseline';
import {DropzoneArea} from 'material-ui-dropzone'

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
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const ChildDetails = ({ className, ...rest }) => {
  const classes = useStyles();
  const subjectselections = ['Math', 'English', 'Filipino', 'Science'];

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      {/* <Typography variant="h4" align='center'>
            Tutoring Details
      </Typography> */}
      <Box mx={2}>
          
            <Box mx={2} /*maxWidth={1000}*/>

              <Grid container spacing={3} >
                <Grid
                  item
                  lg={2}
                  md={2}
                  xl={2}
                  xs={0}
                >
                </Grid>
                <Grid
                  item
                  lg={4}
                  md={4}
                  xl={4}
                  xs={12}
                >
                  <TextField id="outlined-basic" label="First Name" variant="outlined" fullWidth/>
                </Grid> 
                <Grid
                  item
                  lg={4}
                  md={4}
                  xl={4}
                  xs={12}
                >
                  <TextField id="outlined-basic" label="Last Name" variant="outlined" fullWidth/>
                </Grid> 
                <Grid
                  item
                  lg={2}
                  md={2}
                  xl={2}
                  xs={0}
                >
                </Grid>
                <Grid
                  item
                  lg={2}
                  md={2}
                  xl={2}
                  xs={0}
                >
                </Grid>
                <Grid
                  item
                  lg={4}
                  md={4}
                  xl={4}
                  xs={12}
                >
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Sex</FormLabel>
                    <RadioGroup row name="tutor-sex">
                      <FormControlLabel value="male" control={<Radio />} label="Male" />
                      <FormControlLabel value="female" control={<Radio />} label="Female" />
                      
                    </RadioGroup>
                  </FormControl>
                </Grid> 
                <Grid
                  item
                  lg={4}
                  md={4}
                  xl={4}
                  xs={12}
                >
                  <TextField id="outlined-basic" label="Birth Date" variant="outlined" type="date" InputLabelProps={{ shrink: true }}fullWidth/>
                </Grid> 
                <Grid
                  item
                  lg={2}
                  md={2}
                  xl={2}
                  xs={0}
                >
                </Grid>
                <Grid
                  item
                  lg={2}
                  md={2}
                  xl={2}
                  xs={0}
                >
                </Grid>
                <Grid
                  item
                  lg={8}
                  md={8}
                  xl={8}
                  xs={12}
                >
                  <TextField id="outlined-basic" label="Email Address" type="email" variant="outlined" fullWidth/>
                </Grid> 
                <Grid
                  item
                  lg={2}
                  md={2}
                  xl={2}
                  xs={0}
                ></Grid>
                <Grid
                  item
                  lg={2}
                  md={2}
                  xl={2}
                  xs={0}
                >
                </Grid>
                <Grid
                  item
                  lg={4}
                  md={4}
                  xl={4}
                  xs={12}
                >
                  <TextField id="outlined-basic" label="Cellphone Number (+63)" type="phone" variant="outlined"           InputProps={{
            startAdornment: <InputAdornment position="start">+63</InputAdornment>,
          }}fullWidth/>
                </Grid> 
                <Grid
                  item
                  lg={4}
                  md={4}
                  xl={4}
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
                      <TextField {...params} variant="outlined" label="What subjects do you teach?" />
                    )}
                  />
                </Grid> 
                <Grid
                  item
                  lg={2}
                  md={2}
                  xl={2}
                  xs={0}
                >
                </Grid>
                <Grid
                  item
                  lg={2}
                  md={2}
                  xl={2}
                  xs={0}
                ></Grid>

                <Grid
                  item
                  lg={8}
                  md={8}
                  xl={8}
                  xs={12}
                >
                  <FormControl variant="outlined" className={classes.formControl} fullWidth>
                    <InputLabel>How much tutoring experience do you have?</InputLabel>
                    <Select
                      native

                      label="How much tutoring experience do you have?"
                      inputProps={{
                        name: 'subject-matter',
                        id: 'subject-matter',
                      }}
                    >
                      <option aria-label="None" value="" />
                      <option value={10}>None</option>
                      <option value={20}>Less than 12 months</option>
                      <option value={10}>More than a year</option>
                      
                    </Select>
                  </FormControl> 
                </Grid> 
                <Grid
                  item
                  lg={2}
                  md={2}
                  xl={2}
                  xs={0}
                ></Grid>
                <Grid
                  item
                  lg={2}
                  md={2}
                  xl={2}
                  xs={0}
                >
                </Grid>
                <Grid
                  item
                  lg={8}
                  md={8}
                  xl={8}
                  xs={12}
                >
                  <FormControl variant="outlined" className={classes.formControl} fullWidth>
                    <InputLabel>What Grade Levels were the students you taught?</InputLabel>
                    <Select
                      native

                      label="What Grade Levels were the students you taught?"
                      inputProps={{
                        name: 'subject-matter',
                        id: 'subject-matter',
                      }}
                    >
                      <option aria-label="None" value="" />
                      <option value={10}>Grade 1-4 (Lower Sec)</option>
                      <option value={20}>Grade 5-7 (Middle Sec)</option>
                      <option value={10}>Grade 8-12 (High Sec)</option>
                      
                    </Select>
                  </FormControl> 
                </Grid> 
                <Grid
                  item
                  lg={2}
                  md={2}
                  xl={2}
                  xs={0}
                ></Grid>
                <Grid
                  item
                  lg={2}
                  md={2}
                  xl={2}
                  xs={0}
                >
                </Grid>
                <Grid
                  item
                  lg={8}
                  md={8}
                  xl={8}
                  xs={12}
                >
                  <Typography variant="h5">
                    School or Government ID
                  </Typography>
                  <DropzoneArea filesLimit={3}/>
                </Grid> 
                <Grid
                  item
                  lg={2}
                  md={2}
                  xl={2}
                  xs={0}
                ></Grid>
                <Grid
                  item
                  lg={2}
                  md={2}
                  xl={2}
                  xs={0}
                >
                </Grid>
                <Grid
                  item
                  lg={8}
                  md={8}
                  xl={8}
                  xs={12}
                >
                  <Typography variant="h5">
                    Transcript of Records from High School or College (Optional)
                  </Typography>
                  <DropzoneArea filesLimit={3}/>
                </Grid> 
                <Grid
                  item
                  lg={2}
                  md={2}
                  xl={2}
                  xs={0}
                ></Grid>
                
              </Grid>
            </Box>
      </Box>
    </div>
  );
};

ChildDetails.propTypes = {
  className: PropTypes.string
};

export default ChildDetails;
