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
import LandingView from 'src/LandingPage';
import Login from 'src/components/login';
import SignUp from 'src/components/signup.jsx';
import axios from 'axios';
import TutorApp from 'src/views/TutorApp';
import {api, get_user, verify_token, check_admin_token, get_api, post_api} from './Api';
import CreditStore from 'src/views/CreditStore';
import PayoutHistory from 'src/views/PayoutHistory';

class App extends Component {

  constructor(props){
      super(props);
      this.state = {
        session: localStorage.getItem('session_token'),
      };
      console.log(props)
  }

  componentDidMount(){
    check_admin_token();
    if(this.state.session != null){
      verify_token((res) => {
        if(res['verified']){
          this.setState({id:res['id'], type: res['type']})
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

  login_tutor = (accessToken, idToken) => {
    const data = {
      'id_token':idToken
    }
    post_api('login-tutor', data, (res) =>{
      if(res['exists']){
        localStorage.setItem('session_token',res['session_token'])
        window.location.replace('/')
      }else{
        this.props.history.replace('/')
      }
    })
  }

  register = (raw_data) => {
    const data = {
      username: raw_data['googleId'],
      first_name: raw_data['givenName'],
      last_name: raw_data['familyName'],
      email: raw_data['email'],
      phone: raw_data['phone'],
      picture: raw_data['picture'],
      child: raw_data['child'],
    }
    console.log(data)
    post_api('register-parent', data, (res) => {
      console.log(res)
      localStorage.setItem('session_token',res)
      window.location.replace('/')
    })
  }

  addCredit = (credits) => {
    console.log('adding credits')
    console.log(credits)
    this.setState({
      credits: this.state.credits + credits
    })
  }

  getParentData = (_callback) => {

    get_user((res) => {
      const id = res['id']
      const data = {
        'parent_id': id
      }
      post_api('all-parent-details', data, (res) => {
        const parent = res['parent']
        const children = res['children'] 
        this.setState({
          credits: parent['credits']

        }, () => {
          const data = {
            'accountview': {
              'picture': parent['picture'],
              'first_name': parent['first_name'],
              'last_name': parent['last_name'],
              'email': parent['email'],
              'phone': '',
              'children': children,
              'favtutors': [],
            },
            'dashboardview': {
              'upcoming':[
                  {
                  date: 'November 19',
                  time: '4 PM',
                  subject: 'Filipino',
                  tutor: {
                    name: 'Adrienne Soliven'
                  },
                },
                {
                  date: 'November 20',
                  time: '4 PM',
                  subject: 'Math',
                  tutor: {
                    name: 'Adrienne Soliven'
                  },
                },
                {
                  date: 'November 23',
                  time: '4 PM',
                  subject: 'Science',
                  tutor: {
                    name: 'Adrienne Soliven'
                  },
                },
            ],
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
          _callback(data)
        })
      })
    })

  }

  render(){
    return (
      <Router>
        {this.state.session == null &&
        // Not Logged In
        <Switch> 
          <Route exact path='/' component={LandingView} /> 
          <Route exact path='/login'> 
            <Login login={this.login} login_tutor={this.login_tutor} />
          </Route>
          <Route exact path='/register'> 
            <SignUp {...this.state.registerProps} register={this.register} />
          </Route>
          <Route exact path='/tutor-form'> 
            <TutorApp/>
          </Route>
          <Route exact path='/payout-history'> 
            <PayoutHistory/>
          </Route>
          <Route path='*' component={NotFoundView} /> 
        </Switch>
        }
        {this.state.type == 'parent' &&
        // Parent Logged In
        <Switch>
          <Route path='/'> 
            <DashboardLayout credits={this.state.credits} addCredit={this.addCredit} getUserData={this.getParentData}/>
          </Route>
          <Route path='*' component={NotFoundView} /> 
        </Switch>
        }
        {this.state.type == 'tutor' &&
        // Tutor Logged In
        <Switch>
          <Route path='/'> 
            <DashboardLayout credits={this.state.credits} addCredit={this.addCredit} getUserData={this.getParentData}/>
          </Route>
          <Route path='*' component={NotFoundView} /> 
        </Switch>
        }
        {this.state.type == 'admin' &&
        // Admin Logged In
        <Switch>
          <Route path='*' component={NotFoundView} /> 
        </Switch>
        }
      </Router>
    );
  }

}

export default withRouter(App);