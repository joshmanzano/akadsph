import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Card,
  CardContent,
  useTheme,
  makeStyles,
  Grid,
} from '@material-ui/core';
import Calendar from 'react-calendar'

const useStyles = makeStyles(() => ({
  root: {}
}));

const Sales = ({ className, selectedDate, changeDate, ...rest }) => {
  const classes = useStyles();
  // const theme = useTheme();

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardContent>
        <Grid alignItems="center" direction="column" container>
          <Grid item xs={12}>
            <Calendar
            onChange={changeDate}
            value={selectedDate}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

Sales.propTypes = {
  className: PropTypes.string
};

export default Sales;
