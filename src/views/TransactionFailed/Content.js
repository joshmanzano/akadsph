import React , {useEffect} from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  makeStyles,
  Typography,
  Grid,
  Box,
} from '@material-ui/core';
import TableDetails from './TableDetails';
import ScriptTag from 'react-script-tag';

const useStyles = makeStyles((theme) => ({
  root: {},
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

const Availability = ({ className, data, setData, ...rest }) => {
  const classes = useStyles();
  

  return (
    <React.Fragment>
      <Box mt={3} mb={6} mx={3}>
        <Grid container spacing={3}>
            <Grid
              item
              lg={12}
              md={12}
              xl={12}
              xs={12}
              align='center'
            >
              <Typography variant="h2" align='center'>
                Transaction Failed! 
              </Typography>
            </Grid>
            <Grid
              item
              lg={12}
              md={12}
              xl={12}
              xs={12}
              align='center'
            >
              <img width='100' src='../static/images/oli-sad.png'/>
            </Grid>
            <Grid
              item
              lg={12}
              md={12}
              xl={12}
              xs={12}
              align='center'
            >
              <Typography variant="h6" align='center'>
                Kindly try again.
              </Typography>
              {/* <Typography variant="h6" align='center'>
              </Typography> */}
            </Grid>
            <Grid
              item
              lg={12}
              md={12}
              xl={12}
              xs={12}
              align='center'
            >
              {/* <TableDetails/> */}
            </Grid>
            {/* <Grid
              item
              lg={3}
              md={3}
              xl={3}
              xs={0}
              align='center'
            ></Grid> */}
            <Grid
              item
              lg={4}
              md={4}
              xl={4}
              xs={12}
              align='center'
            >
              {/* <Button size="large" variant="contained" color="primary" href='/findtutor'>
                Book tutors
              </Button> */}
            </Grid>
            <Grid
              item
              lg={4}
              md={4}
              xl={4}
              xs={12}
              align='center'
            >
              <Button size="large" variant="contained" color="primary" href='/store'>
                Try Again
              </Button>
            </Grid>
            <Grid
              item
              lg={4}
              md={4}
              xl={4}
              xs={12}
              align='center'
            >
              {/* <Button size="large" variant="contained" color="primary" href='/'>
                Go to overview
              </Button> */}
            </Grid>
            {/* <Grid
              item
              lg={3}
              md={3}
              xl={3}
              xs={0}
              align='center'
            ></Grid> */}
          
          </Grid>
      </Box>
    </React.Fragment>
  );
};

Availability.propTypes = {
  className: PropTypes.string
};

export default Availability;
