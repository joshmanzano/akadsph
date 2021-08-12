import React, { useState } from "react";
import { Box, Container, makeStyles, Button } from "@material-ui/core";
import Page from "src/components/Page";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}));

const CustomerListView = (props) => {
  let classes = useStyles();

  return (
    <Page className={classes.root} title="Messages">
      <Container maxWidth={false}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          mt={8}
        >
          <Container maxWidth="md">
            <Box mb={4} textAlign="center">
              <img
                width="200vh"
                alt="Under development"
                src="/static/images/oli-construction.png"
              />
            </Box>
            <h2 align="center">
              The Buy Hours page is under maintenance. If you would like to buy
              hours, kindly answer the form below to buy a bundle or contact the
              support email.
            </h2>
            <h2 align="center">
              <a target="_blank" href="https://forms.gle/ZMh9gAJLLEWUmtpn6">
                https://forms.gle/ZMh9gAJLLEWUmtpn6
              </a>
            </h2>
            <h2 align="center">
              <a target="_blank" href="mailto:support@akadsph.com">
                support@akadsph.com
              </a>
            </h2>
          </Container>
        </Box>
      </Container>
    </Page>
  );
};

export default CustomerListView;
