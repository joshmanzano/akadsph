import React, { Component } from "react";
import { Container, Grid, Box, Button, Hidden } from "@material-ui/core";
import QueueAnim from "rc-queue-anim";

export class Header extends Component {
  render() {
    return (
      <QueueAnim>
        <header id="header">
          <Hidden mdDown>
            <div className="intro-tutor">
              <div className="overlay">
                <div className="row intro-row-tutor">
                  <div className="col-xs-5 intro-text-tutor">
                    <h1>
                      {this.props.data
                        ? /*this.props.data.title*/ "Help students anytime, anywhere"
                        : "Loading"}
                      <span></span>
                    </h1>
                    <div key="1">
                      <p>
                        Become an Akads tutor and join us in helping students
                        achieve their academic goals
                      </p>
                      <Box mb={8} alignItems="center">
                        <Button
                          /*href="/login"*/ onClick={() =>
                            window.location.replace("/tutor-form")
                          }
                          style={{ borderRadius: "25px", zIndex: "99" }}
                          size="large"
                          color="default"
                          variant="outlined"
                        >
                          Apply Now
                        </Button>
                      </Box>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Hidden>
          <Hidden lgUp>
            <div className="intro-tutor intro-small">
              <div className="overlay">
                <Container maxWidth="xs">
                  <div className="row">
                    <div className="intro-text-tutor">
                      <h1>
                        {this.props.data
                          ? /*this.props.data.title*/ "Help students anytime, anywhere"
                          : "Loading"}
                        <span></span>
                      </h1>
                      {/* <Container maxWidth="xs"> */}
                      <p>
                        Become an Akads tutor and join us in helping students
                        achieve their academic goals
                      </p>
                      <Box mb={8} alignItems="center">
                        <Button
                          /*href="/login"*/ onClick={() =>
                            window.location.replace("/tutor-form")
                          }
                          style={{ borderRadius: "25px", zIndex: "99" }}
                          size="large"
                          color="default"
                          variant="outlined"
                        >
                          Apply Now
                        </Button>
                      </Box>
                      {/* </Container> */}
                    </div>
                  </div>
                </Container>
              </div>
            </div>
          </Hidden>
        </header>
      </QueueAnim>
    );
  }
}

export default Header;
