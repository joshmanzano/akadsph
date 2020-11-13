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
import {get_api, post_api} from './Api'

class App extends Component {

  constructor(props){
      super(props);
      this.state = {
        session: localStorage.getItem('session'),
      };
      console.log(props)
  }

  componentDidMount(){
  }

  login = (accessToken, idToken) => {
    const data = {
      'id_token':idToken
    }
    post_api('login-parent', data, (res) =>{
      if(res['exists']){
        console.log(res)

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
      password: 'hello',
      name: raw_data['firstName'],
      email: raw_data['email'],
    }
    post_api('parents', data, (res) => {
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
          <Route path='*' render={this.NotFoundView} /> 
        </Switch>
        }
        {this.state.session == 'parent' &&
        // Parent Logged In
        <Switch>
          <Route path='/'> 
            <DashboardLayout/>
          </Route>
        </Switch>
        }
        {this.state.session == 'tutor' &&
        // Tutor Logged In
        <Switch>
          <Route path='*' render={this.NotFoundView} /> 
        </Switch>
        }
        {this.state.session == 'admin' &&
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