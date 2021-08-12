import React, { Component } from "react";
import { Container, Grid, Box, Button, Hidden } from "@material-ui/core";
import QueueAnim from "rc-queue-anim";

export class Header extends Component {
  render() {
    return (
      <QueueAnim>
        <header id="header">
          <Hidden mdDown>
            <div className="intro-about">
              <div className="overlay">
                <div className="row intro-row-about">
                  <div className="col-xs-5 intro-text-about">
                    <h1>
                      {this.props.data
                        ? /*this.props.data.title*/ "Introducing Us"
                        : "Loading"}
                      <span></span>
                    </h1>
                    <div key="1">
                      <p>Get to know us more and what we aim to accomplish</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Hidden>
          <Hidden lgUp>
            <div className="intro-about intro-small">
              <div className="overlay">
                <Container maxWidth="xs">
                  <div className="row">
                    <div className="intro-text-about">
                      <h1>
                        {this.props.data
                          ? /*this.props.data.title*/ "Introducing Us"
                          : "Loading"}
                        <span></span>
                      </h1>
                      {/* <Container maxWidth="xs"> */}
                      <p>Get to know us more and what we aim to accomplish</p>
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
