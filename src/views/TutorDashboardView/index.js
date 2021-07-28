import React, {useState} from 'react';
import {
  Container,
  Grid,
  Box,
  makeStyles,
  Typography,
} from '@material-ui/core';
import Page from 'src/components/Page';
import AgoraFrame from 'src/components/agoraframe';
import Upcoming from './Upcoming';
import History from './History';
import TutorExtensionForm from 'src/components/TutorExtensionForm'; //asking tutor if he accepts the extension
import TutorDashboardTutorial from 'src/components/TutorDashboardViewTutorial';
import TermsModal from 'src/components/TermsModal';
import moment from 'moment';

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
  const [steps, setSteps] = useState("not done");
  const [open, setOpen] = useState(false);

  const upcoming = []
  const history = []
  const [options, setOptions] = React.useState(['Tutor Terms and Conditions', 'Privacy Policy', 'Refund and Cancellation Policy'])
  const [links, setLinks] = React.useState(['https://akads-public-bucket.s3-ap-southeast-1.amazonaws.com/Akads+Website+Tutor+Terms+%26+Conditions.pdf', 'https://akads-public-bucket.s3-ap-southeast-1.amazonaws.com/AKADS+Privacy+Policy.pdf', 'https://akads-public-bucket.s3-ap-southeast-1.amazonaws.com/Akads+Refund+and+Cancellation+Policy.pdf'])
  
  var currentSession = null

  props.upcoming.forEach(u => {
    console.log('##### u')
    if(new Date() >= new Date(u.session.start_date_time) && new Date() <= new Date(u.session.end_date_time)){
      currentSession = u
    }
    upcoming.push({
      'tutee':u.child.first_name,
      'id': u.session.id,
      'files': u.request.extra_files,
      'duration': u.request.time,
      'start_time': u.session.start_date_time,
      'subject': u.subject.subject_field,
      // 'tutor_join_link':u.session.tutor_join_link,
      // 'tutee_join_link':u.session.tutee_join_link,
    })
  })

  props.history.forEach(u => {
    history.push({
      'date': moment(u.session.start_date_time).format('MMMM Do YYYY'),
      'time': moment(u.session.start_date_time).format('h:mm:ss a'),
      'subject': u.subject.subject_field,
      'tutor':u.tutor.first_name,
      'student':u.child.first_name,
    })
  })



  const openTerms = () => {
    setOpen(true)
  }

  return (
    <Page
      className={classes.root}
      title="Overview"
    >
       <TutorDashboardTutorial openTerms={openTerms} enabled={props.tutorial}/>
       <TermsModal open={open} setOpen={setOpen} optionLabels={options} linkPages={links}/>
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
          {currentSession &&
          <Grid
            item
            lg={12}
            md={12}
            xl={12}
            xs={12}
          >
            <AgoraFrame join_url={currentSession.session.tutor_join_link}/>
          </Grid>
          }
          <Grid
            item
            lg={4}
            md={4}
            xl={4}
            xs={12}
            id="calendar"
          >
            <Calendar changeDate={changeDate} selectedDate={selectedDate} upcoming={upcoming} id='selector2' />
          </Grid>
          <Grid
            item
            lg={8}
            md={8}
            xl={8}
            xs={12}
            id="upcoming"
          >
            <Upcoming currentDate={selectedDate} files={props.files} upcoming={upcoming} />
          </Grid>
          <Grid
            item
            lg={12}
            md={12}
            xl={12}
            xs={12}
            id="history"
          >
            <History rows={history}/>
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
