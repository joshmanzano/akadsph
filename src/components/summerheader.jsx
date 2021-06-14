import React, { Component } from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
  Box
} from '@material-ui/core';

export class features extends Component {
  render() {
    return (
    <Card
      id="summerheader"
    >
      {/* <CardHeader
        title="Calendar"
      /> */}
      {/* <Divider /> */}
      <CardContent>
        <Grid alignItems="center" direction="column" container>
          <Grid item xs={12}>
            <Container>
              <Typography align="center">
                <h2 className="orangeText">SUMMER WITH AKADS!</h2>
              </Typography>
            </Container>
            <Container maxWidth="sm">
              <Typography align="center">
                <h3>The Akads Summer Program is our latest campaign built to help your child learn a new skill, improve on previous learnings, or be prepared for next school year's classes.</h3>
              </Typography>
            </Container>
            <Box align="center" mt={4}>
              <a target="_blank" href="https://extra.akadsph.com/">
                <Button variant="contained" color="primary">
                  Learn More
                </Button>
              </a>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
    );
  }
}

export default features;
