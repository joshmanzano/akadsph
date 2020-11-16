import React from 'react';
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
  Select,
  FormControl,
  InputLabel,
} from '@material-ui/core';
import { Search as SearchIcon } from 'react-feather';
import CreditCardForm from './CreditCardForm';

const useStyles = makeStyles((theme) => ({
  root: {},
  importButton: {
    // marginRight: theme.spacing(1)
  },
  exportButton: {
    // marginRight: theme.spacing(1)
  },
  bundleButton: {
    minWidth: "30vh",
    paddingTop: "7%",
    paddingBottom: "7%",
  },
}));

const Payment = ({ className, setCardState, ...rest }) => {
  const classes = useStyles();

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      {/* <Typography variant="h4" align='center'>
            Choose a Bundle
      </Typography> */}
      <Box /*mt={3}*/ style={{boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",}}>
        <Card style={{justifyContent: 'center', placeItems: 'center'}}>
          <CardHeader
            // subheader="Choose your preferred payment method"
            title="Payment Details"
          />
          <Divider />
          <CardContent style={{justifyContent: 'center', placeItems: 'center'}}>
            <Box style={{justifyContent: 'center', placeItems: 'center'}} /*maxWidth={1000}*/>
              <CreditCardForm setCardState={setCardState}></CreditCardForm>
              {/* <Grid container spacing={2} style={{justifyContent: 'center', placeItems: 'center'}}>
                <Grid
                  item
                  lg={3}
                  md={3}
                  xl={3}
                  xs={12}
                >
                  <Button className={classes.bundleButton}  
                  color="primary"
                  variant="contained">
                  Credit Card
                  </Button>
                </Grid>
                <Grid
                  item
                  lg={3}
                  md={3}
                  xl={3}
                  xs={12}
                >
                  <Button className={classes.bundleButton}  
                  color="primary"
                  variant="contained">
                  Bank Transfer
                  </Button>
                </Grid>
                <Grid
                  item
                  lg={3}
                  md={3}
                  xl={3}
                  xs={12}
                >
                  <Button className={classes.bundleButton}  
                  color="primary"
                  variant="contained">
                  Gcash
                  </Button>
                </Grid>
                <Grid
                  item
                  lg={3}
                  md={3}
                  xl={3}
                  xs={12}
                >
                  <Button className={classes.bundleButton}  
                  color="primary"
                  variant="contained">
                  GrabPay
                  </Button>
                </Grid>
              </Grid> */}
            </Box>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

Payment.propTypes = {
  className: PropTypes.string,
};

export default Payment;
