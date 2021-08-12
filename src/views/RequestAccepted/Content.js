import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Button, makeStyles, Typography, Grid, Box } from "@material-ui/core";
import RequestDetails from "./RequestDetails";

const useStyles = makeStyles((theme) => ({
  root: {},
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

const Availability = ({ className, data, setData, ...rest }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Box mt={3} mb={6} mx={3}>
        <Grid container spacing={3}>
          <Grid item lg={12} md={12} xl={12} xs={12} align="center">
            <Typography variant="h2" align="center">
              Request Successfully Accepted!
            </Typography>
          </Grid>
          <Grid item lg={12} md={12} xl={12} xs={12} align="center">
            <img width="100" src="../static/images/oli-wink.png" />
          </Grid>
          <Grid item lg={12} md={12} xl={12} xs={12} align="center">
            <Typography variant="h6" align="center">
              You can now message your tutee's parent if you need clarifications
              regarding the study materials.
            </Typography>
            <Typography variant="h6" align="center">
              The details of of the request can also be found in the overview.
            </Typography>
          </Grid>
          <Grid item lg={12} md={12} xl={12} xs={12} align="center">
            {/* <RequestDetails/> */}
          </Grid>
          <Grid item lg={3} md={3} xl={3} xs={0} align="center"></Grid>
          <Grid item lg={3} md={3} xl={3} xs={12} align="center">
            <Button
              size="large"
              variant="contained"
              color="primary"
              href="/viewrequest"
            >
              Accept More Requests
            </Button>
          </Grid>
          <Grid item lg={3} md={3} xl={3} xs={12} align="center">
            <Button size="large" variant="contained" color="primary" href="/">
              Go to overview
            </Button>
          </Grid>
          <Grid item lg={3} md={3} xl={3} xs={0} align="center"></Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
};

Availability.propTypes = {
  className: PropTypes.string,
};

export default Availability;
