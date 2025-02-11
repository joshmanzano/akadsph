import React, { Component } from "react";
import { Box, Container, Typography, makeStyles } from "@material-ui/core";
import Page from "src/components/Page";

export class NotFoundView extends Component {
  render() {
    return (
      <Page title="AKADS">
        <Box
          display="flex"
          flexDirection="column"
          height="100%"
          justifyContent="center"
        >
          <Container maxWidth="md">
            <h2 align="center">
              Hello! We are currently rebuilding Akads PH as of the moment, so the website
              will be under maintenance for a while. 
            </h2>
            <Box mb={4}>
              <h3 align="center">
                Kindly check again in the future! If you have any urgent concerns,
                kindly email{" "}
                <a href={"mailto:josh@akadsph.org"}>josh@akadsph.org</a>
              </h3>
            </Box>
            <Box textAlign="center">
              <img
                width="200"
                alt="Under development"
                src="/static/images/oli-construction.png"
              />
            </Box>
          </Container>
        </Box>
      </Page>
    );
  }
}

export default NotFoundView;
