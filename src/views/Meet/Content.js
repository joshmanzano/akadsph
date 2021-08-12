import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Button, makeStyles, Typography, Grid, Box } from "@material-ui/core";
import TableDetails from "./TableDetails";
import ScriptTag from "react-script-tag";
import Jitsi from "react-jitsi";

const roomName = "ethucohasuchecco735373";
const userFullName = "Chase";

const App = () => (
  <>
    {/* <Box mt={3} mb={6} mx={3}> */}
    {/* <ScriptTag src="jitsi.js"></ScriptTag> */}
    {/* <div id="jaas-container" /> */}
    <h1>Meet</h1>
    <Jitsi />
    {/* </Box> */}
  </>
);

export default App;
