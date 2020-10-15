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
  Snackbar
} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

const useStyles = makeStyles(() => ({
  root: {}
}));

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function pay(amount, card, exp_month, exp_year, cvc){
    var axios = require('axios');
    var data = JSON.stringify({"data":{"attributes":{"amount":parseInt(amount)*100,"payment_method_allowed":["card"],"payment_method_options":{"card":{"request_three_d_secure":"any"}},"currency":"PHP"}}});
    
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
        const payment_intent = response.data.data.id
        // console.log(payment_intent)

        var data = JSON.stringify({"data":{"attributes":{"details":{"card_number":String(card),"exp_month":parseInt(exp_month),"exp_year":parseInt(exp_year),"cvc":String(cvc)},"type":"card"}}});

        var config = {
          method: 'post',
          url: 'https://api.paymongo.com/v1/payment_methods',
          headers: { 
            'Content-Type': 'application/json', 
            'Authorization': 'Basic c2tfdGVzdF9WRVFQbzVTeXVvWEFNaks2QTM2Skg2QUU6'
          },
          data : data
        };
        
        axios(config)
        .then(function (response) {
            const payment_method = response.data.data.id
            var data = JSON.stringify({"data":{"attributes":{"payment_method":payment_method}}});

            var config = {
              method: 'post',
              url: 'https://api.paymongo.com/v1/payment_intents/'+payment_intent+'/attach',
              headers: { 
                'Content-Type': 'application/json', 
                'Authorization': 'Basic c2tfdGVzdF9WRVFQbzVTeXVvWEFNaks2QTM2Skg2QUU6'
              },
              data : data
            };
            
            axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                return true;
            })
            .catch(function (error) {
              console.log(error);
            });

        //   console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
          console.log(error.response);
        });
        
    })
    .catch(function (error) {
      console.log(error);
    });

}

const Sales = ({ className, ...rest }) => {
  const classes = useStyles();
  const theme = useTheme();

  const [open, setOpen] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [amount, setAmount] = React.useState(0);
  const [card, setCard] = React.useState(0);
  const [exp_month, setExpMonth] = React.useState(0);
  const [exp_year, setExpYear] = React.useState(0);
  const [cvc, setCVC] = React.useState(0);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const changeAmount = (e) => {
      setAmount(e.target.value)
      console.log(amount)
  };
  const changeCard = (e) => {
      setCard(e.target.value)
      console.log(card)
  };
  const changeExpMonth = (e) => {
      setExpMonth(e.target.value)
      console.log(exp_month)
  };
  const changeExpYear = (e) => {
      setExpYear(e.target.value)
      console.log(exp_year)
  };
  const changeCVC = (e) => {
      setCVC(e.target.value)
      console.log(cvc)
  };

  const handleClose = () => {
    setOpen(false);
    if(pay(amount, card, exp_month, exp_year, cvc)){
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
        title="PayMongo"
      />
      <Divider />
      <CardContent>
        <Button onClick={handleClickOpen} variant='contained' color='primary'>
            Pay Tutor
        </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Pay Tutor</DialogTitle>
            <DialogContent>
            <TextField
                onChange={changeAmount}
                margin="dense"
                id="amount"
                label="Amount"
                startAdornment={<InputAdornment position="start">Php</InputAdornment>}
            />
            <TextField
                onChange={changeCard}
                margin="dense"
                id="card"
                label="Card Number"
            />
            <TextField
                onChange={changeExpMonth}
                margin="dense"
                id="exp_month"
                label="Expiry Month"
            />
            <TextField
                onChange={changeExpYear}
                margin="dense"
                id="exp_year"
                label="Expiry Year"
            />
            <TextField
                onChange={changeCVC}
                margin="dense"
                id="cvc"
                label="CVC"
            />
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose} color="primary">
                Cancel
            </Button>
            <Button onClick={handleClose} color="primary">
                Pay
            </Button>
            </DialogActions>
        </Dialog>
        <Snackbar open={success} autoHideDuration={6000} onClose={closeSuccess}>
            <Alert onClose={closeSuccess} severity="success">
                Payment successful!
            </Alert>
        </Snackbar>
      </CardContent>
    </Card>
  );
};

Sales.propTypes = {
  className: PropTypes.string
};

export default Sales;
