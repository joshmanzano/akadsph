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
import TutorAccountView from 'src/views/tutorAccount/AccountView';
import FindTutorView from 'src/views/customer/FindTutorView';
import PlaygroundView from 'src/views/test/PlaygroundView';
import AuthView from 'src/views/test/AuthView';
import NotFoundView from 'src/views/errors/NotFoundView.jsx';
import ProductListView from 'src/views/product/ProductListView';
import SettingsView from 'src/views/settings/SettingsView';
import TutorDashboardView from 'src/views/TutorDashboardView';
import PayoutHistory from 'src/views/PayoutHistory';
import RequestPage from 'src/views/RequestPage';
import ChatView from 'src/views/chat';
import LandingPage from 'src/LandingPage';
import Login from 'src/components/login';
import CreditStoreView from 'src/views/CreditStore';
import Loading from 'src/components/loading';
import NoRequestView from 'src/components/NoRequestView';
import Messenger from 'src/views/chat';

import TutorExtensionForm from 'src/components/TutorExtensionForm'; //asking tutor if he accepts the extension
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Tutorial from 'src/components/Tutorial';
import 'intro.js/introjs.css';
import { Steps } from 'intro.js-react';
import NoPayoutView from 'src/components/NoPayoutView';

import ReactPolling from 'react-polling';

import {get_user} from 'src/Api';

import jwt from 'jwt-decode';

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


function TutorDashboardLayout (props){
  let classes = useStyles();
  let match = useRouteMatch();
  let location = useLocation();
  const [loaded, setLoaded] = useState(false);
  let [userData, setUserData] = useState();
  const [payoutPresent, setPayoutPresent] = useState(true);
  const [setUpcoming, changeUpcoming] = useState(false);
  const [setHistory, changeHistory] = useState(false);
  const [open, setOpen] = useState(false);
  const user_id = jwt(localStorage.getItem('session_token')).id
  const notifData = [
                {
                  image: '../static/images/oli-happy.png',
                  message: 'New request for Math (Algebra)',
                  detailPage: '#/viewrequest',
                  receivedTime:'5m ago'
                },
                // {
                //   image: '../static/images/oli-happy.png',
                //   message: 'Accepted a session December 3, 2020 2PM-3PM',
                //   detailPage: '/',
                // },
              ]

  const [notifications, setNotifs] = useState(notifData);
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
      <ReactPolling
        url={'https://akadsph.pythonanywhere.com/poll?q='+user_id}
        interval= {3000} // in milliseconds(ms)
        onSuccess={(res) => {
          const command = Number(res['res'])
          console.log(command)
          if(command == 1){
            changeUpcoming(true)
            changeHistory(true)
          }else if(command == 2){
            setOpen(true)
          }
          return true
        }
        }
        onFailure={() => console.log('error on poll')} // this is optional
        method={'GET'}
        // headers={} // this is optional
        // body={JSON.stringify(data)} // data to send in a post call. Should be stringified always
        render={({ startPolling, stopPolling, isPolling }) => {
          return null
        }}
      />
      <TopBar notifications={notifications} credits={props.credits}/>
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
                    <TutorDashboardView open={open} setOpen={setOpen} setHistory ={setHistory} setUpcoming={setUpcoming} first_name={userData['accountview']['first_name']} requests={userData['requestsview'].pending.length} {...userData['dashboardview']}></TutorDashboardView>
                  </Fragment>
                </Container>
              </Route>
              <Route exact path={`${match.url}viewrequest`}>
                <Container>
                <Fragment>
                  {userData['requestsview'].pending.length == 0 ?
                    <NoRequestView/>
                  :
                    <RequestPage {...userData['requestsview']}/>
                  }
                </Fragment>
                </Container>
              </Route>
              <Route exact path={`${match.url}payout`}>
                <Container>
                <Fragment>
                  {payoutPresent ?
                    <PayoutHistory/> 
                  :
                    <NoPayoutView/>
                  }
                </Fragment>
                </Container>
              </Route>
              <Route exact path={`${match.url}account`}>
                <Container>
                <Fragment>
                  <TutorAccountView {...userData['accountview']}/>
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

export default TutorDashboardLayout;
