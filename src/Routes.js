import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DashboardLayout from 'src/layouts/DashboardLayout';
import MainLayout from 'src/layouts/MainLayout';
import AccountView from 'src/views/account/AccountView';
import FindTutorView from 'src/views/customer/FindTutorView';
import DashboardView from 'src/views/reports/DashboardView';
import PlaygroundView from 'src/views/test/PlaygroundView';
import AuthView from 'src/views/test/AuthView';
import LoginView from 'src/views/auth/LoginView';
import NotFoundView from 'src/views/errors/NotFoundView';
import ProductListView from 'src/views/product/ProductListView';
import RegisterView from 'src/views/auth/RegisterView';
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
      };
  }

  componentDidMount(){
  }

  LandingView = () => {
    return (
      <Fragment>
        <LandingPage/>
      </Fragment>
    )
  }

  AccountView = () => {
    return (
      <Fragment>
        <AccountView/>
      </Fragment>
    )
  }

  render(){
    return (
      <Router>
        <Switch>
          <Route exact path='/' render={this.addScreen} /> 
          <Route exact path='/account' render={this.AccountView} /> 
        </Switch>
      </Router>
    );
  }

}

export default App;