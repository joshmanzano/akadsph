import React, { Component } from "react";
import {
  Container,
  Grid,
} from '@material-ui/core';

export class features extends Component {
  render() {
    return (
      <div id="features" className="text-center">
        <Container>
          {/* <div className="col-md-10 col-md-offset-1 section-title">
            <h2>Features</h2>
          </div> */}
          <div className="row">
            <Grid container spacing={2}>
            {this.props.data
              ? this.props.data.map((d,i) => (
                  <Grid item xs={4} key={`${d.title}-${i}`}>
                    {" "}
                    <i className={d.icon}></i>
                    <h3>{d.title}</h3>
                    <p>{d.text}</p>
                  </Grid>
                ))
              : "Loading..."}
            </Grid>
          </div>
        </Container>
      </div>
    );
  }
}

export default features;
