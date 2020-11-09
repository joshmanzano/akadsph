import React, { Component } from "react";
import {
  Container,
  Grid,
  Paper,
  Button,
  Box,
} from '@material-ui/core';

import Carousel from 'react-material-ui-carousel'

function TestimonialGrid(props){
  return (
    <Box height="25%">

    <Grid container spacing={1}>
    {props.d
      ? props.d.map((d, i) => (
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

    </Box>
  )
}
export class testimonials extends Component {
  render() {
    var items = [
      {
          name: "Random Name #1",
          description: "Probably the most random thing you have ever seen!"
      },
      {
          name: "Random Name #2",
          description: "Hello World!"
      }
  ]
    return (
      <div id="testimonials">
        <Container>
          <Box>
            <div className="section-title text-center">
              <h2>Testimonials</h2>
            </div>
            <div className="row">
              {this.props.data &&
                <Carousel>
                {
                    this.props.data.map( (d, i) => <TestimonialGrid d={d} i={i} /> )
                }
                </Carousel>
              }

            </div>
          </Box>
        </Container>
      </div>
    );
  }
}

export default testimonials;
