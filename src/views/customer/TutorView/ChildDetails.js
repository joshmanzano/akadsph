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
} from '@material-ui/core';
import { Search as SearchIcon } from 'react-feather';

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

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Typography variant="h4" align='center'>
            Tutoring Details
      </Typography>
      <Box /*mt={3}*/>
        <Card>
          <CardContent >
            <Box /*maxWidth={1000}*/>
              <Grid container spacing={2} >
                <Grid
                  item
                  lg={6}
                  md={6}
                  xl={6}
                  xs={12}
                >
                  <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel>Child's Name</InputLabel>
                    <Select
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
                <Grid
                  item
                  lg={6}
                  md={6}
                  xl={6}
                  xs={12}
                >
                  <FormControl variant="outlined" className={classes.formControl}>
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
                <Grid
                  item
                  lg={6}
                  md={6}
                  xl={6}
                  xs={12}
                >
                 <FormControl variant="outlined" className={classes.formControl}>
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
                <Grid
                  item
                  lg={6}
                  md={6}
                  xl={6}
                  xs={12}
                >
                  <FormControl variant="outlined" className={classes.formControl}>
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
                <Grid
                  item
                  lg={6}
                  md={6}
                  xl={6}
                  xs={12}
                >
                  
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
