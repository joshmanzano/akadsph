import React from 'react';
import {
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import Profile from './Profile';
import ProfileDetails from './ProfileDetails';
import Children from './Children';
import FaveTutors from './FaveTutors'; 
import SubjectArea from './SubjectArea';
import Metrics from './Metrics';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const TutorAccountView = (props) => {
  const classes = useStyles();
  const accountType = 'parent';

  return (
    <Page
      className={classes.root}
      title="Profile"
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={4}
            md={6}
            xs={12}
          >
            <Profile props={props}/>
          </Grid>
          <Grid
            item
            lg={8}
            md={6}
            xs={12}
          >
            <SubjectArea/>
          </Grid>
          <Grid
            item
            lg={12}
            md={12}
            xl={12}
            xs={12}
          >
            <Metrics/>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default TutorAccountView;
