import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Container,
  Grid,
  Box,
  makeStyles,
  Typography,
  Button,
} from '@material-ui/core';
import Page from 'src/components/Page';

import PayMongo from './PayMongo'
import Brankas from './Brankas'
import Zoom from './Zoom'

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
            Hello world!
          </Typography>
        </Box>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={3}
            md={6}
            xl={3}
            xs={12}
          >
            <PayMongo/>
          </Grid>
          <Grid
            item
            lg={3}
            md={6}
            xl={3}
            xs={12}
          >
            <Brankas/>
          </Grid>
          <Grid
            item
            lg={3}
            md={6}
            xl={3}
            xs={12}
          >
            <Zoom/>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default Dashboard;
