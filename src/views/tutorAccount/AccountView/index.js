import React from 'react';
import {
  Container,
  Grid,
  makeStyles,
  Box,
  Typography,
} from '@material-ui/core';
import Page from 'src/components/Page';
import Profile from './Profile';
import ProfileDetails from './ProfileDetails';
import Metrics from './Metrics';
import TutorProfileTutorial from 'src/components/TutorProfileTutorial';


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

  return (
    <Page
      className={classes.root}
      title="Profile"
    >
       <TutorProfileTutorial enabled={props.tutorial}/>
       
      <Container maxWidth="lg">
        <Grid
          direction="row"
          alignItems="center"
          container
          spacing={3}
        >
          <Grid
            item
            lg={12}
            md={12}
            xl={12}
            xs={12}>
            <Grid container spacing={3}>
              <Grid
                item
                lg={1}
                md={1}
                xl={1}
                xs={12}
              >
              <img width='100' src='../static/images/oli-wink.png'>
              </img>
              </Grid>
              <Grid
              item
              lg={11}
              md={11}
              xl={11}
              xs={12}
              >
                <Box ml={2} mt={3}>
                  <Grid container spacing={0}
                  direction="column"
                  >
                    <Grid item>
                    <Box flexGrow={1}/>
                    </Grid>
                    <Grid item>
                      <Typography variant="h1" align='left'>
                        Profile
                    </Typography>
                    </Grid>
                    
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xs={12}
            id="profilePic"
          >
            {/* <Box flexGrow={1}/> */}
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
            id="metrics"
          >
            <Metrics/>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default TutorAccountView;
