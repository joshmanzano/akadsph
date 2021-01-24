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

              <Link to="header" smooth={true} onClick={()=> {this.props.setShowPage("main")}}>
                <img height="50" src='../img/logo.png'></img>
              </Link>
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              <li>
                {/* <a href="/#about" className="page-scroll"> */}
                <Link to="header" spy={true} smooth={true} onClick={()=> {this.props.setShowPage("about")}}>
                  About
                {/* </a> */}
                </Link>
              </li>
              <li>
                <Link onClick={()=> {this.props.setShowPage("main")}} to="pricing" spy={true} smooth={true}>
                  Pricing
                </Link>
              </li>
              <li>
                <Link onClick={()=> {this.props.setShowPage("main")}} to="testimonials" spy={true} smooth={true}>
                  Testimonials
                </Link>
              </li>
              <li>
                <a  onClick={()=> {this.props.setShowPage("becomeTutor")}} /*href="/#contact"*/ className="page-scroll">
                  Become A Tutor
                </a>
              </li>
              <li>
                <Button onClick={() => window.location.replace('/login')} variant="outlined" color="secondary" id="loginButton">
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
