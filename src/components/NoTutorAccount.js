import React, { useState } from "react";
import {
  Box,
  Container,
  makeStyles,
  Button,
  TextField,
  Grid,
} from "@material-ui/core";
import Page from "src/components/Page";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Toast from "light-toast";
import { post_api } from "src/Api";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
  homebutton: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(0),
    color: theme.palette.primary.main,
    "&:hover": {
      color: theme.palette.text.primary,
    },
  },
}));

const CustomerListView = (props) => {
  let classes = useStyles();
  const [join_url, setJoinURL] = React.useState("https://google.com");
  const [tutorEmail, setEmail] = React.useState("");

  const join_session = (url) => {
    setJoinURL(url);
  };

  return (
    <Page className={classes.root} title="Find Tutor">
      <Box mx={3}>
        <Button
          href="/"
          className={classes.homebutton}
          startIcon={<ArrowBackIosIcon />}
        >
          Home
        </Button>
      </Box>
      <Container maxWidth={false}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          mt={8}
        >
          <Container maxWidth="md">
            <Box mb={4} textAlign="center">
              <img
                width="200vh"
                alt="Under development"
                src="/static/images/oli-sad.png"
              />
            </Box>
            <h2 align="center">
              Hello! Unfortunately we are not accepting new tutors as of the
              moment.
            </h2>
            <h2 align="center">
              If you are interested in becoming an Akads tutor and would like to
              be updated once applications open, kindly put your email in the
              form below!
            </h2>
            <Box mt={4} align="center">
              <TextField
                value={tutorEmail}
                onChange={(e) => setEmail(e.target.value)}
                variant="outlined"
              />
              {/* <Button size="large" color="primary" variant="contained" onClick={() => {}}>
                    Submit
                  </Button>
              <Grid container spacing={1} alignItems="center">
                <Grid item>
                  <Box flexGrow={1}/>
                </Grid>
                <Grid item>
                </Grid>
                <Grid item>
                </Grid>
                <Grid item>
                  <Box flexGrow={1}/>
                </Grid>
              </Grid> */}
            </Box>
            <Box mt={4} align="center">
              <Button
                size="large"
                color="primary"
                variant="contained"
                onClick={() => {
                  Toast.loading("Submitting email...");
                  post_api(
                    "receive-tutor-email",
                    {
                      email: tutorEmail,
                    },
                    (res) => {
                      Toast.success("Email submitted!", 500);
                    }
                  );
                }}
              >
                Submit
              </Button>
            </Box>
          </Container>
        </Box>
      </Container>
    </Page>
  );
};

export default CustomerListView;
