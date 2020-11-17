import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
  makeStyles,
  Typography,
  Grid,
  Container,
  CardHeader,
  Divider,
} from '@material-ui/core';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


const useStyles = makeStyles((theme) => ({
  root: {},
  importButton: {
    // marginRight: theme.spacing(1)
  },
  exportButton: {
    // marginRight: theme.spacing(1)
  },
  bundleButton: {
    minWidth: "25vh",
    paddingTop: "5%",
    paddingBottom: "5%",
    // border: "3px solid #4655A5",
    // backgroundColor: "white",
    // color: theme.color,
    // borderRadius: "10px",
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  },
}));

const Bundle = ({ className, setAmount, setItem, ...rest }) => {
  const classes = useStyles();

  function handleAmountChange(event){
    const items = {
      500: '1 hour',
      4750: '10 hours',
      9000: '20 hours'
    }
    const amount = Number(event.target.value)
    setAmount(amount)
    setItem(items[amount])
  }

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      {/* <Typography variant="h4" align='center'>
            Choose a Bundle
      </Typography> */}
      <Box /*mt={3}*/>
        <Card style={{justifyContent: 'center', placeItems: 'center'}}>
          <CardHeader
            // subheader="Bundles that are for more than 1 hour are consummable for anytime"
            title="Choose a Bundle"
          />
          <Divider />
          <CardContent>
          
         
            <Box>
              <Grid container alignItems="center"
                  justify="center">
               
                <Grid
                  item
                  lg={12}
                  md={12}
                  xl={12}
                  xs={12}
                  alignItems="center"
                  justify="center"
                  style={{textAlign: 'center'}}
                >
                  <FormControl component="fieldset" >
                    <RadioGroup onChange={handleAmountChange} name="tutor-sex">
                      <FormControlLabel value="500" control={<Radio color="primary" />} label="1 hour for P500" />
                      <FormControlLabel value="4750" control={<Radio color="primary" />} label="10 hours for P4,750" />
                      <FormControlLabel value="9000" control={<Radio color="primary" />} label="20 hours for P9,000" />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                
              </Grid>
            
              {/* <Grid container spacing={2} 
                alignItems="center"
                justify="center"
                style={{placeItems: 'center', textAlign: 'center'}}>
                <Grid
                  item
                  lg={4}
                  md={4}
                  xl={4}
                  xs={12}
                  alignItems="center"
                  justify="center"
                  style={{placeItems: 'center'}}
                >
                  
                  <Button className={classes.bundleButton}  
                  color="primary"
                  variant="contained">
                  1 hour <br /> P500
                  </Button>
                </Grid>
                <Grid
                  item
                  lg={4}
                  md={4}
                  xl={4}
                  xs={12}
                >
                  
                  <Button className={classes.bundleButton}  
                  color="primary"
                  variant="contained">
                  10 hours <br /> P4,750
                  </Button>
                </Grid>
                <Grid
                  item
                  lg={4}
                  md={4}
                  xl={4}
                  xs={12}
                >
                  <FormControlLabel value="20 hours P9,000" control={<Radio color="primary" />} label="20 hours P9,000" />
                  <Button className={classes.bundleButton}  
                  color="primary"
                  variant="contained">
                  20 hours <br /> P9,000
                  </Button>
                </Grid>
              </Grid> */}
            </Box>
           
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

Bundle.propTypes = {
  className: PropTypes.string
};

export default Bundle;
