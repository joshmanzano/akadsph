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
      title="Find Tutor" 
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
              Hello! The site currently in beta-production. Only select parents can login. If you are interested in trying it out then you can sign using the link below.
            </h2>
            <Box mt={4} align="center">
            <Button size="large" color="primary" variant="contained">
              Buy Hours
            </Button>
            </Box>
          </Container>
        </Box>
      </Container>
    </Page>
  );
};

export default CustomerListView;
