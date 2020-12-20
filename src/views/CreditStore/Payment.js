import React, {useState} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Button,
  Card,
  CardContent,
  makeStyles,
  CardHeader,
  Divider,
  Tabs,
  Tab,
} from '@material-ui/core';
import CreditCardForm from './CreditCardForm';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import UnderConstruction from './UnderConstruction';

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
  const [value, setValue] = useState(0);

  function handleChange(event, value){
    setValue(value)
  }

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
            <Tabs
              value={value}
              indicatorColor="primary"
              textColor="primary"
              onChange={handleChange}
              variant={'fullWidth'}
              aria-label="disabled tabs example"
            >
              <Tab icon={<CreditCardIcon/>}>
              </Tab>
              <Tab icon={<PhoneAndroidIcon/>}/>
              <Tab icon={<AccountBalanceIcon/>}/>
            </Tabs>
            <Box mt={4}>
              {value == 0 &&
                <CreditCardForm setCardState={setCardState}></CreditCardForm>
              }
              {value == 1 &&
                <UnderConstruction payMethod={'GCash'}/>
              }
              {value == 2 &&
                <UnderConstruction payMethod={'Brankas'}/>
              }
            </Box>
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
