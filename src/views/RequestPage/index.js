import React from 'react';
import {
  Container,
  Box,
  makeStyles,
  Typography,
} from '@material-ui/core';

import Page from 'src/components/Page';
import Requests from './Requests';
import JobRequestTutorial from 'src/components/JobRequestTutorial';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const RequestView = (props) => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Requests"
    >
      <JobRequestTutorial enabled={props.tutorial}/>
      <Container maxWidth={false} id="requests">
        <Box mb={4}>
          <Typography variant="h1" align="center">
            Requests
          </Typography>
        </Box>
        <Requests pending={props.pending}/>
      </Container>
    </Page>
  );
};

export default RequestView;
