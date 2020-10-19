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
  const code = localStorage.getItem('zoom_token')
  var axios = require('axios');
  var data = JSON.stringify({"data":{}});
  
  var config = {
    method: 'post',
    url: 'https://zoom.us/oauth/token?grant_type=authorization_code&code='+code+'&redirect_uri=http://localhost:3000/auth',
    headers: { 
      'Content-Type': 'application/json', 
      'Authorization': 'Basic ZnZVUUNVNEVUajJkTHV6MzNyV3hROnlBWWFnbXNLa1hIU3kxS1hWcDFralNlSEdETUhtTzRYOg=='
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
        <Button href='https://zoom.us/oauth/authorize?response_type=code&client_id=fvUQCU4ETj2dLuz33rWxQ&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth' variant='contained' color='primary'>
            Authenticate
        </Button>
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
