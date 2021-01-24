import React, { Component } from "react";
import {
  Container,
  Grid,
  Box,
  Button,
  Hidden,
} from '@material-ui/core';
import QueueAnim from 'rc-queue-anim';

export class Header extends Component {
  render() {
    return (
      <QueueAnim>

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
                      <div key="1">
                      <p>
                        Akads helps you match with a tutor that is most suited for your child. <b>Create an account now</b> and have your <b>first hour for FREE.</b>
                      </p>
                      </div>
                    <div key="2">
                    <Box mb={8} alignItems="center">
                        <Button /*href="/login"*/ onClick={() =>  window.open("https://tiny.cc/AkadsEarlyAccess","_blank")} style={{borderRadius: "25px"}} size="large" color="default" variant="outlined">
                          Sign Up For Early Access
                        </Button>
                    </Box>
                    </div>
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
                        <Button /*href="/login"*/ onClick={() =>  window.open("https://tiny.cc/AkadsEarlyAccess","_blank")} style={{borderRadius: "25px"}} size="large" color="default" variant="outlined">
                          Sign Up For Early Access
                        </Button>
                    </Box>
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
