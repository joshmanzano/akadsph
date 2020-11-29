import React from 'react';
import {
  Container,
  Grid,
  Box,
  makeStyles,
  Typography,
} from '@material-ui/core';
import Page from 'src/components/Page';
import Budget from './Budget';
import LatestOrders from './LatestOrders';
import LatestProducts from './LatestProducts';
import Upcoming from './Upcoming';
import Pending from './Pending';
import History from './History';
import Transaction from './Transaction';
import Metrics from './Metrics';


import Calendar from './Calendar'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const Dashboard = (props) => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Overview"
    >
      <Container maxWidth={false}>
      <Box mb={2}>

      <Grid container spacing={3}>
        <Grid
          item
          lg={1}
          md={1}
          xl={1}
          xs={12}
        >
        <img width='100' src='../static/images/oli-happy.png'>
        </img>
        </Grid>
        <Grid
          item
          lg={11}
          md={11}
          xl={11}
          xs={12}
        >
        <Box ml={2}>
          <Typography id='selector1' variant="h1">
            Welcome {props.first_name}! 
          </Typography>
            {props.requests == 0 &&
            <Typography id='selector1' variant="h2">
              There are no new requests.
            </Typography>
            }
            {props.requests == 1 &&
            <Typography id='selector1' variant="h2">
              There is {props.requests} new request.
            </Typography>
            }
            {props.requests > 1 &&
            <Typography id='selector1' variant="h2">
              There are {props.requests} new requests.
            </Typography>
            }
        </Box>
        </Grid>
      </Grid>

      </Box>
        <Grid
          container
          alignItems="center"
          spacing={2}
        >
          <Grid
            item
            lg={4}
            md={4}
            xl={4}
            xs={12}
          >
            <Calendar id='selector2' />
          </Grid>
          <Grid
            item
            lg={8}
            md={8}
            xl={8}
            xs={12}
            id='selector3'
          >
            <Upcoming rows={props.upcoming} />
          </Grid>
          <Grid
            item
            lg={12}
            md={12}
            xl={12}
            xs={12}
          >
            <History rows={props.history}/>
          </Grid>
          {/* <Grid
            item
            lg={12}
            md={12}
            xl={12}
            xs={12}
          >
            <Metrics/>
          </Grid> */}
        </Grid>
      </Container>
    </Page>
  );
};

export default Dashboard;
