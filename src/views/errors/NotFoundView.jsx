import React, { Component } from "react";
import { Box, Container, Typography, makeStyles } from "@material-ui/core";
import Page from "src/components/Page";

export class NotFoundView extends Component {
  render() {
    return (
      <Page title="404">
        <Box
          display="flex"
          flexDirection="column"
          height="100%"
          justifyContent="center"
        >
          <Container maxWidth="md">
            <h2 align="center">404: The page you are looking for isn’t here</h2>
            <Box mb={4}>
              <h3 align="center">
                You either tried some shady route or you came here by mistake.
                Whichever it is, try using the navigation
              </h3>
            </Box>
            <Box textAlign="center">
              <img
                width="400"
                alt="Under development"
                src="/static/images/oli-confused.png"
              />
            </Box>
          </Container>
        </Box>
      </Page>
    );
  }
}

export default NotFoundView;
