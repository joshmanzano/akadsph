import React, { Component } from "react";
import { Container, Grid, Box, Typography, Button } from "@material-ui/core";

export class Team extends Component {
  render() {
    return (
      <div id="team" className="text-center">
        <div className="container">
          <Box mb={7}>
            <Typography
              variant="h2"
              align="center"
              style={{ color: "#6CC2B6" }}
            >
              Meet The Team
            </Typography>
          </Box>
          {/* <div id="row"> */}
          <Grid container spacing={4}>
            {this.props.data
              ? this.props.data.map((d, i) => (
                  <Grid item lg={6} md={6} xl={6} xs={12}>
                    <div className="thumbnail">
                      {" "}
                      <img src={d.img} alt="..." className="team-img" />
                      <div className="caption">
                        <Typography
                          variant="h6"
                          align="center"
                          style={{ color: "#FFF" }}
                        >
                          {d.name}
                        </Typography>
                        <Typography
                          variant="h6"
                          align="center"
                          style={{ color: "#EB5531" }}
                        >
                          {d.job}
                        </Typography>
                      </div>
                    </div>
                  </Grid>
                ))
              : "loading"}
          </Grid>
          {/* </div> */}
        </div>
      </div>
    );
  }
}

export default Team;
