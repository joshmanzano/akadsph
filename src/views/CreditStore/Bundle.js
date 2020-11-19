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
    width: "17vh",
    borderRadius: 15,
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    border: '2px solid #75c2b7',
    "&:hover": {
      backgroundColor: '#75c2b7',
      color: 'white !important',
    }
  },
  bundleButtonRev: {
    width: "17vh",
    borderRadius: 15,
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    border: '2px solid #75c2b7',
    backgroundColor: '#75c2b7',
    color: 'white',
 
  },
  textPriceSingle:{
    fontWeight: 'bold',
    marginTop: '25%',
    marginBottom: '42%',
    "&:hover": {
      color: 'white',
      fontColor: 'white',
    }
  },
  textPriceSingleRev:{
    fontWeight: 'bold',
    marginTop: '25%',
    marginBottom: '42%',
    color: 'white',
  },
  textPrice:{
    fontWeight: 'bold',
    marginTop: '25%',
    marginBottom: '25%',
    "&:hover": {
      color: 'white',
      fontColor: 'white',
    }
  },
  textPriceRev:{
    fontWeight: 'bold',
    marginTop: '25%',
    marginBottom: '25%',
    color: 'white',
  },
  textHours:{
    // position: 'absolute',
    color: '#75c2b7',
    "&:hover": {
      color: 'white',
    }
  },
  textHoursRev:{
    color: 'white',
  },
  textOldPrice:{
    color: '#D4D4D4',
    fontSize: '9px',
    "&:hover": {
      color: 'white',
    }
  },
  textOldPriceRev:{
    color: 'white',
    fontSize: '9px',
  },
  buttonContainer:{

    "&:hover": {
      color: 'white',
    }
  },
  buttonContainer: {
    "&:hover": {
        color: 'white !important',
      }
  },
}));

const Bundle = ({ className, setAmount, setItem, setHours, ...rest }) => {
  const classes = useStyles();
  const [bundleA, setBundleA] =  React.useState(false);
  const [bundleB, setBundleB] =  React.useState(false);
  const [bundleC, setBundleC] =  React.useState(false);

  function handleAmountChange(event){
    const items = {
      500: '1 hour',
      4750: '10 hours',
      7199: '15 hours'
    }
    const hours = {
      500: 1,
      4750: 10,
      7199: 15
    }
    const amount = Number(event.target.value)
    setAmount(amount)
    setItem(items[amount])
    setHours(hours[amount])
  }

  function bundleClick(type, amount, items, hours){
    if(type == 'bundleA'){
      setBundleA(true);
      setBundleB(false);
      setBundleC(false);

      setAmount(amount)
      setItem(items[amount])
      setHours(hours[amount])
    }else if(type == 'bundleB'){
      setBundleA(false);
      setBundleB(true);
      setBundleC(false);

      setAmount(amount)
      setItem(items[amount])
      setHours(hours[amount])
    }else if(type == 'bundleC'){
      setBundleA(false);
      setBundleB(false);
      setBundleC(true);

      setAmount(amount)
      setItem(items[amount])
      setHours(hours[amount])
    }
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
          
         
            <Box py={6}>
              {/* <Grid container alignItems="center"
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
                
              </Grid> */}
            
              <Grid container spacing={2} 
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
                  className={classes.buttonContainer}
                >
                  
                  <Button className={ !bundleA ? classes.bundleButton : classes.bundleButtonRev} onClick={()=>bundleClick('bundleA', '500', '1 hour', 1) }
                  // color="primary"
                  variant="outlined">
                    <Grid container className={classes.buttonContainer}>
                      <Grid item xs={12} align='left' className={classes.buttonContainer}> 
                        <Typography variant="caption" display="inline" className={ !bundleA ? classes.textHours : classes.textHoursRev} align='left'>
                          1 hour
                        </Typography>
                      </Grid>
                      <Grid item xs={12} align='center' className={classes.buttonContainer}>
                        <Typography variant="h4" display="block" className={ !bundleA ? classes.textPriceSingle : classes.textPriceSingleRev}>
                          ₱500
                        </Typography>
                      </Grid>
                      <Grid item xs={12} align='left'>
                        
                      </Grid>
                    </Grid>
            
                  </Button>
                </Grid>
                <Grid
                  item
                  lg={4}
                  md={4}
                  xl={4}
                  xs={12}
                >
                  
                  <Button className={ !bundleB ? classes.bundleButton : classes.bundleButtonRev}  onClick={()=>bundleClick('bundleB', '4750', '10 hours', 10)}
                  // color="primary"
                  variant="outlined">
                    <Grid container>
                      <Grid item xs={12} align='left' className={classes.buttonContainer}>
                        <Typography variant="caption" display="inline" className={ !bundleB ? classes.textHours : classes.textHoursRev} align='left'>
                          10 Hours
                        </Typography>
                      </Grid>
                      <Grid item xs={12} align='center'>
                        <Typography variant="h4" display="block" className={ !bundleB ? classes.textPrice : classes.textPriceRev}>
                          ₱4,750
                        </Typography>
                      </Grid>
                      <Grid item xs={12} align='right'>
                        <Typography variant="caption" display="inline" className={ !bundleB ? classes.textOldPrice : classes.textOldPriceRev} align='left'>
                          From ₱5,490
                        </Typography>
                      </Grid>
                    </Grid>
                  </Button>
                </Grid>
                <Grid
                  item
                  lg={4}
                  md={4}
                  xl={4}
                  xs={12}
                >
                  {/* <FormControlLabel value="20 hours P9,000" control={<Radio color="primary" />} label="20 hours P9,000" /> */}
                  <Button className={ !bundleC ? classes.bundleButton : classes.bundleButtonRev}  onClick={()=>bundleClick('bundleC', '7199', '15 hours', 15)}
                  // color="primary"
                  variant="outlined">
                    <Grid container>
                      <Grid item xs={12} align='left'>
                        <Typography variant="caption" display="inline" className={ !bundleC ? classes.textHours : classes.textHoursRev} align='left'>
                          15 Hours
                        </Typography>
                      </Grid>
                      <Grid item xs={12} align='center'>
                        <Typography variant="h4" display="block" className={ !bundleC ? classes.textPrice : classes.textPriceRev}>
                          ₱7,199
                        </Typography>
                      </Grid>
                      <Grid item xs={12} align='right'>
                        <Typography variant="caption" display="inline" className={ !bundleC ? classes.textOldPrice : classes.textOldPriceRev} align='left'>
                          From ₱8,235
                        </Typography>
                      </Grid>
                    </Grid>
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
  className: PropTypes.string
};

export default Bundle;
