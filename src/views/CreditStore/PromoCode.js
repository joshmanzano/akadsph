import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Card,
  CardContent,
  TextField,
  makeStyles,
  Grid,
  CardHeader,
  Divider,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {},
  
}));

const PromoCode = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Box /*mt={3}*/>
        <Card style={{justifyContent: 'center', placeItems: 'center'}}>
          <CardHeader
            // subheader="Bundles that are for more than 1 hour are consummable for anytime"
            title="Promo Code"
          />
          <Divider />
          <CardContent style={{justifyContent: 'center', placeItems: 'center'}}>
            <Grid container>
                <TextField 
                id="special-request" 
                label="Promo Code" 
                variant="outlined" fullWidth
                defaultValue="AKADS2020"
                />
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
