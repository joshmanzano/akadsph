import React, { Component } from "react";
import {
  Container,
  Grid,
  Box,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));



export class features extends Component {
  render() {
    const steps = ['Application Form', 'Interview & Demo', 'Onboarding', 'Welcome to Akads!'];;
    return (
      <div id="features" className="text-center">
        <Container>
          <div className="col-md-10 col-md-offset-1">
            <h2>Process</h2>
          </div>
          <div className="row" style={{width: "100%"}}>
            <Grid container spacing={2}>
              <Grid item
                lg={11}
                md={11}
                xl={11}
                xs={12}
                >
                  <Container>
                    <Stepper activeStep={0/*steps.length - 1*/} alternativeLabel>
                      {steps.map((label) => (
                        <Step key={label}>
                          <StepLabel>{label}</StepLabel>
                        </Step>
                      ))}
                    </Stepper>
                  </Container>
                </Grid>
                <Grid item
                lg={1}
                md={1}
                xl={1}
                xs={12}
                >
                  <img width='100' src='../img/akads-icon.png'></img>

                </Grid>
            </Grid>
          </div>
        </Container>
      </div>
    );
  }
}

export default features;
