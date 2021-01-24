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
                Transaction Successful!
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
              <img width='100' src='../static/images/oli-smirk.png'/>
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
                You can now book tutors with your hour credits. 
              </Typography>
              <Typography variant="h6" align='center'>
                Transaction history can be found in the overview. Please make sure to use your credits within its 6 months validity.
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
              <Button size="large" variant="contained" color="primary" href='/findtutor'>
                Book tutors
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
              <Button size="large" variant="contained" color="primary" href='/store'>
                Buy more credits
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
              <Button size="large" variant="contained" color="primary" href='/'>
                Go to overview
              </Button>
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
