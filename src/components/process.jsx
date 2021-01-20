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
      <div id="process" className="text-center">
        <Container>
          <Box align="center">
            <h2>Process</h2>
          </Box>
          <div className="row" style={{width: "100%"}}>
            <Grid container alignContent="center">
              <Grid item
                lg={12}
                md={12}
                xl={12}
                xs={12}
                >
                  <Container align="center" alignContet="center">
                    <Stepper activeStep={0/*steps.length - 1*/} alternativeLabel>
                      {steps.map((label) => (
                        <Step key={label}>
                          <StepLabel>{label}</StepLabel>
                        </Step>
                      ))}
                    </Stepper>
                    <Box align="center">
                      <img width='200' /*style={{float: "right"}}*/ src='../img/akads-icon.png'></img>
                    </Box>
                    
                  </Container>
                  
                </Grid>
            </Grid>
          </div>
        </Container>
      </div>
    );
  }
}

export default features;
