import React, { useState, Fragment } from "react";
import {
  Container,
  Grid,
  Box,
  makeStyles,
  Typography,
} from "@material-ui/core";
import SummerHeader from "src/components/summerheader";
import AgoraFrame from "src/components/agoraframe";
import Page from "src/components/Page";
import Upcoming from "./Upcoming";
import Pending from "./Pending";
import History from "./History";
import Transaction from "./Transaction";
import moment from "moment";
import DashboardViewTutorial from "src/components/DashboardViewTutorial";
import TermsModal from "src/components/TermsModal";

import Calendar from "./Calendar";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}));

const Dashboard = (props) => {
  const classes = useStyles();
  const [selectedDate, changeDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [steps, setSteps] =
    useState("not done"); /*localStorage.getItem('steps')*/
  const [options, setOptions] = React.useState([
    "Terms of Use",
    "Privacy Policy",
    "Refund and Cancellation Policy",
  ]);
  const [links, setLinks] = React.useState([
    "https://akads-public-bucket.s3-ap-southeast-1.amazonaws.com/AKADS+Terms+of+Use.pdf",
    "https://akads-public-bucket.s3-ap-southeast-1.amazonaws.com/AKADS+Privacy+Policy.pdf",
    "https://akads-public-bucket.s3-ap-southeast-1.amazonaws.com/Akads+Refund+and+Cancellation+Policy.pdf",
  ]);

  const upcoming = [];
  const pending = [];
  const history = [];
  const transaction = [];

  var currentSession = null;

  props.upcoming.forEach((u) => {
    console.log("##### u");
    if (
      new Date() >= new Date(u.session.start_date_time) &&
      new Date() <= new Date(u.session.end_date_time)
    ) {
      currentSession = u;
    }
    upcoming.push({
      id: u.session.id,
      files: u.request.extra_files,
      duration: u.request.time,
      start_time: u.session.start_date_time,
      subject: u.subject.subject_field,
      tutor: u.tutor.first_name,
      // 'tutor_join_link':u.session.tutor_join_link,
      // 'tutee_join_link':u.session.tutee_join_link,
    });
  });

  props.pending.forEach((p) => {
    pending.push({
      id: p.request.id,
      date: moment(p.available_days[0].start_date_time).format("MMMM Do YYYY"),
      subject: p.subject.subject_field,
      student: p.child.first_name,
      topics: p.request.topics,
      files: p.request.extra_files,
    });
  });

  props.history.forEach((u) => {
    history.push({
      date: moment(u.session.start_date_time).format("MMMM Do YYYY"),
      time: moment(u.session.start_date_time).format("h:mm:ss a"),
      subject: u.subject.subject_field,
      tutor: u.tutor.first_name,
      tutor_id: u.tutor.id,
      student: u.child.first_name,
    });
  });

  props.transaction.forEach((t) => {
    transaction.push({
      date: moment(t.date).format("MMMM Do YYYY"),
      time: moment(t.date).format("h:mm:ss a"),
      credits: t.credits,
      amount: "Php " + String(Number(t.amount) / 100),
      ref: t.id,
    });
  });

  const openTerms = () => {
    setOpen(true);
  };

  const updateSteps = () => {
    setSteps(localStorage.getItem("steps"));
  };

  return (
    <Fragment>
      <Page className={classes.root} title="Overview">
        <DashboardViewTutorial
          openTerms={openTerms}
          enabled={localStorage.getItem("steps") == "done" ? false : true}
        />
        {updateSteps}
        <TermsModal
          open={open}
          setOpen={setOpen}
          optionLabels={options}
          linkPages={links}
        />
        <Container maxWidth={false}>
          <Box mb={2}>
            <Grid container spacing={3}>
              <Grid item lg={1} md={1} xl={1} xs={12}>
                <img width="100" src="../static/images/oli-happy.png"></img>
              </Grid>
              <Grid item lg={11} md={11} xl={11} xs={12}>
                <Box ml={2} mt={2}>
                  <Grid container spacing={0} direction="column">
                    <Grid item>
                      <Box flexGrow={1} />
                    </Grid>
                    <Grid item>
                      <Typography variant="h1">
                        Welcome {props.first_name}!
                      </Typography>
                    </Grid>
                    <Grid item>
                      {props.credits > 0 ? (
                        <Typography variant="h2">
                          You have {props.credits} credit{" "}
                          {props.credits > 1 ? "hours" : "hour"} left.
                        </Typography>
                      ) : (
                        <Typography variant="h2">
                          You have no credit hours.
                        </Typography>
                      )}
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Grid container alignItems="stretch" spacing={2}>
            {currentSession && (
              <Grid item lg={12} md={12} xl={12} xs={12}>
                <AgoraFrame join_url={currentSession.session.tutee_join_link} />
              </Grid>
            )}
            {/* <Grid
              item
              lg={12}
              md={12}
              xl={12}
              xs={12}
            >
              <SummerHeader/>
            </Grid> */}
            <Grid item lg={4} md={4} xl={4} xs={12} id="calendar">
              <Calendar
                changeDate={changeDate}
                upcoming={upcoming}
                selectedDate={selectedDate}
                id="selector2"
              />
            </Grid>
            <Grid item lg={8} md={8} xl={8} xs={12} id="upcoming">
              <Box flexGrow={1}>
                <Upcoming currentDate={selectedDate} upcoming={upcoming} />
              </Box>
            </Grid>
            <Grid item lg={12} md={12} xl={12} xs={12}>
              <Pending rows={pending} />
            </Grid>
            {/* <Grid
              item
              lg={12}
              md={12}
              xl={12}
              xs={12}
              id="history"
            >
              <History rows={history} favorites={props.favorites}/>
            </Grid> */}
            <Grid item lg={12} md={12} xl={12} xs={12}>
              <Transaction rows={transaction} />
            </Grid>
          </Grid>
        </Container>
      </Page>
    </Fragment>
  );
};

export default Dashboard;
