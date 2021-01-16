import React, { Component } from "react";
import {
  Container,
  Grid,
  Box,
  Button,
  Hidden,
  Typography,
} from '@material-ui/core';

export class about extends Component {
  render() {
    return (
        <div id="about" >
        <div className="aboutCover">
            <Grid container>
              <Hidden mdDown>
                <Grid item xs={12} md={6} className='aboutimage'>
                </Grid>
              </Hidden>
              {/* <Hidden lgUp>
              </Hidden> */}
              <Grid item xs={12} sm={12} md={12} lg={6}>
                <Box my={4}>
                <div className="about-text">
                  
                  <Hidden mdDown>
                      <h3>Requirements</h3>
                  </Hidden>
                  <Hidden lgUp>
                      <Box align="center">
                        <h3>Requirements</h3>
                      </Box>
                  </Hidden>
                  <Box mb={7}>
                    <Grid container alignContent="center" my={2}>
                      <Grid item md={4} sm={4} xs={12} alignItems="center">
                        <Box align="center">
                        <img id="vector-icons" src="../static/images/abc-block.png" width="80" /*className="img-responsive"*/ alt=""/> 
                        </Box>
                        <Typography variant="h5" align="center" style={{color: "#EB5531", fontStyle: "bold"}}>Schedule</Typography>
                      </Grid>
                      <Grid item md={4} sm={4} xs={12} alignItems="center">
                        <Box align="center">
                        <img id="vector-icons" src="../static/images/student.png" width="80" /*className="img-responsive"*/ alt=""/> 
                        </Box>
                        <Typography variant="h5" align="center" style={{color: "#EB5531", fontStyle: "bold"}}>School or Government ID</Typography>
                      </Grid>
                      <Grid item md={4} sm={4} xs={12} alignItems="center">
                        <Box align="center">
                        <img id="vector-icons" src="../static/images/compass.png" width="80" /*className="img-responsive"*/ alt=""/> 
                        </Box>
                        <Typography variant="h5" align="center" style={{color: "#EB5531", fontStyle: "bold"}}>Resume</Typography>
                      </Grid>
                    </Grid>
                  </Box>
                  {/* <p>{this.props.data ? this.props.data.paragraph : 'loading...'}</p> */}
                 
                  
                </div>
                </Box>
              </Grid>
            </Grid>
        </div>
      </div>
    )
  }
}

export default about
