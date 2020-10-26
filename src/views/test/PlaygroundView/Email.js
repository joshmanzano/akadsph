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
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  InputAdornment,
  Snackbar,
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {}
}));

const sendEmail = () => {
  var axios = require('axios');
  var data = JSON.stringify({"data":{"attributes":{"amount":10000,"payment_method_allowed":["card"],"payment_method_options":{"card":{"request_three_d_secure":"any"}},"currency":"PHP"}}});
  
  var config = {
    method: 'post',
    url: 'https://api.paymongo.com/v1/payment_intents',
    headers: { 
      'Content-Type': 'application/json', 
      'Authorization': 'Basic c2tfdGVzdF9WRVFQbzVTeXVvWEFNaks2QTM2Skg2QUU6'
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

function send(recipient, message){
    console.log(recipient)
    console.log(message)
    return true
}

const Sales = ({ className, ...rest }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [recipient, setRecipient] = React.useState('');
  const [message, setMessage] = React.useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const changeRecipient = (e) => {
      setRecipient(e.target.value)
  };
  const changeMessage = (e) => {
      setMessage(e.target.value)
  };

  const handleClose = () => {
    setOpen(false);
    if(send(recipient, message)){
        console.log("Success!")
    }
    setSuccess(true);
  };

  const closeSuccess = () => {
      setSuccess(false);
  }

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader
        title="Email"
      />
      <Divider />
      <CardContent>
        <Button onClick={handleClickOpen} variant='contained' color='primary'>
          Send Email
        </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Send Email</DialogTitle>
            <DialogContent>
            <TextField
                onChange={changeRecipient}
                margin="dense"
                id="recipient"
                label="Recipient"
            />
            <TextField
                onChange={changeMessage}
                margin="dense"
                id="message"
                label="Message"
            />
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose} color="primary">
                Cancel
            </Button>
            <Button onClick={handleClose} color="primary">
                Send
            </Button>
            </DialogActions>
        </Dialog>
      </CardContent>
    </Card>
  );
};

Sales.propTypes = {
  className: PropTypes.string
};

export default Sales;
