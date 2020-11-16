import React from 'react';
import Cards from 'react-credit-cards';
import {Container,
} from '@material-ui/core'
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
        <Cards
          cvc={this.state.cvc}
          expiry={this.state.expiry}
          focused={this.state.focus}
          name={this.state.name}
          number={this.state.number}
        />
        <Container>
          <form>
            <input
              type="tel"
              name="number"
              placeholder="Card Number"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
            <input
              type="tel"
              name="expiry"
              placeholder="Expiry Date"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
            <input
              type="tel"
              name="name"
              placeholder="Card Name"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
            <input
              type="tel"
              name="cvc"
              placeholder="CVC"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
          </form>
        </Container>
      </div>
    );
  }
}