import React, { Component, Fragment } from 'react';
import { Container, makeStyles } from '@material-ui/core';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import NavBar from './NavBar';
import TopBar from './TopBar';

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

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%'
  },
  wrapper: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 64,
  },
  contentContainer: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden'
  },
  content: {
    flex: '1 1 auto',
    height: '100%',
    overflow: 'auto'
  }
}));


function DashboardLayout (props){
  let classes = useStyles();
  let match = useRouteMatch();

  return (
    <div className={classes.root}>
      <TopBar/>
      {/* <NavBar
        onMobileClose={() => setMobileNavOpen(false)}
        openMobile={isMobileNavOpen}
      /> */}
      <div className={classes.wrapper}>
        <div className={classes.contentContainer}>
          <div className={classes.content}>
            <Container>
              <Switch>
                <Route exact path={`${match.url}`}>
                  <Fragment>
                    <DashboardView></DashboardView>
                  </Fragment>
                </Route>
                <Route exact path={`${match.url}findtutor`}>
                  <Fragment>
                    <FindTutorView/>
                  </Fragment>
                </Route>
                <Route exact path={`${match.url}account`}>
                  <Fragment>
                    <AccountView/>
                  </Fragment>
                </Route>
                <Route exact path={`${match.url}settings`}>
                  <Fragment>
                    <SettingsView/>
                  </Fragment>
                </Route>
              </Switch>
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
