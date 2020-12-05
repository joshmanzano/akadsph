import React, {useState} from 'react';
import {
  Container,
  Grid,
  Box,
  makeStyles,
  Typography,
} from '@material-ui/core';
import Page from 'src/components/Page';
import Upcoming from './Upcoming';
import Pending from './Pending';
import History from './History';
import Transaction from './Transaction';


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
  const [selectedDate, changeDate] = useState(new Date())

  const upcoming = []
  const pending = []
  const history = []
  const transaction = []

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
        <Box ml={2} mt={2}>
          <Grid container spacing={0}
          direction="column"
          >
            <Grid item>
            <Box flexGrow={1}/>
            </Grid>
            <Grid item>
              <Typography id='selector1' variant="h1">
                Welcome {props.first_name}! 
              </Typography>
            </Grid>
            <Grid item>
              {props.credits > 0 ?
              <Typography id='selector1' variant="h2">
                You have {props.credits} credit hours left.
              </Typography>
              :
              <Typography id='selector1' variant="h2">
                You have no credit hours.
              </Typography>
              }
            </Grid>
          </Grid>
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
            <Calendar changeDate={changeDate} selectedDate={selectedDate} id='selector2' />
          </Grid>
          <Grid
            item
            lg={8}
            md={8}
            xl={8}
            xs={12}
            id='selector3'
          >
            <Upcoming currentDate={selectedDate} rows={upcoming} />
          </Grid>
          <Grid
            item
            lg={12}
            md={12}
            xl={12}
            xs={12}
          >
            <Pending rows={pending} />
          </Grid>
          <Grid
            item
            lg={12}
            md={12}
            xl={12}
            xs={12}
          >
            <History rows={history}/>
          </Grid>
          <Grid
            item
            lg={12}
            md={12}
            xl={12}
            xs={12}
          >
            <Transaction rows={transaction}/>
          </Grid>
        
        </Grid>
      </Container>
    </Page>
  );
};

export default Dashboard;
