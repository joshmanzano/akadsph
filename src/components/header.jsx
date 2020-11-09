import React, { Component } from "react";
import {
  Container,
  Grid,
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
                    {this.props.data ? this.props.data.paragraph : "Loading"}
                  </p>
                  <a
                    href="#/login"
                    className="btn btn-custom btn-lg page-scroll"
                  >
                    Get Started
                  </a>{" "}
                </div>
                <div className="intro-text">
                  <img src="../img/header.jpg"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
