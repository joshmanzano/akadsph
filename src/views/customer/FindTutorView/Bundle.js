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

const Bundle = ({ className, ...rest }) => {
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
            subheader="Bundles that are for more than 1 hour are consummable for anytime"
            title="Choose a Bundle"
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
                  <Button className={classes.bundleButton}  
                  color="primary"
                  variant="contained">
                  P550/hour
                  </Button>
                </Grid>
                <Grid
                  item
                  lg={4}
                  md={4}
                  xl={4}
                  xs={12}
                >
                  <Button className={classes.bundleButton}  
                  color="primary"
                  variant="contained">
                  P500/hour for 10 hours
                  </Button>
                </Grid>
                <Grid
                  item
                  lg={4}
                  md={4}
                  xl={4}
                  xs={12}
                >
                  <Button className={classes.bundleButton}  
                  color="primary"
                  variant="contained">
                  P450/hour for 20 hours
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

Bundle.propTypes = {
  className: PropTypes.string
};

export default Bundle;
