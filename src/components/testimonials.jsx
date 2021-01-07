import React, { Component } from "react";
import {
  Container,
  Grid,
  Paper,
  Button,
  Box,
  Hidden
} from '@material-ui/core';

import Carousel from 'react-material-ui-carousel'

function TestimonialGrid(props){
  return (
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
      <Hidden xsDown>
      <div id="testimonials">
        <Container>
          <Box>
            <div className="text-center">
              <h2>Don't just take our word for it. See what parents have to say...</h2>
            </div>
            <Box mt={8}>

            <div className="row">
              {this.props.data &&
                <Carousel autoPlay={true} interval={10000} indicators={true}>
                {
                    this.props.data.map( (d, i) => <TestimonialGrid d={d} i={i} /> )
                }
                </Carousel>
              }

            </div>

            </Box>
          </Box>
        </Container>
      </div>
      </Hidden>
    );
  }
}

export default testimonials;
