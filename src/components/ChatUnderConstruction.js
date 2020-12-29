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

const CustomerListView = (props) => {

  let classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Messages" 
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
                src="/static/images/oli-construction.png"
              />
            </Box>
            <h2 align="center">
              The chat function is under construction. This is where tutors, parents, or tutees can communicate with each other. 
            </h2>
          </Container>
        </Box>
      </Container>
    </Page>
  );
};

export default CustomerListView;
