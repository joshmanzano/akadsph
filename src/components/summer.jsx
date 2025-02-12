import React, { Component } from "react";
import { Container, Grid, Box, Button, Divider } from "@material-ui/core";

export class features extends Component {
  render() {
    return (
      <div id="summer" className="text-center">
        <Container>
          <Container>
            <h2 className="orangeText">SUMMER WITH AKADS!</h2>
          </Container>
          <Container maxWidth="md">
            <h3>
              The Akads Summer Program is our latest campaign built to help your
              child learn a new skill, improve on previous learnings, or be
              prepared for next school year's classes.
            </h3>
          </Container>
          <div className="row">
            <Box mt={4}></Box>
            <Grid container spacing={2}>
              <Grid item md={6} xs={12}>
                <Box mt={4}>
                  <Container maxWidth="xs">
                    {" "}
                    <h3 className="orangeText">SUMMER ENRICHMENT</h3>
                    <Box mt={4} />
                    <p className="leftJustify blueText">
                      Help your child ace their classes next school year with
                      our Summer Enrichment Program! You can choose to have the
                      tutor review your child on previous lessons or teach them
                      some lessons in advance.
                    </p>
                    <Box mt={4} />
                    <p className="leftJustify blueText">
                      <ul>
                        <li>✔️ Math</li>
                        <li>✔️ Science</li>
                        <li>✔️ English</li>
                        <li>✔️ Filipino</li>
                        <li>✔️ Chinese (only until Lower School)</li>
                      </ul>
                    </p>
                  </Container>
                </Box>
                <Box mt={8} />
                <a target="_blank" href="https://akadssummer.carrd.co/">
                  <Button variant="contained" color="primary">
                    Learn More
                  </Button>
                </a>
              </Grid>
              <Grid item md={6} xs={12}>
                <Box mt={4}>
                  {" "}
                  <h3 className="orangeText">EXTRACURRICULAR</h3>
                  <Box mt={4} />
                  <Grid alignItems="flex-start" container spacing={2}>
                    <Grid item xs={6}>
                      <h3 className="orangeText">Digital Art</h3>
                    </Grid>
                    <Grid className="leftJustify" item xs={6}>
                      <h4>Grades 4-10</h4>
                      <p className="blueText">
                        Learn design principles while practicing the basics of
                        Adobe Photoshop and Adobe Illustrator!
                      </p>
                    </Grid>
                  </Grid>
                  <Grid alignItems="flex-start" container spacing={2}>
                    <Grid item xs={6}>
                      <h3 className="orangeText">Basic Excel</h3>
                    </Grid>
                    <Grid className="leftJustify" item xs={6}>
                      <h4>Any Grade Level</h4>
                      <p className="blueText">
                        Learn all the basic fundamentals of Microsoft Excel and
                        more!
                      </p>
                    </Grid>
                  </Grid>
                  <Box mt={1} />
                  <Grid alignItems="flex-start" container spacing={2}>
                    <Grid item xs={6}>
                      <h3 className="orangeText">Others</h3>
                    </Grid>
                    <Grid className="leftJustify" item xs={6}>
                      <h4></h4>
                      <p className="blueText">
                        Click below to learn about our other classes!
                      </p>
                    </Grid>
                  </Grid>
                  <Box mt={8} />
                  <a target="_blank" href="https://extra.akadsph.org/">
                    <Button variant="contained" color="primary">
                      Learn More
                    </Button>
                  </a>
                </Box>
              </Grid>
            </Grid>
          </div>
        </Container>
        <Box mt={20} />
        <Divider />
      </div>
    );
  }
}

export default features;
