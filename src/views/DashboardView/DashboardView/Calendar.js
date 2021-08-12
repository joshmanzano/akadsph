import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import {
  Card,
  CardContent,
  useTheme,
  makeStyles,
  Grid,
} from "@material-ui/core";
import Calendar from "react-calendar";

const useStyles = makeStyles(() => ({
  root: {},
}));

const Sales = ({ className, selectedDate, upcoming, changeDate, ...rest }) => {
  const classes = useStyles();
  const theme = useTheme();
  const selectedSessions = {};
  upcoming.forEach((u) => {
    const start_date = new Date(u.start_time);
    if (!(start_date.getMonth() in selectedSessions)) {
      selectedSessions[start_date.getMonth()] = [];
    }
    selectedSessions[start_date.getMonth()].push(start_date.getDate());
  });

  const isIncluded = (date) => {
    let included = false;
    if (date.getMonth() in selectedSessions) {
      if (selectedSessions[date.getMonth()].includes(date.getDate()))
        included = true;
    }
    return included;
  };

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      {/* <CardHeader
        title="Calendar"
      /> */}
      {/* <Divider /> */}
      <CardContent>
        <Grid alignItems="center" direction="column" container>
          <Grid item xs={12}>
            <Calendar
              onChange={changeDate}
              value={selectedDate}
              tileClassName={({ date }) =>
                isIncluded(date) ? "session_date" : null
              }
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

Sales.propTypes = {
  className: PropTypes.string,
};

export default Sales;
