import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  makeStyles,
  Grid,
} from '@material-ui/core';
import Payment from './PaymentMethods';
import Breakdown from './Breakdown';

const useStyles = makeStyles((theme) => ({
  root: {},
  payButton: {
    width: "80%",
    marginLeft: "10%",
    marginRight: "10%",
    marginTop: "5%",
    marginBottom: "5%",
  },
}));

const PayPage = ({ className, setCardState, paynow, amount, item, discount, hours, ...rest }) => {
  const classes = useStyles();

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      
      <Box >
        <Grid container alignItems="center" spacing={2}>
          <Grid
            item
            lg={1}
            md={1}
            xl={1}
            xs={0}
          ></Grid>
          <Grid
            item
            lg={6}
            md={6}
            xl={6}
            xs={12}
          >
            <Payment setCardState={setCardState}/>
          </Grid>
          <Grid
            item
            lg={4}
            md={4}
            xl={4}
            xs={12}
          >
            <Breakdown amount={amount} item={item} discount={discount} hours={hours}/>
          </Grid>
          <Grid
            item
            lg={1}
            md={1}
            xl={1}
            xs={0}
          ></Grid>
        </Grid>
      </Box>
    </div>
  );
};

PayPage.propTypes = {
  className: PropTypes.string,
};

export default PayPage;
