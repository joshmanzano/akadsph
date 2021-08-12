import React, { Component } from "react";
import { Container, Box, CircularProgress } from "@material-ui/core";

class Loading extends Component {
  render() {
    return (
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <Container maxWidth="md">
          <Box mb={4} textAlign="center">
            <img width="400" alt="Under development" src="/img/loginIcon.png" />
          </Box>
          {/* <h2 align="center">
              Loading...
            </h2> */}
        </Container>
      </Box>
    );
  }
}

export default Loading;
