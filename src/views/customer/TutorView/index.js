import React, { useState } from 'react';
import {
  Box,
  Container,
  makeStyles,
  Typography,
  Grid,
  Button
} from '@material-ui/core';
import Page from 'src/components/Page';
import Results from './Results';
import Toolbar from './Toolbar';
import data from './data';
import Bundle from './Bundle';
import ChildDetails from './ChildDetails';
import Availability from './Availability';
import SpecialRequests from './SpecialRequests';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  nextButton: {
    placeItems: "center",
    justifyContent: "center",
    // marginRight: theme.spacing(1)
  },
}));

const CustomerListView = () => {
  const classes = useStyles();
  const [customers] = useState(data);

  return (
    <Page
      className={classes.root}
      title="Find A Tutor - AKADSPH" 
    >
      <Container maxWidth={false}>
        {/* <Toolbar /> */}
        <Box mb={4}>
          <Typography variant="h1" align='center'>
            Find A Tutor
          </Typography>
        </Box>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={12}
            md={12}
            xl={12}
            xs={12}
          >
            <Bundle/>
          </Grid>
          <Grid
            item
            lg={12}
            md={12}
            xl={12}
            xs={12}
          >
            <ChildDetails/>
          </Grid>
          <Grid
            item
            lg={12}
            md={12}
            xl={12}
            xs={12}
          >
            <Availability/>
          </Grid>
          <Grid
            item
            lg={12}
            md={12}
            xl={12}
            xs={12}
          >
            <SpecialRequests/>
          </Grid>
          <Grid
            item
            lg={12}
            md={12}
            xl={12}
            xs={12}
          >
             <Button className={classes.nextButton}  
                  color="primary"
                  variant="contained">
                  Next
                </Button>
          </Grid>
        </Grid>
        {/* <Box mt={3}>
          <Results customers={customers} />
        </Box> */}
      </Container>
    </Page>
  );
};

export default CustomerListView;
