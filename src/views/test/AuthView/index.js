import React from 'react';
import {Container, Box, Typography, makeStyles} from '@material-ui/core'
import {useLocation} from 'react-router-dom'
import Page from 'src/components/Page';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const Dashboard = () => {
  const classes = useStyles();
  const search = useLocation().search;
  const code = new URLSearchParams(search).get('code');

  localStorage.setItem('zoom_token',code)

  return (
    <Page
      className={classes.root}
      title="Dashboard"
    >
      <Container maxWidth={false}>
        <Box mb={4}>
          <Typography variant="h1">
            Authenticated with Zoom!
          </Typography>
        </Box>
        <Box mb={4}>
          <Typography variant="h1">
            Code: {code}
          </Typography>
        </Box>
      </Container>
    </Page>
  );
};

export default Dashboard;
