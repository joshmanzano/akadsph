import React , {useEffect} from 'react';
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
import Moment from 'moment';

const useStyles = makeStyles((theme) => ({
  root: {},
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

const Availability = ({ className, data, setData, ...rest }) => {
  const classes = useStyles();
  const [days, setDays] = React.useState();
  const [count, setCount] = React.useState(0);

  useEffect(() => {
    console.log(count)

  }, [count])

  const getDays=(selectedDays)=>{
    data['days'] = selectedDays;
    setData(data);
    setDays(selectedDays);
    setCount(count + 1);
  }

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
                  style={{justifyContent: 'center', placeItems: 'center', textAlign:'center'}}
                  alignItems="center"
                  justify="center"

                >
                  <Calendar getDays={getDays}/>
                </Grid>
                
                <Grid
                  item
                  lg={6}
                  md={6}
                  xl={6}
                  xs={12}
                > 
              
                  <Typography variant="h6" align= 'left' mb={2}>
                    Write all the available times for the dates
                  </Typography>
                  <br/>
                  {/* <MuiPickersUtilsProvider utils={DateFnsUtils}> */}
                  
                  {days != undefined &&
                  <Grid container spacing={2}>
                    {days.map(day=>(
                    <Grid
                    item
                    lg={12}
                    md={12}
                    xl={12}
                    xs={12}
                    > 
                      <Grid container spacing={2}>
                        <Grid 
                          item 
                          lg={4}
                          md={4}
                          xl={4}
                          xs={12}>
                            {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker
                                  disableToolbar
                                  variant="inline"
                                  format="MM/dd/yyyy"
                                  margin="normal"
                                  id="date-picker-inline"
                                  label="Date"
                                  value="11/20/2020"
                                  // onChange={handleDateChange}
                                  KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                  }}
                                />
                            </MuiPickersUtilsProvider> */}
                          <form className={classes.container} noValidate>
                            <TextField
                              id="date"
                              label="Date"
                              type="date"
                              format="MM/dd/yyyy"
                              // defaultValue="2017-05-24"
                              //day.toLocaleDateString()
                              value={Moment(day).format('YYYY-MM-DD')}
                              className={classes.textField}
                              InputLabelProps={{
                                shrink: true,
                              }}
                
                            />
                          </form>
                        </Grid>
                        <Grid 
                          item 
                          lg={4}
                          md={4}
                          xl={4}
                          xs={12}>
                            <form className={classes.container} noValidate>
                              <TextField
                                id="time"
                                label="From"
                                type="time"
                                // defaultValue="07:30"
                                className={classes.textField}
                                InputLabelProps={{
                                  shrink: true,
                                }}
                                inputProps={{
                                  step: 300, // 5 min
                                }}
                              />
                            </form>
                          {/* <Typography variant="h5" >
                            From: <input type="time"></input>
                          </Typography> */}
                        </Grid>
                        <Grid 
                          item 
                          lg={4}
                          md={4}
                          xl={4}
                          xs={12}>
                          <form className={classes.container} noValidate>
                              <TextField
                                id="time"
                                label="Until"
                                type="time"
                                // defaultValue="07:30"
                                className={classes.textField}
                                InputLabelProps={{
                                  shrink: true,
                                }}
                                inputProps={{
                                  step: 300, // 5 min
                                }}
                              />
                            </form>
                        </Grid>
                      </Grid>
                      
                    </Grid>
                    ))}
                  </Grid>
                  }
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
