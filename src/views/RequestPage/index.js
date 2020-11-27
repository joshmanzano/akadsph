import React from 'react';
import {
  Container,
  Grid,
  Box,
  makeStyles,
  Typography,
} from '@material-ui/core';

import Page from 'src/components/Page';
import Requests from './Requests';

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
      <Container maxWidth={false}>
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
