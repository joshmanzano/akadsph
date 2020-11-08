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
import TasksProgress from './TasksProgress';
import TotalCustomers from './TotalCustomers';
import TotalProfit from './TotalProfit';
import TrafficByDevice from './TrafficByDevice';


import Calendar from './Calendar'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Dashboard"
    >
      <Container maxWidth={false}>
        <Box mb={4}>
          <Typography variant="h1">
            Welcome {localStorage.getItem('givenName')}!
          </Typography>
        </Box>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={4}
            md={4}
            xl={4}
            xs={12}
          >
            <Calendar />
          </Grid>
          <Grid
            item
            lg={8}
            md={8}
            xl={8}
            xs={12}
          >
            <Upcoming />
          </Grid>
          <Grid
            item
            lg={12}
            md={12}
            xl={12}
            xs={12}
          >
            <Pending />
          </Grid>
          <Grid
            item
            lg={12}
            md={12}
            xl={12}
            xs={12}
          >
            <History />
          </Grid>
          <Grid
            item
            lg={12}
            md={12}
            xl={12}
            xs={12}
          >
            <Transaction />
          </Grid>
          {/* <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <LatestProducts />
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <LatestOrders />
          </Grid> */}
        </Grid>
      </Container>
    </Page>
  );
};

export default Dashboard;
