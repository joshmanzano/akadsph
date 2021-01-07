import React, { Component } from "react";
import {
  Container,
  Grid,
  Box,
  Button,
  Hidden,
} from '@material-ui/core';

export class about extends Component {
  render() {
    return (
        <div id="about" >
        <div className="about-cover">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-md-6"> {/*<img src="img/about.png" className="img-responsive" alt=""/>*/} </div>
              <div className="col-xs-12 col-md-6">
                <Box my={4}>
                <div className="about-text">
                  
                  <h2>About Us</h2>
                  <p>{this.props.data ? this.props.data.paragraph : 'loading...'}</p>
                  <h2>Subjects Taught</h2>
                  <div className="list-style">
                    <div className="col-lg-6 col-sm-6 col-xs-12">
                      <ul>
                        {this.props.data ? this.props.data.Why.map((d, i) => <li>{d}</li>) : 'loading'}
                      </ul>
                    </div>
                    {/* <div className="col-lg-6 col-sm-6 col-xs-12">
                      <ul>
                      {this.props.data ? this.props.data.Why2.map((d, i) => <li  key={`${d}-${i}`}> {d}</li>) : 'loading'}

                      </ul>
                    </div> */}
                  </div>
                  
                </div>
                </Box>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default about
