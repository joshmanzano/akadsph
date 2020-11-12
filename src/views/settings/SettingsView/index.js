import React from 'react';
import {
  Box,
  Container,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import Notifications from './Notifications';
import Password from './Password';
import SavedPayMethod from './SavedPayMethod';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const SettingsView = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Settings"
    >
      <Container maxWidth="lg">
        <Notifications />
        {/* Assume that google will handle passwords and also we won't be saving the payments */}
        {/* <Box mt={3}>
          <Password />
        </Box>
        <Box mt={3}>
          <SavedPayMethod />
        </Box> */}
      </Container>
    </Page>
  );
};

export default SettingsView;
