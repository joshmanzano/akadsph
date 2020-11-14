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
  CardHeader,
  Divider,
} from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { Search as SearchIcon } from 'react-feather';
import Calendar from './Calendar';
import TimeRangePicker from '@wojtekmaj/react-timerange-picker';

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

const Availability = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      {/* <Typography variant="h4" align='center'>
            Choose a Bundle
      </Typography> */}
      <Box /*mt={3}*/>
        <Card style={{justifyContent: 'center', placeItems: 'center'}}>
          <CardHeader
            subheader="You can only book sessions for 2 weeks from now"
            title="Choose all available dates for the session"
          />
          <Divider />
          <CardContent >
            <Box /*maxWidth={1000}*/>
              <Grid container spacing={2}
                
                >
                <Grid
                  item
                  lg={6}
                  md={6}
                  xl={6}
                  xs={12}
                  style={{justifyContent: 'center', placeItems: 'center'}}
                  alignItems="center"
                  justify="center"
                >
                  <Calendar/>
                </Grid>
                <Grid
                  item
                  lg={6}
                  md={6}
                  xl={6}
                  xs={12}
                > 
              
                  <Typography variant="h5" align= 'left'>
                    Write all the available times for the dates
                  </Typography>

                  {/* <MuiPickersUtilsProvider utils={DateFnsUtils}> */}
                  <Grid container spacing={2}>
                    <Grid
                    item
                    lg={6}
                    md={6}
                    xl={6}
                    xs={6}
                    > 
                      <Typography variant="h5" align= 'left'>
                        November 20, 2020
                      </Typography>
                    </Grid>
                    <Grid
                    item
                    lg={6}
                    md={6}
                    xl={6}
                    xs={6}
                    > 
                    
                        {/* <KeyboardTimePicker/> */}
                    </Grid>
                    <Grid
                    item
                    lg={6}
                    md={6}
                    xl={6}
                    xs={6}
                    > 
                      <Typography variant="h5" align= 'left'>
                        November 25, 2020
                      </Typography>
                    </Grid>
                    <Grid
                    item
                    lg={6}
                    md={6}
                    xl={6}
                    xs={6}
                    > 
                      {/* <KeyboardTimePicker/> */}
                    </Grid>
                  </Grid>
                  {/* </MuiPickersUtilsProvider> */}
                  
                </Grid>
                
              </Grid>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

Availability.propTypes = {
  className: PropTypes.string
};

export default Availability;
