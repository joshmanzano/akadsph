import React from 'react';
import {
  Box,
  Typography,
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
        <img width='300' src='../static/images/oli-confused.png'></img>
      </Box>
      <Typography variant='h2' align='center'>
        Your tutorial session is about to start!<br/>Join the call now.
      </Typography>

    </React.Fragment>
  );
};

export default UnderConstruction;
