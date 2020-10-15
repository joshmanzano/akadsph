import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  useTheme,
  makeStyles,
  colors,
  Grid,
  Tooltip,
  Button,
  Box,
  Container,
} from '@material-ui/core';

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
      <CardHeader
        title="Zoom"
      />
      <Divider />
      <CardContent>
        <Button variant='contained' color='primary'>
            Create Zoom Meeting
        </Button>
      </CardContent>
    </Card>
  );
};

Sales.propTypes = {
  className: PropTypes.string
};

export default Sales;
