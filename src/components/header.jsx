import React, { Component } from "react";
import {
  Container,
  Grid,
  Box,
  Button,
  Hidden,
} from '@material-ui/core';
import {Animated} from 'react-animated-css';

export class Header extends Component {
  render() {
    return (
      <header id="header">
        <Hidden mdDown>
        <div className="intro">
          <div className="overlay">
        <Animated animationIn="fadeInLeft" animationOut="fadeOut" isVisible={true}>
                <div className="row intro-row">
                  <div className="col-xs-5 intro-text">
                    <h1>
                      {this.props.data ? this.props.data.title : "Loading"}
                      <span></span>
                    </h1>
                      <div key="1">
                        <p>
                          Akads helps you match with a tutor that is most suited for your child. <b>Create an account now</b> and have your <b>first hour for FREE.</b>
                        </p>
                      </div>
                    <div key="2">
                        <Box mb={8} alignItems="center">
                            <Button /*href="/login"*/ onClick={() =>  window.location.replace('/login')} style={{borderRadius: "25px"}} size="large" color="default" variant="outlined">
                              Get Started
                            </Button>
                        </Box>
                    </div>
                  </div>
                </div>
          </Animated>
            </div>
          </div>
          </Hidden>
              <Hidden lgUp>
        <div className="intro intro-small">
          <div className="overlay">
              <Container maxWidth="xs">

        <Animated animationIn="fadeInLeft" animationOut="fadeOut" isVisible={true}>
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
                        <Button /*href="/login"*/ onClick={() =>  window.location.replace('/login')} style={{borderRadius: "25px"}} size="large" color="default" variant="outlined">
                          Get Started
                        </Button>
                    </Box>
                  </div>
                </div>

        </Animated>
              </Container>
            </div>
          </div>
              </Hidden>
      </header>

    );
  }
}

export default Header;
