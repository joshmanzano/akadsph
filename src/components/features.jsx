import React, { Component } from "react";
import {
  Container,
  Grid,
  Box,
} from '@material-ui/core';
import {Animated} from 'react-animated-css';

export class features extends Component {
  render() {
    return (
      <div id="features" className="text-center">
        <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
        <Container>
          <div className="col-md-10 col-md-offset-1">
            <h2>How it works</h2>
          </div>
          <div className="row">
            <Grid container spacing={2}>
            {this.props.data
              ? this.props.data.map((d,i) => (
                  <Grid item md={4} xs={12} key={`${d.title}-${i}`}>
                    <Box mt={4}>
                    {" "}
                    <img width="90" src={d.icon}/>
                    <h3>{d.title}</h3>
                    <p>{d.text}</p>
                    </Box>
                  </Grid>
                ))
              : "Loading..."}
            </Grid>
          </div>
        </Container>
        </Animated>
      </div>
    );
  }
}

export default features;
