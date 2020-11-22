import React, { Component, Fragment, useState } from 'react';
import { Container, Fade, makeStyles } from '@material-ui/core';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useLocation,
  useParams,
} from "react-router-dom";
import NavBar from './NavBar';
import TopBar from './TopBar';

import MainLayout from 'src/layouts/MainLayout';
import AccountView from 'src/views/account/AccountView';
import FindTutorView from 'src/views/customer/FindTutorView';
import DashboardView from 'src/views/reports/DashboardView';
import AuthView from 'src/views/test/AuthView';
import NotFoundView from 'src/views/errors/NotFoundView.jsx';
import ProductListView from 'src/views/product/ProductListView';
import SettingsView from 'src/views/settings/SettingsView';
import TutorDashboardView from 'src/views/TutorDashboardView';
import ChatView from 'src/views/chat';
import LandingPage from 'src/LandingPage';
import Login from 'src/components/login';
import CreditStoreView from 'src/views/CreditStore';
import Loading from 'src/components/loading';
import NoHourView from 'src/components/NoHourView';
import PlaygroundView from 'src/views/test/PlaygroundView';
import Messenger from 'src/views/react-messenger/Messenger';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Tutorial from 'src/components/Tutorial';
import 'intro.js/introjs.css';
import { Steps } from 'intro.js-react';

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
  let location = useLocation();
  const [loaded, setLoaded] = useState(false);
  let [userData, setUserData] = useState();

  if(!loaded){
    props.getUserData((userData) => {
      setUserData(userData);
      setLoaded(true);
    })
  }

  return (
    <div>

    {loaded ? 
    <div className={classes.root}>
      <TopBar credits={props.credits}/>
      {/* <Tutorial enabled={true}/> */}
      {/* <NavBar
        onMobileClose={() => setMobileNavOpen(false)}
        openMobile={isMobileNavOpen}
      /> */}
      <div className={classes.wrapper}>
        <div className={classes.contentContainer}>
          <div className={classes.content}>
            <TransitionGroup>
            
            <CSSTransition key={location.key} in={true} timeout={{ enter: 300, exit: 300}} classNames={'fade'}>

            <Switch location={location}>
              <Route exact path={`${match.url}`}>
                <Container>
                  <Fragment>
                    <DashboardView first_name={userData['accountview']['first_name']} credits={props.credits} {...userData['dashboardview']}></DashboardView>
                  </Fragment>
                </Container>
              </Route>
              <Route exact path={`${match.url}findtutor`}>
                <Container>
                <Fragment>
                  {props.credits == 0 ?
                    <NoHourView/>
                  :
                    <FindTutorView {...userData['findtutorview']}/>
                  }
                </Fragment>
                </Container>
              </Route>
              <Route exact path={`${match.url}store`}>
                <Container>
                <Fragment>
                  <CreditStoreView addCredit={props.addCredit}/>
                </Fragment>
                </Container>
              </Route>
              <Route exact path={`${match.url}account`}>
                <Container>
                <Fragment>
                  <AccountView {...userData['accountview']}/>
                </Fragment>
                </Container>
              </Route>
              <Route exact path={`${match.url}settings`}>
                <Container>
                <Fragment>
                  <SettingsView {...userData['settingsview']}/>
                </Fragment>
                </Container>
              </Route>
              <Route exact path={`${match.url}messages`}>
                <Fragment>
                  <Messenger/> 
                </Fragment>
              </Route>
              <Route exact path={`${match.url}playground`}>
                <Fragment>
                  <PlaygroundView/>
                </Fragment>
              </Route>
              <Route path='*' component={NotFoundView} /> 
            </Switch>

            </CSSTransition>

            </TransitionGroup>
          </div>
        </div>
      </div>
    </div>
    :
    <Fade in={!loaded}>
      <Loading/>
    </Fade>
    }

    </div>

  );


}

export default DashboardLayout;
