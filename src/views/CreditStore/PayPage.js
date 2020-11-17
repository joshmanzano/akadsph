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
import Payment from './Payment';
import Breakdown from './Breakdown';

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
  payButton: {
    width: "80%",
    marginLeft: "10%",
    marginRight: "10%",
    marginTop: "5%",
    marginBottom: "5%",
    // paddingTop: "7%",
    // paddingBottom: "7%",
  },
}));

const PayPage = ({ className, ...rest }) => {
  const classes = useStyles();
  const [cardState, setCardState] = React.useState();

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      
      <Box >
        <Grid container spacing={2}>
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
            <Breakdown/>
          </Grid>
          <Grid
            item
            lg={1}
            md={1}
            xl={1}
            xs={0}
          ></Grid>
          {/* <Grid
            item
            lg={1}
            md={1}
            xl={1}
            xs={0}
          ></Grid>
          <Grid
            item
            lg={5}
            md={5}
            xl={5}
            xs={5}
          >
            <Button color="primary" variant="contained" className={classes.payButton}>
              Pay Now
            </Button>
          </Grid>
          <Grid
            item
            lg={1}
            md={1}
            xl={1}
            xs={0}
          ></Grid> */}
        </Grid>
      </Box>
    </div>
  );
};

PayPage.propTypes = {
  className: PropTypes.string,
};

export default PayPage;
