import React, { Component } from "react";
import { Container, Grid, Box } from "@material-ui/core";

export class features extends Component {
  render() {
    return (
      <div id="benefits" className="text-center">
        <Container>
          <div className="col-md-10 col-md-offset-1">
            <h2 style={{ color: "#FFF" }}>Benefits</h2>
          </div>
          <div className="row">
            <Grid container spacing={2}>
              {this.props.data
                ? this.props.data.map((d, i) => (
                    <Grid item md={4} xs={12} key={`${d.title}-${i}`}>
                      <Box mt={4}>
                        {" "}
                        <img width="90" src={d.icon} />
                        <h3 style={{ color: "#FFF" }}>{d.title}</h3>
                        <p style={{ color: "#FFF" }}>{d.text}</p>
                      </Box>
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
