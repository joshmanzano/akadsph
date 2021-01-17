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
        <div /*id="about"*/ >
        <div /*className="aboutCover"*/>
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
                      <h3>Year Level</h3>
                  </Hidden>
                  <Hidden lgUp>
                      <Box align="center">
                        <h3>Year Level</h3>
                      </Box>
                  </Hidden>
                  <Box mb={7}>
                    <Grid container alignContent="center" my={2}>
                      <Grid item md={4} sm={4} xs={12} alignItems="center">
                        <Box align="center">
                        <img id="vector-icons" src="../static/images/abc-block.png" width="80" /*className="img-responsive"*/ alt=""/> 
                        </Box>
                        <Typography variant="h5" align="center" style={{color: "#EB5531", fontStyle: "bold"}}>Lower School</Typography>
                      </Grid>
                      <Grid item md={4} sm={4} xs={12} alignItems="center">
                        <Box align="center">
                        <img id="vector-icons" src="../static/images/student.png" width="80" /*className="img-responsive"*/ alt=""/> 
                        </Box>
                        <Typography variant="h5" align="center" style={{color: "#EB5531", fontStyle: "bold"}}>Middle School</Typography>
                      </Grid>
                      <Grid item md={4} sm={4} xs={12} alignItems="center">
                        <Box align="center">
                        <img id="vector-icons" src="../static/images/compass.png" width="80" /*className="img-responsive"*/ alt=""/> 
                        </Box>
                        <Typography variant="h5" align="center" style={{color: "#EB5531", fontStyle: "bold"}}>Junior High School</Typography>
                      </Grid>
                    </Grid>
                  </Box>
                  {/* <p>{this.props.data ? this.props.data.paragraph : 'loading...'}</p> */}
                  <Hidden mdDown>
                      <h3>Subjects</h3>
                  </Hidden>
                  <Hidden lgUp>
                      <Box align="center">
                        <h3>Subjects</h3>
                      </Box>
                  </Hidden>
                  <Box mb={5}>
                    <Grid container alignContent="center" my={2} spacing={4}>
                    <Grid item xs={1} alignItems="center"></Grid>
                      <Grid item md={2} sm={4} xs={12} alignItems="center">
                        <Box align="center">
                        <img id="vector-icons" src="../static/images/calculator_icon.png" width="80" /*className="img-responsive"*/ alt=""/> 
                        </Box>
                        <Typography variant="h5" align="center" style={{color: "#EB5531", fontStyle: "bold"}}>Math</Typography>
                      </Grid>
                      <Grid item md={2} sm={4} xs={12} alignItems="center">
                        <Box align="center">
                        <img id="vector-icons" src="../static/images/atom.png" width="80" /*className="img-responsive"*/ alt=""/> 
                        </Box>
                        <Typography variant="h5" align="center" style={{color: "#EB5531", fontStyle: "bold"}}>Science</Typography>
                      </Grid>
                      <Grid item md={2} sm={4} xs={12} alignItems="center">
                        <Box align="center">
                        <img id="vector-icons" src="../static/images/book.png" width="80" /*className="img-responsive"*/ alt=""/> 
                        </Box>
                        <Typography variant="h5" align="center" style={{color: "#EB5531", fontStyle: "bold"}}>English</Typography>
                      </Grid>
                      <Grid item md={2} sm={4} xs={12} alignItems="center">
                        <Box align="center">
                        <img id="vector-icons" src="../static/images/chat.png" width="80" /*className="img-responsive"*/ alt=""/> 
                        </Box>
                        <Typography variant="h5" align="center" style={{color: "#EB5531", fontStyle: "bold"}}>Filipino</Typography>
                      </Grid>
                      <Grid item md={2} sm={4} xs={12} alignItems="center">
                        <Box align="center">
                        <img id="vector-icons" src="../static/images/scroll.png" width="80" /*className="img-responsive"*/ alt=""/> 
                        <Typography variant="h5" align="center" style={{color: "#EB5531", fontStyle: "bold"}}>Chinese</Typography>
                        <span style={{color: "#EB5531", fontSize: "11px"}}>(Coming Soon!)</span>
                        </Box>
                        
                        
                      </Grid>
                      <Grid item xs={1} alignItems="center"></Grid>
                    </Grid>
                  </Box>
                  
                  {/* <div className="list-style">
                    <div className="col-lg-6 col-sm-6 col-xs-12">
                      <ul>
                        {this.props.data ? this.props.data.Why.map((d, i) => <li>{d}</li>) : 'loading'}
                      </ul>
                    </div> */}
                    {/* <div className="col-lg-6 col-sm-6 col-xs-12">
                      <ul>
                      {this.props.data ? this.props.data.Why2.map((d, i) => <li  key={`${d}-${i}`}> {d}</li>) : 'loading'}

                      </ul>
                    </div> */}
                  {/* </div> */}
                  
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
