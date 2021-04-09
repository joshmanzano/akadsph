import React from 'react';
import Cards from 'react-credit-cards';

import 'react-credit-cards/es/styles-compiled.css';
import {
  TextField,
  Grid,
  Container,
  Hidden,
  Box,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel
} from '@material-ui/core';
import 'react-credit-cards/es/styles-compiled.css';

export default function PaymentForm(props){
  const [value, setValue] = React.useState('gcash');
  props.setMethod(value)

  const handleChange = (event) => {
    setValue(event.target.value);
    props.setMethod(value)
  };

  return (
    <div id="PaymentForm">
      <Container>

        <Box align="center" mt={4}>

        <FormControl component="fieldset">
          <RadioGroup name="method" value={value} onChange={handleChange}>
            <FormControlLabel value="gcash" control={<Radio />} label={<img src={'img/gcash.png'}/>} />
          </RadioGroup>
        </FormControl>

        {/* <Grid container spacing={2}>
            <Grid item xs={12}>


            </Grid>
          </Grid> */}

        </Box>
        
      </Container>
    </div>
  );
}