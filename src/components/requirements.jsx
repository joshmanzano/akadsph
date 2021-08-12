import React, { Component } from "react";
import {
  Container,
  Grid,
  Box,
  Button,
  Hidden,
  Typography,
} from "@material-ui/core";

export class requirements extends Component {
  render() {
    return (
      <div id="requirements">
        <div /*className="requirementsCover"*/ className="requirementsimage">
          <Grid container spacing={1}>
            {/* <Hidden mdDown> */}
            {/* <Grid item xs={12} md={6} className='requirementsimage'>
                </Grid> */}
            {/* </Hidden> */}
            {/* <Hidden lgUp>
              </Hidden> */}
            <Grid item sm={2} md={2} xs={2}></Grid>
            <Grid item xs={12} sm={8} md={8} lg={8}>
              <Box my={4}>
                <div className="requirements-text">
                  <Hidden mdDown>
                    <Box align="center" mb={8} mt={1}>
                      <h3>Requirements</h3>
                    </Box>
                  </Hidden>
                  <Hidden lgUp>
                    <Box align="center" mb={3}>
                      <h3>Requirements</h3>
                    </Box>
                  </Hidden>
                  <Box mb={12}>
                    <Grid container alignContent="center" my={2} spacing={3}>
                      <Grid item md={4} sm={4} xs={12} alignItems="center">
                        <Box align="center">
                          <img
                            id="vector-icons"
                            src="../static/images/abc-block.png"
                            width="80"
                            /*className="img-responsive"*/ alt=""
                          />
                        </Box>
                        <Typography
                          variant="h5"
                          align="center"
                          style={{ color: "#EB5531", fontStyle: "bold" }}
                        >
                          Schedule
                        </Typography>
                      </Grid>
                      <Grid item md={4} sm={4} xs={12} alignItems="center">
                        <Box align="center">
                          <img
                            id="vector-icons"
                            src="../static/images/student.png"
                            width="80"
                            /*className="img-responsive"*/ alt=""
                          />
                        </Box>
                        <Typography
                          variant="h5"
                          align="center"
                          style={{ color: "#EB5531", fontStyle: "bold" }}
                        >
                          School or Government ID
                        </Typography>
                      </Grid>
                      <Grid item md={4} sm={4} xs={12} alignItems="center">
                        <Box align="center">
                          <img
                            id="vector-icons"
                            src="../static/images/compass.png"
                            width="80"
                            /*className="img-responsive"*/ alt=""
                          />
                        </Box>
                        <Typography
                          variant="h5"
                          align="center"
                          style={{ color: "#EB5531", fontStyle: "bold" }}
                        >
                          Resume
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>
                  {/* <p>{this.props.data ? this.props.data.paragraph : 'loading...'}</p> */}
                </div>
              </Box>
            </Grid>
            <Grid item sm={2} md={2} xs={2}></Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default requirements;
