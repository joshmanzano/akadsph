import React from 'react';
import Cards from 'react-credit-cards';

import 'react-credit-cards/es/styles-compiled.css';
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
  Hidden
} from '@material-ui/core';
import 'react-credit-cards/es/styles-compiled.css';

export default class PaymentForm extends React.Component {
  state = {
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  };

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  }
  
  handleInputChange = (e) => {
    const { name, value } = e.target;
    
    this.setState({ [name]: value });

    this.props.setCardState(this.state);
  }
  
  render() {
    return (
      <div id="PaymentForm">
        <Hidden xsDown>
          <Cards
            cvc={this.state.cvc}
            expiry={this.state.expiry}
            focused={this.state.focus}
            name={this.state.name}
            number={this.state.number}
          />
        </Hidden>
        <br/>
        <Container>
        
          <form>
          <Grid container spacing={2}>
              <Grid item xs={12}>
              <TextField variant="outlined" fullWidth
                type="tel"
                name="number"
                placeholder="Card Number"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
              </Grid>
              <Grid item xs={12}>
              <TextField variant="outlined" fullWidth
                type="tel"
                name="name"
                placeholder="Card Holder's Name"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
              </Grid>
              <Grid item xs={6}>
              <TextField variant="outlined" fullWidth
                type="tel"
                name="expiry"
                placeholder="Expiry Date"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
              </Grid>
              
              <Grid item xs={6}>
              <TextField variant="outlined" fullWidth
                type="tel"
                name="cvc"
                placeholder="CVC"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
              </Grid>
            
            
            
            </Grid>
          </form>
          
        </Container>
      </div>
    );
  }
}