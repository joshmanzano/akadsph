import React, { Component, Fragment } from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
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

// const routes = [
//   {
//     path: '/',
//     element: <LandingPage/>,
//   },
//   {
//     path: '/login',
//     element: <Login/>,
//   },
//   {
//     path: '/parent',
//     element: <DashboardLayout />,
//     children: [
//       { path: 'account', element: <React.Fragment><AccountView /></React.Fragment> },
//       { path: 'customers', element: <React.Fragment><FindTutorView/></React.Fragment> },
//       { path: 'dashboard', element: <React.Fragment><DashboardView/></React.Fragment> },
//       { path: 'products', element: <ProductListView /> },
//       { path: 'settings', element: <React.Fragment><SettingsView/></React.Fragment> },
//       { path: 'playground', element: <PlaygroundView /> },
//       { path: 'tutor-dashboard', element: <TutorDashboardView /> },
//       { path: 'auth', element: <AuthView /> },
//       { path: '*', element: <NotFoundView /> }
//     ]
//   }
// ];

class App extends Component {

  constructor(props){
      super(props);
      this.state = {
        session: localStorage.getItem('session'),
        givenName: localStorage.getItem('givenName'),
        familyName: localStorage.getItem('familyName'),
      };
  }

  componentDidMount(){
  }

  login = (email, name, familyName, givenName, googleId, imageUrl) => {
    localStorage.setItem('email',email)
    localStorage.setItem('name',name)
    localStorage.setItem('givenName',givenName)
    localStorage.setItem('familyName',familyName)
    localStorage.setItem('googleId',googleId)
    localStorage.setItem('imageUrl',imageUrl)
    localStorage.setItem('session','parent')
    this.setState({
      givenName,
      familyName
    })
  }

  LandingView = () => {
    return (
      <LandingPage/>
    )
  }

  LoginView = () => {
    return (
      <Login login={this.login} />
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
          <Route exact path='/login' render={this.LoginView} /> 
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

export default App;