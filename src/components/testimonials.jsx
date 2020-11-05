import React, { Component } from "react";
import {
  Container,
  Grid,
} from '@material-ui/core';

export class testimonials extends Component {
  render() {
    return (
      <div id="testimonials">
        <Container>
          <div className="section-title text-center">
            <h2>Testimonials</h2>
          </div>
          <div className="row">
            <Grid container spacing={1}>
            {this.props.data
              ? this.props.data.map((d, i) => (
                <Grid item xs={4}>
                  <div key={`${d.name}-${i}`}>
                    <div className="testimonial">
                      <div className="testimonial-image">
                        {" "}
                        <img src={d.img} alt="" />{" "}
                      </div>
                      <div className="testimonial-content">
                        <p>"{d.text}"</p>
                        <div className="testimonial-meta"> - {d.name} </div>
                      </div>
                    </div>
                  </div>
                </Grid>
                ))
              : "loading"}
            </Grid>
          </div>
        </Container>
      </div>
    );
  }
}

export default testimonials;
