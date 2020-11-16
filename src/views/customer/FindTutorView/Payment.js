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

const Payment = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      {/* <Typography variant="h4" align='center'>
            Choose a Bundle
      </Typography> */}
      <Box /*mt={3}*/>
        <Card style={{justifyContent: 'center', placeItems: 'center'}}>
          <CardHeader
            subheader="Choose your preferred payment method"
            title="Payment Methods"
          />
          <Divider />
          <CardContent style={{justifyContent: 'center', placeItems: 'center'}}>
            <Box style={{justifyContent: 'center', placeItems: 'center'}} /*maxWidth={1000}*/>
              <Grid container spacing={2} style={{justifyContent: 'center', placeItems: 'center'}}>
                <Grid
                  item
                  lg={4}
                  md={4}
                  xl={4}
                  xs={12}
                >
                </Grid>
                <Grid
                  item
                  lg={4}
                  md={4}
                  xl={4}
                  xs={12}
                >
                  <FormControl variant="outlined" className={classes.formControl} style={{justifyContent: 'center', placeItems: 'center'}}>
                    <InputLabel>Pay Through</InputLabel>
                    <Select
                      fullWidth
                      native
  
                      label="Pay Through"
                      inputProps={{
                        name: 'payment-method',
                        id: 'payment-method',
                      }}
                    >
                      <option aria-label="None" value="" />
                      <option value={10}>Credit Cards  </option>
                      <option value={20}>Bank Transfers    </option>
                      <option value={20}>Gcash </option>
                      <option value={20}>Grab Pay  </option>
                    
                    </Select>
                  </FormControl>
                  </Grid>
                  <Grid
                    item
                    lg={4}
                    md={4}
                    xl={4}
                    xs={12}
                  >
                  </Grid>
                  <Grid
                    item
                    lg={12}
                    md={12}
                    xl={12}
                    xs={12}
                  >
                    <Divider />
                  </Grid>
                  <Grid
                    item
                    lg={4}
                    md={4}
                    xl={4}
                    xs={12}
                  >
                    <TextField
                    
                      label="Credit Card Number"
                      name="card_number"
                      variant="outlined"
                      // helperText="(e.g. Algebra, Trigonometry, Vocalubary)"
                      />
                  </Grid>
                  <Grid
                    item
                    lg={4}
                    md={4}
                    xl={4}
                    xs={12}
                  >
                    <TextField
                    
                      label="Expiry Date"
                      placeholder="MM/YYYY"
                      name="exp_date"
                      variant="outlined"
                      // helperText="MM/YYYY"
                      />
                  </Grid>
                  <Grid
                    item
                    lg={4}
                    md={4}
                    xl={4}
                    xs={12}
                  >
                    <TextField
                    
                      label="CVV Number"
                      name="ccvNo"
                      variant="outlined"
                  
                      />
                  </Grid>
                
              </Grid>
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
  className: PropTypes.string
};

export default Payment;
