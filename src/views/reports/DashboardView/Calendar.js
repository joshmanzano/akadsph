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

const Sales = ({ className, ...rest }) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      {/* <CardHeader
        title="Calendar"
      /> */}
      {/* <Divider /> */}
      <CardContent>
        <Grid alignItems="center" direction="column" container>
          <Grid item xs={12}>
            <Calendar
            defaultValue={new Date()}
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
