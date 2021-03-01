import React , {useEffect} from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  makeStyles,
  Typography,
  Grid,
  Box,
} from '@material-ui/core';
import TableDetails from './TableDetails';

const Availability = ({ className, data, setData, ...rest }) => {
  return (
    <React.Fragment>
      {/* <Box mt={3} mb={6} mx={3}> */}
        <iframe allow="camera; microphone; fullscreen; display-capture" src="https://meet.akadsph.com/InadequateBudgetsBringReadily" style="height: 100%; width: 100%; border: 0px;"></iframe>
      {/* </Box> */}
    </React.Fragment>
  );
};

Availability.propTypes = {
  className: PropTypes.string
};

export default Availability;
