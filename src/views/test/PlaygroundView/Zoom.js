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

const createZoomMeeting = () => {
  var axios = require('axios');
  var data = {
    'tutee':'Test Tutee',
    'subject':'TEST',
  };
  
  var config = {
    method: 'post',
    url: 'http://localhost:8000/zoom/',
    headers: { 
      'Content-Type': 'application/json', 
    },
    data : data
  };
  
  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });

}

const Sales = ({ className, ...rest }) => {
  const classes = useStyles();
  const theme = useTheme()

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
        <Button onClick={createZoomMeeting} variant='contained' color='primary'>
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
