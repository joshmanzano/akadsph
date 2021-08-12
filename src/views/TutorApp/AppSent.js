import React, { useState } from "react";
import { Box, Container, makeStyles, Button, Paper } from "@material-ui/core";
import Page from "src/components/Page";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}));

const AppSent = (props) => {
  let classes = useStyles();

  return (
    <Page
      className={classes.root}
      // title="Find Tutor"
    >
      <Container maxWidth={false} align="center">
        <Paper style={{ width: "50%" }}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            mt={8}
            p={5}
          >
            <Container maxWidth="md">
              <Box mb={4} textAlign="center">
                <img
                  width="300"
                  alt="Under development"
                  src="/static/images/oli-idea.png"
                />
              </Box>
              <h3 align="center">
                Thank you for applying! We'll review your documents and let you
                know the following steps through email.
              </h3>
              <Box mt={2} textAlign="center">
                <Button
                  size="large"
                  variant="contained"
                  color="primary"
                  href="/"
                >
                  Go back to home page
                </Button>
              </Box>
            </Container>
          </Box>
        </Paper>
      </Container>
    </Page>
  );
};

export default AppSent;
