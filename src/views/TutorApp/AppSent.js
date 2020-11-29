import React, { useState } from 'react';
import {
  Box,
  Container,
  makeStyles,
  Button,
} from '@material-ui/core';
import Page from 'src/components/Page';


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
}));

const AppSent= (props) => {

  let classes = useStyles();

  return (
    <Page
      className={classes.root}
      // title="Find Tutor" 
    >
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
                src="/static/images/oli-happy.png"
              />
            </Box>
            <h2 align="center">
              Tutor application successfully sent! We will email you soon about your confirmation.
            </h2>
           <Box textAlign='center'>
              <Button href='#/'>
                Go back to home page
              </Button>
           </Box>
          </Container>
        </Box>
      </Container>
    </Page>
  );
};

export default AppSent;
