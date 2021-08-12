import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import {
  Box,
  Button,
  Card,
  CardContent,
  makeStyles,
  Grid,
  CardHeader,
  Divider,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {},
  importButton: {
    // marginRight: theme.spacing(1)
  },
  exportButton: {
    // marginRight: theme.spacing(1)
  },
  bundleButton: {
    minWidth: "30vh",
    paddingTop: "7%",
    paddingBottom: "7%",
    // border: "3px solid #4655A5",
    // backgroundColor: "white",
    // color: theme.color,
    // borderRadius: "10px",
    boxShadow:
      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  },
}));

const Bundle = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      {/* <Typography variant="h4" align='center'>
            Choose a Bundle
      </Typography> */}
      <Box /*mt={3}*/>
        <Card style={{ justifyContent: "center", placeItems: "center" }}>
          <CardHeader
            subheader="Bundles that are for more than 1 hour are consummable for anytime"
            title="Choose a Bundle"
          />
          <Divider />
          <CardContent>
            <Box>
              <Grid
                container
                spacing={2}
                alignItems="center"
                justify="center"
                style={{ placeItems: "center" }}
              >
                <Grid
                  item
                  lg={4}
                  md={4}
                  xl={4}
                  xs={12}
                  alignItems="center"
                  justify="center"
                  style={{ placeItems: "center" }}
                >
                  <Button
                    className={classes.bundleButton}
                    color="primary"
                    variant="contained"
                  >
                    P550/hour
                  </Button>
                </Grid>
                <Grid item lg={4} md={4} xl={4} xs={12}>
                  <Button
                    className={classes.bundleButton}
                    color="primary"
                    variant="contained"
                  >
                    P500/hour for 10 hours
                  </Button>
                </Grid>
                <Grid item lg={4} md={4} xl={4} xs={12}>
                  <Button
                    className={classes.bundleButton}
                    color="primary"
                    variant="contained"
                  >
                    P450/hour for 20 hours
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

Bundle.propTypes = {
  className: PropTypes.string,
};

export default Bundle;
