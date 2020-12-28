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
import ParentProfileTutorial from 'src/components/ParentProfileTutorial';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const Account = (props) => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Profile"
    >
      <ParentProfileTutorial enabled={true}/>
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
            id="profilePic"
          >
            <Profile props={props}/>
          </Grid>
          <Grid
            item
            lg={8}
            md={6}
            xs={12}
            id="profileDets"
          >
            <ProfileDetails props={props}/>
          </Grid>
          <Grid
            item
            lg={12}
            md={12}
            xl={12}
            xs={12}
            id="children"
          >
            <Children children={props.children}/>
          </Grid>
          <Grid
            item
            lg={12}
            md={12}
            xl={12}
            xs={12}
            id="faveTutors"
          >
            <FaveTutors favtutors={props.favtutors}/>
          </Grid>
         
        </Grid>
      </Container>
    </Page>
  );
};

export default Account;
