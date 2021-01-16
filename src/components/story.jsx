import React, { Component } from "react";
import {
  Container,
  Grid,
  Box,
  Typography,
  Button,
} from '@material-ui/core';

export class story extends Component {
  render() {
    return (
      <div id="features" className="text-center">
        <Container maxWidth="md" alignItems="center">
          <div className="col-md-10 col-md-offset-1">
            <h2>Our Story</h2>
          </div>
          <Grid container alignItems="center" spacing={2}>
            <Grid item
            lg={12}
            md={12}
            xl={12}
            xs={12}>
            <Typography variant="subtitle1" align="center" >
            It all started when our co-founder, Angela, found out her mom had a hard time finding a Filipino tutor for her son. 
            Being in college at the time, Angela also realized that she had friends who were competent tutors in other subjects like Math and English as well. 
            She thought <span style={{color: "#6CC2B6"}}>“Why couldn’t there be a platform that connects capable and competent tutors with the parents who need them?”</span>
            </Typography>
            </Grid>
            <Grid item
              lg={12}
              md={12}
              xl={12}
              xs={12}  alignItems="center" style={{alignText: "center"}}>
              <Box mb={8} alignItems="center">
                <Button onClick={() =>  window.open("https://tiny.cc/AkadsEarlyAccess","_blank")} variant="outlined" color="secondary" id="actionButton">
                  Find A Tutor
                </Button> 
              </Box>
            </Grid>
          </Grid>

          <div className="col-md-10 col-md-offset-1">
            <h2>Online Learning, Real-world Results</h2>
          </div>
          <Grid container alignItems="center" spacing={2}>
            <Grid item
              lg={12}
              md={12}
              xl={12}
              xs={12}>
            <Typography variant="subtitle1" align="center" >
              We believe that nothing is as engaging and effective as one-on-one learning. Having one committed tutor that listens to your child and moves at their pace is Akads’s gold standard. 
              <span style={{color: "#6CC2B6"}}>One-on-one learning just works</span>. 
              Save time by letting us match the best tutors for you and you’ll see real-world results without ever having to leave your home.
            </Typography>
            </Grid>
            <Grid item
              lg={12}
              md={12}
              xl={12}
              xs={12}  alignItems="center" style={{alignText: "center"}}>
              <Box mb={5} alignItems="center">
                <Button onClick={() =>  window.open("https://tiny.cc/AkadsEarlyAccess","_blank")} variant="outlined" color="secondary" id="actionButton">
                  Get Started
                </Button>
              </Box>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item
            lg={6}
            md={6}
            xl={6}
            xs={12}
            >
              <img width='400' src='../static/images/mission.png'></img>
            </Grid>
            <Grid item
            lg={6}
            md={6}
            xl={6}
            xs={12}
            >
              <img width='400' src='../static/images/vision.png'></img>
            </Grid>
          </Grid>
         
        </Container>
      </div>
    );
  }
}

export default story;
