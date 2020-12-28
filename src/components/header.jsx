import React, { Component } from "react";
import {
  Container,
  Grid,
  Button,
} from '@material-ui/core';

export class Header extends Component {
  render() {
    return (
      <header id="header">
        <div className="intro">
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="col-md-8 intro-text">
                  <h1>
                    {this.props.data ? this.props.data.title : "Loading"}
                    <span></span>
                  </h1>
                  <p>
                    Akads helps you match with a tutor that is most suited for your child. <b>Create an account now</b> and have your <b>first hour for FREE.</b>
                  </p>
                  <Grid container>
                    <Grid item xs={3}/>
                    <Grid item xs={3}>
                      <Button href="#/login" style={{borderRadius: "25px"}} size="large" color="default" variant="outlined">
                        Get started
                      </Button>
                    </Grid>
                    <Grid item xs={3}>
                      <Button href="#/tutor-form" style={{borderRadius: "25px"}} size="large" color="default" variant="outlined">
                        Become A Tutor
                      </Button>
                    </Grid>
                    <Grid item xs={3}/>
                  </Grid>
                </div>
                {/* <div className="intro-text">
                  <img style={{opacity: 0.2}} width="350" src="../static/images/oli-white.png"></img>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
