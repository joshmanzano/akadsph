import React from 'react';
import {
  Box,
  Typography,
  makeStyles,
} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    
  },
  
}));




function UnderConstruction(props){
  const classes = useStyles();
  
  return (
    <React.Fragment>
      <Box align='center' mb={2}>
        <img width='200' src='../static/images/oli-confused.png'></img>
      </Box>
      <Typography variant='h2' align='center'>
        Currently Under Construction
      </Typography>

    </React.Fragment>
  );
};

export default UnderConstruction;
