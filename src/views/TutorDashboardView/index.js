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
import History from './History';
import TutorExtensionForm from 'src/components/TutorExtensionForm'; //asking tutor if he accepts the extension


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

  props.upcoming.forEach(u => {
    upcoming.push({
      'start_time': u.session.start_date_time,
      'subject': u.subject.subject_field,
      'tutor':u.session.tutor,
    })
  })

  return (
    <Page
      className={classes.root}
      title="Overview"
    >
      <Container maxWidth={false}>
        <TutorExtensionForm open={props.open} setOpen={props.setOpen}/>
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
          <Grid container
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
            <Calendar changeDate={changeDate} selectedDate={selectedDate} upcoming={upcoming} id='selector2' />
          </Grid>
          <Grid
            item
            lg={8}
            md={8}
            xl={8}
            xs={12}
            id='selector3'
          >
            <Upcoming currentDate={selectedDate} upcoming={upcoming} />
          </Grid>
          <Grid
            item
            lg={12}
            md={12}
            xl={12}
            xs={12}
          >
            <History setHistory={props.setHistory} rows={props.history}/>
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
