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
      <Box /*mt={3}*/>
        <Card style={{justifyContent: 'center', placeItems: 'center'}}>
          <CardHeader
            // subheader="Bundles that are for more than 1 hour are consummable for anytime"
            title="Breakdown Balance"
          />
          <Divider />
          <CardContent style={{justifyContent: 'center', placeItems: 'center'}}>
            <Box style={{justifyContent: 'center', placeItems: 'center'}} /*maxWidth={1000}*/>
              <Typography variant="h3">
                  Amount Due: P500
              </Typography>
              <Typography variant="h5" >
                  Session/s: 1
              </Typography>
              <Typography variant="h5">
                  Duration: 1 hour
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

Breakdown.propTypes = {
  className: PropTypes.string
};

export default Breakdown;
