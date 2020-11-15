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
  bundleButton: {
    minWidth: "30vh",
    paddingTop: "7%",
    paddingBottom: "7%",
  },
}));

const PromoCode = ({ className, ...rest }) => {
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
            // subheader="Bundles that are for more than 1 hour are consummable for anytime"
            title="Promo Code"
          />
          <Divider />
          <CardContent style={{justifyContent: 'center', placeItems: 'center'}}>
            <Grid container>
              <Grid
                item
                lg={4}
                md={4}
                xl={4}
                xs={0}
              >
              </Grid>
              <Grid
                item
                lg={4}
                md={4}
                xl={4}
                xs={12}
              >
                <TextField 
                id="special-request" 
                label="Promo Code" 
                variant="outlined" fullWidth
                defaultValue="AKADS2020"
                />
              </Grid>
              <Grid
                item
                lg={4}
                md={4}
                xl={4}
                xs={0}
              >
              </Grid>
            </Grid>
            
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

PromoCode.propTypes = {
  className: PropTypes.string
};

export default PromoCode;
