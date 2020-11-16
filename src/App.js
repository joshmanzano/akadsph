import React, { Component, Fragment } from 'react';
import { HashRouter as Router, Route, Switch, Redirect, withRouter } from 'react-router-dom';
import DashboardLayout from 'src/layouts/DashboardLayout';
import MainLayout from 'src/layouts/MainLayout';
import AccountView from 'src/views/account/AccountView';
import FindTutorView from 'src/views/customer/FindTutorView';
import DashboardView from 'src/views/reports/DashboardView';
import PlaygroundView from 'src/views/test/PlaygroundView';
import AuthView from 'src/views/test/AuthView';
import NotFoundView from 'src/views/errors/NotFoundView.jsx';
import ProductListView from 'src/views/product/ProductListView';
import SettingsView from 'src/views/settings/SettingsView';
import TutorDashboardView from 'src/views/TutorDashboardView';
import LandingPage from 'src/LandingPage';
import Login from 'src/components/login';
import SignUp from 'src/components/signup.jsx';
import axios from 'axios';
import TutorApp from 'src/views/TutorApp';
import {api, get_user, verify_token, get_api, post_api} from './Api';
import CreditStore from 'src/views/CreditStore';

class App extends Component {

  constructor(props){
      super(props);
      this.state = {
        session: localStorage.getItem('session_token'),
      };
      console.log(props)
  }

  componentDidMount(){
    if(this.state.session != null){
      verify_token((res) => {
        if(res['verified']){
          this.setState({type: res['type']})
        }else{
          localStorage.clear()
          window.location.replace('/')
        }
      })
    }
  }

  login = (accessToken, idToken) => {
    const data = {
      'id_token':idToken
    }
    post_api('login-parent', data, (res) =>{
      if(res['exists']){
        localStorage.setItem('session_token',res['session_token'])
        window.location.replace('/')
      }else{
        const registerProps = {
          'familyName': res['family_name'],
          'givenName': res['given_name'],
          'email': res['email'],
          'googleId': res['sub'],
          'picture': res['picture'],
        }
        this.setState({
          registerProps
        }, () => {
          this.props.history.replace('/register')
        })
      }
    })
  }

  register = (raw_data) => {
    const data = {
      username: raw_data['googleId'],
      first_name: raw_data['firstName'],
      last_name: raw_data['lastName'],
      email: raw_data['email'],
      phone: raw_data['phone'],
    }
    post_api('register-parent', data, (res) => {
      console.log(res)
      localStorage.setItem('session_token',res)
      window.location.replace('/')
    })
  }

  getParentData = () => {

    get_user((res) => {
      console.log(res)
    })

    const data = {
      'accountview': {
        'picture': 'https://lh4.googleusercontent.com/-mxVpz__Ts-M/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuckmHZi5Zpu2DZtViCFKRTK55uLgRQ/s96-c-rg-br100/photo.jpg',
        'first_name': 'Joshua',
        'last_name': 'Manzano',
        'email': 'Manzano',
        'phone': '+639178949025',
        'children': [],
        'favtutors': [],
      },
      'dashboardview': {
        'upcoming':[],
        'pending': [],
        'history': [],
        'transaction': []
      },
      'findtutorview': {
        'tutees':[],
        'favtutors':[],
        'levels':[],
        'subjects':[],
        'lengths':[],
      },
      'settingsview': {
        'selected':[],
      },
      'chatview': {
        'chatlist':[],
      },
    }
    return data;
  }

  create_paymentintent = (amount) => {

  }

  create_paymentmethod = (card_number, exp_month, exp_year, cvc) => {
    const url = "https://api.paymongo.com/v1/payment_methods"

    const payload = {"data": {"attributes": {
      "details": {
          "card_number": card_number,
          "exp_month": exp_month,
          "exp_year": exp_year,
          "cvc": cvc
      },
      "type": "card"
    }}}

    axios.post(url, payload)
    .then(res => {
      console.log(res)
    })

  }

  LandingView = () => {
    return (
      <LandingPage/>
    )
  }

  NotFoundView = () => {
    return (
      <NotFoundView/>
    )
  }

  DashboardLayout = (page) => {
    const child = <DashboardView/>
    return (
      <DashboardLayout children={child}/>
    )
  }

  render(){
    return (
      <Router>
        {this.state.session == null &&
        // Not Logged In
        <Switch> 
          <Route exact path='/' render={this.LandingView} /> 
          <Route exact path='/login'> 
            <Login login={this.login} />
          </Route>
          <Route exact path='/register'> 
            <SignUp {...this.state.registerProps} register={this.register} />
          </Route>
          <Route exact path='/tutor-form'> 
            <TutorApp/>
          </Route>
          <Route exact path='/credit-store'> 
            <CreditStore/>
          </Route>
          <Route path='*' render={this.NotFoundView} /> 
        </Switch>
        }
        {this.state.type == 'parent' &&
        // Parent Logged In
        <Switch>
          <Route path='/'> 
            <DashboardLayout getUserData={this.getParentData}/>
          </Route>
        </Switch>
        }
        {this.state.type == 'tutor' &&
        // Tutor Logged In
        <Switch>
          <Route path='*' render={this.NotFoundView} /> 
        </Switch>
        }
        {this.state.type == 'admin' &&
        // Admin Logged In
        <Switch>
          <Route path='*' render={this.NotFoundView} /> 
        </Switch>
        }
      </Router>
    );
  }

}

export default withRouter(App);