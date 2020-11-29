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

const ChildDetails = ({ className, ...rest }) => {
  const classes = useStyles();
  const topicselections = ['Algebra', 'Calculus', 'Mga Tula', 'Vocabulary'];

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
            <Box /*maxWidth={1000}*/>
              {/* single line version */}
              {/* <Grid container spacing={2} justify='center' alignItem='center'>
                <Grid item lg={4} md={4} xl={4} xs={0}></Grid>
                <Grid item lg={4}
                md={4}
                xl={4}
                xs={12}>
                  <Typography variant="h5">
                    Who needs tutoring?
                  </Typography>
                </Grid>
                <Grid item lg={4} md={4} xl={4} xs={0}></Grid>
                <Grid item lg={4} md={4} xl={4} xs={0}></Grid>

                <Grid item lg={4}
                md={4}
                xl={4}
                xs={12}>
                  <FormControl variant="outlined" className={classes.formControl} fullWidth>
                    <InputLabel>Tutee's Name</InputLabel>
                    <Select
                      fullWidth
                      native

                      label="Child's Name"
                      inputProps={{
                        name: 'child-name',
                        id: 'child-name',
                      }}
                    >
                      <option aria-label="None" value="" />
                      <option value={10}>Nate Mercado</option>
                      <option value={20}>Kate Mercado</option>
                    
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item lg={4} md={4} xl={4} xs={0}></Grid>

                <Grid item lg={4} md={4} xl={4} xs={0}></Grid>
                <Grid item lg={4}
                md={4}
                xl={4}
                xs={12}>
                  <Typography variant="h5">
                    Tutee's Grade Level
                  </Typography>
                </Grid>
                <Grid item lg={4} md={4} xl={4} xs={0}></Grid>
                <Grid item lg={4} md={4} xl={4} xs={0}></Grid>
                <Grid item lg={4}
                md={4}
                xl={4}
                xs={12}>
                  <FormControl variant="outlined" className={classes.formControl} fullWidth>
                    <InputLabel>Grade Level</InputLabel>
                    <Select
                      native

                      label="Grade Level"
                      inputProps={{
                        name: 'grade-level',
                        id: 'grade-level',
                      }}
                    >
                      <option aria-label="None" value="" />
                      <option value={10}>Kinder</option>
                      <option value={10}>Prep</option>
                      <option value={10}>Grade 1</option>
                      <option value={20}>Grade 2</option>
                      <option value={10}>Grade 3</option>
                      <option value={10}>Grade 4</option>
                      <option value={20}>Grade 5</option>
                      <option value={10}>Grade 6</option>
                      <option value={10}>Grade 7</option>
                      <option value={10}>1st Year Highschool</option>
                      <option value={10}>2nd Year Highschool</option>
                      <option value={10}>3rd Year Highschool</option>
                      <option value={10}>4th Year Highschool</option>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item lg={4} md={4} xl={4} xs={0}></Grid>

                <Grid item lg={4} md={4} xl={4} xs={0}></Grid>

                <Grid item lg={4}
                md={4}
                xl={4}
                xs={12}>
                  <Typography variant="h5">
                    Let us know the subject, topics, and materials
                  </Typography> 
                </Grid>
                <Grid item lg={4} md={4} xl={4} xs={0}></Grid>

                <Grid item lg={4} md={4} xl={4} xs={0}></Grid>

                <Grid item lg={4}
                md={4}
                xl={4}
                xs={12}>
                  <FormControl variant="outlined" className={classes.formControl} fullWidth>
                    <InputLabel>Subject</InputLabel>
                    <Select
                      native
  
                      label="Subject"
                      inputProps={{
                        name: 'subject-matter',
                        id: 'subject-matter',
                      }}
                    >
                      <option aria-label="None" value="" />
                      <option value={10}>Math</option>
                      <option value={20}>Science</option>
                      <option value={10}>Filipino</option>
                      <option value={10}>English</option>
                      <option value={20}>Chinese</option>
                    </Select>
                  </FormControl> 
                </Grid>
                <Grid item lg={4} md={4} xl={4} xs={0}></Grid>
                
                <Grid item lg={4} md={4} xl={4} xs={0}></Grid>

                <Grid item lg={4}
                md={4}
                xl={4}
                xs={12}>
                  <TextField
                    fullWidth
                    label="Topic/s"
                    name="topics"
                    required
                    variant="outlined"
                    helperText="(e.g. Algebra, Trigonometry, Vocalubary)"
                  />
                </Grid>
                <Grid item lg={4} md={4} xl={4} xs={0}></Grid>
                <Grid item lg={4} md={4} xl={4} xs={0}></Grid>

                <Grid item lg={4}
                md={4}
                xl={4}
                xs={12}>
                  <Typography variant="h5">
                      Upload any relevant materials such handouts or slides
                  </Typography>
                  <Button className={classes}  
                    color="primary"
                    variant="outlined"
                    startIcon={<PublishIcon/>}>
                    Upload Files
                  </Button>
                </Grid>
                <Grid item lg={4} md={4} xl={4} xs={0}></Grid>
                <Grid item lg={4} md={4} xl={4} xs={0}></Grid>

                <Grid item lg={4}
                md={4}
                xl={4}
                xs={12}>
                  <Typography variant="h5">
                    Sessions and Tutor Details
                  </Typography>
                </Grid>
                <Grid item lg={4} md={4} xl={4} xs={0}></Grid>
                <Grid item lg={4} md={4} xl={4} xs={0}></Grid>

                <Grid item lg={4}
                md={4}
                xl={4}
                xs={12}>
                  <FormControl variant="outlined" className={classes.formControl} fullWidth>
                    <InputLabel>Length of Session</InputLabel>
                    <Select
                      native
  
                      label="Length of Session"
                      inputProps={{
                        name: 'session-length',
                        id: 'session-length',
                      }}
                    >
                      <option aria-label="None" value="" />
                      <option value={10}>1 hour</option>
                      <option value={20}>1 hour 30 minutes</option>
                      <option value={10}>2 hours</option>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item lg={4} md={4} xl={4} xs={0}></Grid>
                <Grid item lg={4} md={4} xl={4} xs={0}></Grid>

                <Grid item lg={4}
                md={4}
                xl={4}
                xs={12}>
                  <FormControl variant="outlined" className={classes.formControl} fullWidth>
                    <InputLabel>Tutor Options</InputLabel>
                    <Select
                      native
  
                      label="Tutor Options"
                      inputProps={{
                        name: 'tutor-options',
                        id: 'tutor-options',
                      }}
                    >
                      <option aria-label="None" value="" />
                      <option value={10}>Favorite Tutors Only</option>
                      <option value={20}>All Tutors Accepted</option>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item lg={4} md={4} xl={4} xs={0}></Grid>
                <Grid item lg={4} md={4} xl={4} xs={0}></Grid>

                <Grid item lg={4}
                md={4}
                xl={4}
                xs={12}>
                  <FormControl variant="outlined" className={classes.formControl} fullWidth>
                    <InputLabel>Favorite Tutors</InputLabel>
                    <Select
                      native
  
                      label="Favorite Tutors"
                      inputProps={{
                        name: 'fave-tutors',
                        id: 'fave-tutors',
                      }}
                    >
                      <option aria-label="None" value="" />
                      <option value={10}>Tolo Pena</option>
                      <option value={20}>Charles Samoy</option>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item lg={4} md={4} xl={4} xs={0}></Grid>
              </Grid> */}
              

              

              <Grid container spacing={2} >
                
                <Grid
                  item
                  lg={4}
                  md={4}
                  xl={4}
                  xs={12}
                >
                  <Grid container spacing={2}>
                    {/* <Grid item >
                      <Typography variant="h5">
                          Who needs tutoring?
                      </Typography>
                    </Grid> */}

                    <Grid item xs={12}>  
                      <FormControl variant="outlined" className={classes.formControl} fullWidth>
                        <InputLabel>Tutee's Name</InputLabel>
                        <Select
                          fullWidth
                          native
      
                          label="Child's Name"
                          inputProps={{
                            name: 'child-name',
                            id: 'child-name',
                          }}
                        >
                          <option aria-label="None" value="" />
                          <option value={10}>Nate Mercado</option>
                          <option value={20}>Kate Mercado</option>
                        
                        </Select>
                      </FormControl>
                    </Grid>

                    {/* <Grid item xs={12}>
                      <Typography variant="h5">
                        Tutee's Grade Level
                      </Typography>
                    </Grid> */}

                    <Grid item xs={12}>
                      <FormControl variant="outlined" className={classes.formControl} fullWidth>
                        <InputLabel>Grade Level</InputLabel>
                        <Select
                          native
      
                          label="Grade Level"
                          inputProps={{
                            name: 'grade-level',
                            id: 'grade-level',
                          }}
                        >
                          <option aria-label="None" value="" />
                          <option value={10}>Kinder</option>
                          <option value={10}>Prep</option>
                          <option value={10}>Grade 1</option>
                          <option value={20}>Grade 2</option>
                          <option value={10}>Grade 3</option>
                          <option value={10}>Grade 4</option>
                          <option value={20}>Grade 5</option>
                          <option value={10}>Grade 6</option>
                          <option value={10}>Grade 7</option>
                          <option value={10}>1st Year Highschool</option>
                          <option value={10}>2nd Year Highschool</option>
                          <option value={10}>3rd Year Highschool</option>
                          <option value={10}>4th Year Highschool</option>
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
                      <FormControl variant="outlined" className={classes.formControl} fullWidth>
                        <InputLabel>Subject</InputLabel>
                        <Select
                          native
      
                          label="Subject"
                          inputProps={{
                            name: 'subject-matter',
                            id: 'subject-matter',
                          }}
                        >
                          <option aria-label="None" value="" />
                          <option value={10}>Math</option>
                          <option value={20}>Science</option>
                          <option value={10}>Filipino</option>
                          <option value={10}>English</option>
                          <option value={20}>Chinese</option>
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
                        options={topicselections.map((option) => option)}
                        defaultValue={[topicselections[1]]}
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
                      />
                    </Grid>
                    <Grid item xs={12}>
                    <Typography variant="h5">
                        Upload any relevant materials such handouts or slides
                    </Typography>
                      <Button className={classes}  
                        color="primary"
                        variant="outlined"
                        startIcon={<PublishIcon/>}>
                        Upload Files
                      </Button>
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
                      
                      <FormControl variant="outlined" className={classes.formControl} fullWidth>
                        <InputLabel>Length of Session</InputLabel>
                        <Select
                          native
      
                          label="Length of Session"
                          inputProps={{
                            name: 'session-length',
                            id: 'session-length',
                          }}
                        >
                          <option aria-label="None" value="" />
                          <option value={10}>1 hour</option>
                          <option value={20}>1 hour 30 minutes</option>
                          <option value={10}>2 hours</option>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                      <FormControl component="fieldset">
                        <FormLabel component="legend">Tutor Options</FormLabel>
                        <RadioGroup name="tutor-choice">
                          <FormControlLabel value="all-tutors" control={<Radio />} label="All Tutors Accepted" />
                          <FormControlLabel value="fave-tutors" control={<Radio />} label="Favorite Tutors Only" />
                          
                        </RadioGroup>
                      </FormControl>
                      {/* <FormControl variant="outlined" className={classes.formControl} fullWidth>
                        <InputLabel>Tutor Options</InputLabel>
                        <Select
                          native
      
                          label="Tutor Options"
                          inputProps={{
                            name: 'tutor-options',
                            id: 'tutor-options',
                          }}
                        >
                          <option aria-label="None" value="" />
                          <option value={10}>Favorite Tutors Only</option>
                          <option value={20}>All Tutors Accepted</option>
                        </Select>
                      </FormControl> */}
                    </Grid>
                    <Grid item xs={12}>
                      <FormControl variant="outlined" className={classes.formControl} fullWidth>
                        <InputLabel>Favorite Tutors</InputLabel>
                        <Select
                          native
      
                          label="Favorite Tutors"
                          inputProps={{
                            name: 'fave-tutors',
                            id: 'fave-tutors',
                          }}
                        >
                          <option aria-label="None" value="" />
                          <option value={10}>Tolo Pena</option>
                          <option value={20}>Charles Samoy</option>
                        </Select>
                      </FormControl>
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
