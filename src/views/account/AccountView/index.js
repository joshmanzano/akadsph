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
  const accountType = 'parent';

  return (
    <Page
      className={classes.root}
      title="Account"
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
            <ProfileDetails props={props}/>
          </Grid>
          {accountType == 'parent' ? 
          <React.Fragment>
          <Grid
            item
            lg={12}
            md={12}
            xl={12}
            xs={12}
          >
            <Children children={props.children}/>
          </Grid>
          <Grid
            item
            lg={12}
            md={12}
            xl={12}
            xs={12}
          >
            <FaveTutors favtutors={props.favtutors}/>
          </Grid>
          </React.Fragment>
          :
          <Grid
            item
            lg={6}
            md={6}
            xl={6}
            xs={6}
          >
            <SubjectArea/>
          </Grid>
          }
          
        </Grid>
      </Container>
    </Page>
  );
};

export default Account;
