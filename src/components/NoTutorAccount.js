import React, { useState } from 'react';
import {
  Box,
  Container,
  makeStyles,
  Button,
} from '@material-ui/core';
import Page from 'src/components/Page';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  homebutton: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(0),
    color: theme.palette.primary.main,
    "&:hover": {
      color: theme.palette.text.primary,
    }
  },
}));

const CustomerListView = (props) => {

  let classes = useStyles();
  const [join_url, setJoinURL] = React.useState('https://google.com');

  const join_session = (url) => {
    setJoinURL(url)
  }

  return (
    <Page
      className={classes.root}
      title="Find Tutor" 
    >
      <Box mx={3}> 
        <Button href="/#" className={classes.homebutton}  startIcon={<ArrowBackIosIcon/>}>
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
              <img width="400"
                alt="Under development"
                src="/static/images/oli-construction.png"
              />
            </Box>
            <h2 align="center">
              Hello! The site is currently in beta-production. Only select tutors can login. If you are interested in becoming an Akads tutor sign up with the link below!
            </h2>
            <Box mt={4} align="center">
            <Button size="large" color="primary" variant="contained" onClick={() => window.open("https://google.com","_blank")}>
              Sign up here!
            </Button>
            </Box>
          </Container>
        </Box>
      </Container>
    </Page>
  );
};

export default CustomerListView;
