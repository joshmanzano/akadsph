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
  payButton: {
    width: "60%",
    marginLeft: "20%",
    marginRight: "20%",
    marginTop: "5%",
    marginBottom: "5%",
    // paddingTop: "7%",
    // paddingBottom: "7%",
  },
}));

const Breakdown = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      {/* <Typography variant="h4" align='center'>
            Choose a Bundle
      </Typography> */}
      <Grid container spacing={2}>
        {/* <Grid
          item
          lg={3}
          md={3}
          xl={3}
          xs={0}
          ></Grid> */}
          <Grid
          item
          lg={12}
          md={12}
          xl={12}
          xs={12}
          >
            <Box mx="auto" /*mt={3}*/ style={{boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",}}>
              <Card style={{justifyContent: 'center', placeItems: 'center'}}>
                <CardHeader
                  // subheader="Bundles that are for more than 1 hour are consummable for anytime"
                  title="Transaction Summary"
                />
                <Divider />
                <CardContent style={{justifyContent: 'center', placeItems: 'center'}}>
                  <Box style={{justifyContent: 'center', placeItems: 'center'}} /*maxWidth={1000}*/>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Typography variant="h6">
                        Type
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h6" align="right">
                        10 hours for P4,750 bundle
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h6">
                        Quantity
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h6" align="right">
                        1
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h6">
                        Promo Code Discount
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h6" align="right">
                        -P750.00
                      </Typography>
                    </Grid>
                  </Grid>
                  </Box>
                </CardContent>
                <Divider />
                <CardContent style={{justifyContent: 'center', placeItems: 'center'}}>
                  <Box style={{justifyContent: 'center', placeItems: 'center'}} /*maxWidth={1000}*/>
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <Typography variant="h5">
                          Total
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="h5" align="right">
                          P4,000.00
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>
                </CardContent>
                
              </Card>
            </Box>
          </Grid> 

          {/* <Grid
          item
          lg={3}
          md={3}
          xl={3}
          xs={0}
          ></Grid> */}
      </Grid>
    </div>
  );
};

Breakdown.propTypes = {
  className: PropTypes.string
};

export default Breakdown;
