import React from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

function UnderConstruction({ payMethod, ...rest }) {
  const classes = useStyles();
  const msg = "Paying through " + payMethod + " coming real soon!";
  return (
    <React.Fragment>
      <Box align="center" mb={2}>
        <img width="200" src="../static/images/oli-construction.png"></img>
      </Box>
      <Typography variant="h3" align="center">
        {msg}
      </Typography>
    </React.Fragment>
  );
}

export default UnderConstruction;
