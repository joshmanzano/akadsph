import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, withRouter } from 'react-router-dom';
import DashboardLayout from 'src/layouts/DashboardLayout';
import AdminDashboardLayout from 'src/layouts/AdminDashboardLayout';
import TutorDashboardLayout from 'src/layouts/TutorDashboardLayout';
import MainLayout from 'src/layouts/MainLayout';
import AccountView from 'src/views/account/AccountView';
import FindTutorView from 'src/views/customer/FindTutorView';
import DashboardView from 'src/views/DashboardView/DashboardView';
import PlaygroundView from 'src/views/test/PlaygroundView';
import AuthView from 'src/views/test/AuthView';
import NotFoundView from 'src/views/errors/NotFoundView.jsx';
import NotOnline from 'src/views/errors/NotOnline.jsx';
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
import ReactPolling from 'react-polling';
import moment from 'moment';
import toast, {Toaster} from 'react-hot-toast';
import NoParentAccount from 'src/components/NoParentAccount';
import NoTutorAccount from 'src/components/NoTutorAccount'
import withClearCache from './ClearCache'


import 'src/Calendar.css'

class App extends Component {

  constructor(props){
      super(props);
      this.state = {
        session: localStorage.getItem('session_token'),
        offline: false,
      };
  }

  componentDidMount(){

    this.checkBackend((res) => {
      this.setState({offline: !res})
    })
  }

  checkBackend = (_callback) => {
    check_admin_token(res => {
      if(res){
        if(this.state.session != null){
          verify_token((res) => {
            if(res['verified']){
              this.setState({id:res['id'], type: res['type']})
              _callback(true)
            }else{
                      localStorage.removeItem('token')
        localStorage.removeItem('session_token')
              window.location.replace('/')
            }
          })
        }
        _callback(true)
      }else{
        _callback(false)
      }
    });
  }

  login = (accessToken, idToken) => {
    const data = {
      'id_token':idToken
    }
    post_api('login-parent', data, (res) =>{
      console.log(res)
      if(res['exists']){
        localStorage.setItem('session_token',res['session_token'])
        window.location.replace('/')
      }else{
        // IF NO ACCOUNT PARENT
        window.location.replace('/NoParentAccount')
        // const registerProps = {
        //   'familyName': res['family_name'],
        //   'givenName': res['given_name'],
        //   'email': res['email'],
        //   'googleId': res['sub'],
        //   'picture': res['picture'],
        // }
        // this.setState({
        //   registerProps
        // }, () => {
        //   this.props.history.replace('/register')
        // })
      }
    })
  }

