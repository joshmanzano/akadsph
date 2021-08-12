import React, { useState, useEffect } from "react";
import { Box, Container, makeStyles, Card } from "@material-ui/core";
import { BrowserRouter as withRouter } from "react-router-dom";
import Page from "src/components/Page";
import { get_user, post_api } from "src/Api";
import LoadingBack from "src/components/loadingBack";
import MuiAlert from "@material-ui/lab/Alert";
import Content from "./Content";
import ScriptTag from "react-script-tag";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
  cardStyle: {
    maxWidth: 1200,
  },
}));

const RequestSent = (props) => {
  const classes = useStyles();
  const queryParams = new URLSearchParams(window.location.search);
  const amount = queryParams.get("amount");
  if (amount == null) {
    window.location.replace("/");
  }

  return (
    <Page className={classes.root} title="Request Sent">
      {process.env.REACT_APP_ENV == "PRODUCTION" && (
        <ScriptTag src="purchase.js" />
      )}
      <Container maxWidth={false}>
        <Box mx={1} align="center">
          <Card className={classes.cardStyle}>
            <Content /*data={data}*/ />
          </Card>
        </Box>
      </Container>
    </Page>
  );
};

export default RequestSent;
