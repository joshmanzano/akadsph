import React, { useEffect } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import {
  Box,
  Card,
  CardContent,
  TextField,
  makeStyles,
  Typography,
  Grid,
  CardHeader,
  Divider,
} from "@material-ui/core";
import Calendar from "./Calendar";
import moment from "moment";

const useStyles = makeStyles((theme) => ({
  root: {},
  container: {
    display: "flex",
    flexWrap: "wrap",
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
  const [times, setTimes] = React.useState({});
  const [count, setCount] = React.useState(0);
  let [, setState] = React.useState();

  const checkDays = (evalTime, selectedTimes) => {
    selectedTimes.forEach((time) => {
      if (evalTime == time) {
        return true;
        console.log(true);
      }
    });
    return false;
    console.log(false);
  };

  const getDays = (selectedDays) => {
    console.log(times);
    data["days"] = selectedDays;
    setDays(selectedDays);
    setCount(count + 1);
    console.log(selectedDays);
    const selectedTimes = [];
    selectedDays.forEach((day) => {
      selectedTimes.push(day.getTime());
    });
    Object.keys(times).forEach((time) => {
      let evalTime = Number(time);
      if (!checkDays(evalTime, selectedTimes)) {
        delete times[evalTime];
      }
    });
    console.log(times);
    setTimes(times);
  };

  const changeFrom = (index, value) => {
    if (!(index in times)) {
      times[index] = {};
    }
    console.log(index);
    times[index]["from"] = value;
    const untilTime = new Date();
    const splitTime = value.split(":");
    let hours = Number(splitTime[0]);
    let minutes = splitTime[1];
    untilTime.setHours(hours + data["lengths"]["value"]);
    hours = untilTime.getHours();
    if (hours < 10) {
      hours = "0" + String(hours);
    }
    console.log(hours);
    console.log(minutes);
    times[index]["until"] = hours + ":" + minutes;
    // setUntil(times[index]['until'])
    data["times"] = times;
    console.log(times);
    setTimes(times);
    setData(data);
    setState({});
  };

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Box /*mt={3}*/>
        <Card style={{ justifyContent: "center", placeItems: "center" }}>
          <CardHeader
            subheader="You can only book sessions 2 days from now until a month (favorite tutors are exempted from the 2 day rule)"
            title="Choose all available dates for the session"
          />
          <Divider />
          <CardContent>
            <Box /*maxWidth={1000}*/>
              <Grid container spacing={2}>
                <Grid
                  item
                  lg={5}
                  md={5}
                  xl={5}
                  xs={12}
                  style={{
                    justifyContent: "center",
                    placeItems: "center",
                    textAlign: "center",
                  }}
                  alignItems="center"
                  justify="center"
                >
                  <Calendar data={data} getDays={getDays} />
                </Grid>

                <Grid
                  item
                  alignItems="center"
                  lg={6}
                  md={6}
                  xl={6}
                  xs={12}
                  style={{ border: "1px solid #EBEBEB", borderRadius: "30px" }}
                >
                  <Typography variant="h6" align="center" my={2}>
                    Choose date/s and time/s for your session/s
                  </Typography>
                  <Typography variant="h6" align="center" my={2}>
                    Please Note: clicking on multiple dates means booking
                    multiple sessions
                  </Typography>
                  <br />
                  {/* <MuiPickersUtilsProvider utils={DateFnsUtils}> */}

                  {days != undefined && (
                    <Grid alignItems="center" container spacing={2}>
                      {days.map((day) => (
                        <Grid item lg={12} md={12} xl={12} xs={12}>
                          <Grid container spacing={2}>
                            <Grid item lg={4} md={4} xl={4} sm={4} xs={12}>
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
                                  onClick={(e) => e.stopPropagation()}
                                  // defaultValue="2017-05-24"
                                  //day.toLocaleDateString()
                                  value={moment(day).format("YYYY-MM-DD")}
                                  className={classes.textField}
                                  InputLabelProps={{
                                    shrink: true,
                                    readOnly: true,
                                  }}
                                />
                              </form>
                            </Grid>
                            <Grid item lg={4} md={4} xl={4} sm={4} xs={12}>
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
                                  value={
                                    times[day.getTime()] != undefined
                                      ? times[day.getTime()]["from"]
                                      : null
                                  }
                                  onChange={(event) =>
                                    changeFrom(
                                      day.getTime(),
                                      event.target.value
                                    )
                                  }
                                />
                              </form>
                              {/* <Typography variant="h5" >
                            From: <input type="time"></input>
                          </Typography> */}
                            </Grid>
                            <Grid item lg={4} md={4} xl={4} sm={4} xs={12}>
                              <form className={classes.container} noValidate>
                                <TextField
                                  id="time"
                                  label="Until"
                                  type="time"
                                  // defaultValue="07:30"
                                  className={classes.textField}
                                  value={
                                    times[day.getTime()] != undefined
                                      ? times[day.getTime()]["until"]
                                      : null
                                  }
                                  // value={until}
                                  InputLabelProps={{
                                    shrink: true,
                                  }}
                                  inputProps={{
                                    readOnly: true,
                                  }}
                                  // onChange={(event) => changeUntil(day.getTime(), event.target.value)}
                                />
                              </form>
                            </Grid>
                          </Grid>
                        </Grid>
                      ))}
                    </Grid>
                  )}
                  {/* </MuiPickersUtilsProvider> */}
                </Grid>
                <Grid item lg={1} md={1} xl={1} xs={12}></Grid>
              </Grid>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

Availability.propTypes = {
  className: PropTypes.string,
};

export default Availability;
