import React, { Component } from "react";
import {
  Container,
  Grid,
  Box,
  Button,
  Hidden,
} from '@material-ui/core';

export class Header extends Component {
  render() {
    return (
      <header id="header">
              <Hidden mdDown>
        <div className="intro">
          <div className="overlay">
                <div className="row intro-row">
                  <div className="col-xs-5 intro-text">
                    <h1>
                      {this.props.data ? this.props.data.title : "Loading"}
                      <span></span>
                    </h1>
                    <p>
                      Akads helps you match with a tutor that is most suited for your child. <b>Create an account now</b> and have your <b>first hour for FREE.</b>
                    </p>
                    <Box mb={8} alignItems="center">
                        <Button href="#/login" style={{borderRadius: "25px"}} size="large" color="default" variant="outlined">
                          Get started
                        </Button>
                    </Box>
                  </div>
                </div>
            </div>
          </div>
              </Hidden>
              <Hidden lgUp>
        <div className="intro intro-small">
          <div className="overlay">
              <Container maxWidth="xs">

                <div className="row">
                  <div className="intro-text">
                    <h1>
                      {this.props.data ? this.props.data.title : "Loading"}
                      <span></span>
                    </h1>
                    <p>
                      Akads helps you match with a tutor that is most suited for your child. <b>Create an account now</b> and have your <b>first hour for FREE.</b>
                    </p>
                    <Box mb={8} alignItems="center">
                        <Button href="#/login" style={{borderRadius: "25px"}} size="large" color="default" variant="outlined">
                          Get started
                        </Button>
                    </Box>
                  </div>
                </div>

              </Container>
            </div>
          </div>
              </Hidden>
      </header>
    );
  }
}

export default Header;
