import React from "react";
import {
  Box,
  Container,
  makeStyles,
  Grid,
  Typography,
} from "@material-ui/core";
import Page from "src/components/Page";
import Notifications from "./Notifications";
import Password from "./Password";
import SavedPayMethod from "./SavedPayMethod";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}));

const SettingsView = () => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Settings">
      <Container maxWidth="lg">
        <Grid item lg={12} md={12} xl={12} xs={12}>
          <Grid container spacing={3}>
            <Grid item lg={1} md={1} xl={1} xs={12}>
              <img width="100" src="../static/images/oli-smirk.png"></img>
            </Grid>
            <Grid item lg={11} md={11} xl={11} xs={12}>
              <Box ml={2} mt={3}>
                <Grid container spacing={0} direction="column">
                  <Grid item>
                    <Box flexGrow={1} />
                  </Grid>
                  <Grid item>
                    <Typography variant="h1" align="left">
                      Settings
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Box mt={2}>
          <Notifications />
        </Box>
        {/* Assume that google will handle passwords and also we won't be saving the payments */}
        {/* <Box mt={3}>
          <Password />
        </Box>
        <Box mt={3}>
          <SavedPayMethod />
        </Box> */}
      </Container>
    </Page>
  );
};

export default SettingsView;