  login_tutor = (accessToken, idToken) => {
    const data = {
      'id_token':idToken
    }
    post_api('login-tutor', data, (res) =>{
      console.log(res);
      if(res['exists']){
        localStorage.setItem('session_token',res['session_token'])
        window.location.replace('/')
      }else{
        // IF NO ACCOUNT TUTOR
        window.location.replace('/NoTutorAccount/')
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

  seenParentNotif = (_callback) => {
    get_user((res) => {
      const id = res['id']
      const data = {
        'parent_id': id
      }
      post_api('seen-all-parent-notifications', data, (res) => {
        _callback(res)
      })
    })
  }

  seenTutorNotif = (_callback) => {
    get_user((res) => {
      const id = res['id']
      const data = {
        'tutor_id': id
      }
      post_api('seen-all-tutor-notifications', data, (res) => {
        _callback(res)
      })
    })
  }

  getParentData = (_callback) => {

    get_user((res) => {
      const id = res['id']
      const data = {
        'parent_id': id
      }

      post_api('parent-recent-notifications', data, (res) => {
        console.log(res)
        const notifications = []
        let seen = true 
        res.forEach(notif => {
          if(!notif.is_seen){
            seen = false
          }
          notifications.push({
            id: notif.id,
            image:'../static/images/oli-happy.png',
            message: notif.notification, 
            detailPage: '/',
            receivedTime: moment(notif.time).fromNow(),
            seen: notif.is_seen,
          })
        })

        post_api('all-parent-details', data, (res) => {
          console.log(res)
          const parent = res['parent']
          const children = res['children'] 
          const subjects = res['subjects']
          const settings = res['settings']
          const pending = res['pending_requests']
          const transaction = res['transactions']
          const upcoming = res['accepted_requests']
          const history = res['finished_requests']
          const favourite_tutors = res['favourite_tutors']
          this.setState({
            credits: parent['credits']
          }, () => {
            const data = {
              'notifications': notifications,
              'seen': seen,
              'accountview': {
                'picture': parent['picture'],
                'first_name': parent['first_name'],
                'last_name': parent['last_name'],
                'email': parent['email'],
                'phone': parent['phone']/*''*/,
                'children': children,
                'favtutors': favourite_tutors,
              },
              'dashboardview': {
                'upcoming': upcoming,
                'pending': pending,
                'history': history,
                'transaction': transaction,
                'tutees':children,
              },
              'findtutorview': {
                'tutees':children,
                'files': parent['files'],
                'favtutors':favourite_tutors,
                'levels':[],
                'subjects':subjects,
                'lengths':[
                  {
                    value: 1,
                    name: '1 hour'
                  },
                  {
                    value: 2,
                    name: '2 hours'
                  },
                  {
                    value: 3,
                    name: '3 hours'
                  },
                ],
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

    })

  }

  getTutorData = (_callback) => {

    get_user((res) => {
      const id = res['id']
      const data = {
        'tutor_id': id
      }
      post_api('tutor-recent-notifications', data, (res) => {
        console.log(res)
        const notifications = []
        let seen = true 
        res['notifications'].forEach(notif => {
          if(!notif.is_seen){
            seen = false
          }
          notifications.push({
            id: notif.id,
            image:'../static/images/oli-happy.png',
            message: notif.notification, 
            detailPage: '/',
            receivedTime: moment(notif.time).fromNow(),
            seen: notif.is_seen,
          })
        })


      post_api('all-tutor-details', data, (res) => {
        console.log(res)
        const tutor = res['tutor']
        const subjects = res['subjects']
        const norm_requests = res['pending_requests']
        const settings = res['settings']
        const upcoming = res['accepted_requests']
        const fav_requests = res['favorite_pending_requests']
        const history = res['finished_requests']
        const requests = fav_requests.concat(norm_requests)
        const files = tutor.files
        console.log(subjects)
        this.setState({
        }, () => {
          const data = {
            'notifications': notifications,
            'seen': seen,
            'pendingIndicator': !(requests.length > 0),
            'accountview': {
              'picture': tutor['picture'],
              'first_name': tutor['first_name'],
              'last_name': tutor['last_name'],
              'email': tutor['email'],
            },
            'dashboardview': {
              'upcoming':upcoming,
              'history': history,
              'files': files,
            },
            'requestsview': {
              'pending':requests,
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
    })

  }

  getAdminData = (_callback) => {
    get_api('all-admin-details', (res) => {
      this.setState({
      }, () => {
        const data = {
          'dashboardview': {
          },
        }
        _callback(res)
      })
    })
  }


  render(){
    return (
      <div>
      {this.state.offline == false ?
      <Router>
        {this.state.session == null &&
        // Not Logged In
        <Switch> 
          <Route exact path='/' component={LandingView} /> 
          <Route exact path='/login'> 
            <Login login={this.login} login_tutor={this.login_tutor} />
          </Route>
          <Route exact path='/register'> 
            <SignUp {...this.state.registerProps} googleId="0" register={this.register} />
          </Route>
          <Route exact path='/tutor-form'> 
            <TutorApp/>
          </Route>
          <Route exact path='/admin'> 
            <AdminDashboardLayout getUserData={this.getAdminData}/>
          </Route>
          <Route exact path='/NoParentAccount'> 
            <NoParentAccount/>
          </Route>
          <Route exact path='/NoTutorAccount'> 
            <NoTutorAccount/>
          </Route>
          <Route path='*' component={NotFoundView} /> 
          
        </Switch>
        }
        {this.state.type == 'parent' &&
        // Parent Logged In
        <Switch>
          <Route path='/'> 
            <DashboardLayout credits={this.state.credits} addCredit={this.addCredit} seenParentNotif={this.seenParentNotif} getUserData={this.getParentData}/>
          </Route>
          <Route path='*' component={NotFoundView} /> 
        </Switch>
        }
        {this.state.type == 'tutor' &&
        // Tutor Logged In
        <Switch>
          <Route path='/'> 
            <TutorDashboardLayout seenTutorNotif={this.seenTutorNotif} getUserData={this.getTutorData}/>
          </Route>
          <Route path='*' component={NotFoundView} /> 
        </Switch>
        }
        {this.state.type == 'admin' &&
        // Admin Logged In
        <Switch>
          <Route path='/'> 
            <AdminDashboardLayout getUserData={this.getAdminData}/>
          </Route>
          <Route path='*' component={NotFoundView} /> 
        </Switch>
        }
      </Router>
      :
      <NotOnline/>
      }
      <Toaster/>
      </div>
    );
  }

}

export default withRouter(withClearCache(App));