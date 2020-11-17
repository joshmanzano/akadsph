import React from 'react';
import {
  Container,
  Grid,
  Box,
  makeStyles,
  Typography,
} from '@material-ui/core';
import Page from 'src/components/Page';
import PayoutHeaders from './PayoutHeaders';


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

  return (
    <Page
      className={classes.root}
      title="Dashboard"
    >
      <Container maxWidth={false}>
        <Box mb={4}>
          <Typography variant="h1" align="center">
            Payout & History
          </Typography>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <PayoutHeaders/>
          </Grid>
          <Grid item xs={12}>
            <PayoutHeaders/>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default Dashboard;
