import React, { Component } from "react";
import {
  Button,
} from '@material-ui/core';
import {Link} from 'react-scroll';

export class Navigation extends Component {

  render() {
    return (
      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              {" "}
              <span className="sr-only">Toggle navigation</span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
            </button>
            {/* <a className="navbar-brand page-scroll" href="#page-top">
              <img src='../img/logo.png'></img>
            </a>{" "} */}
            <a href="/#/#page-top">
              <img height="50" src='../img/logo.png'></img>
            </a>{" "}
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              {/* <li>
                <a href="#/#about" className="page-scroll">
                  About
                </a>
              </li> */}
              <li>
                <Link to="pricing" spy={true} smooth={true}>
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="testimonials" spy={true} smooth={true}>
                  Testimonials
                </Link>
              </li>
              {/* <li>
                <a href="#/#contact" className="page-scroll">
                  Become A Tutor
                </a>
              </li> */}
              <li>
                <Button onClick={() => window.location.replace('#/login')} variant="outlined" color="secondary" id="loginButton">
                  Login
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
