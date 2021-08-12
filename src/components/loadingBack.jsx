import React, { Component } from "react";
import {
  Container,
  Box,
  CircularProgress,
  Backdrop,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

function Loading(props) {
  const classes = useStyles();

  return (
    <Backdrop className={classes.backdrop} open={props.processing}>
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <Container maxWidth="md">
          <Box mb={4} textAlign="center">
            <img width="400" alt="Loading..." src="/img/backdrop-logo.png" />
          </Box>
          <Box textAlign="center">
            <CircularProgress color="inherit" />
          </Box>
          {/* <h2 align="center">
              Loading...
            </h2> */}
        </Container>
      </Box>
    </Backdrop>
  );
}

export default Loading;
