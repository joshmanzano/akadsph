import React, { Component, Fragment, useState, useEffect, useRef } from 'react';
import { Container, Fab, Button, IconButton, Fade, makeStyles } from '@material-ui/core';
import {
  BrowserRouter as Router,
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
import DashboardView from 'src/views/DashboardView/DashboardView';
import AuthView from 'src/views/test/AuthView';
import NotFoundView from 'src/views/errors/NotFoundView.jsx';
import ProductListView from 'src/views/product/ProductListView';
import SettingsView from 'src/views/settings/SettingsView';
import TutorDashboardView from 'src/views/TutorDashboardView';
import ChatView from 'src/views/chat';
import LandingPage from 'src/LandingPage';
import Login from 'src/components/login';
import CreditStoreView from 'src/views/CreditStore';
import StoreUnderConstruction from 'src/components/BuyHoursUnderMaintenance';
import Loading from 'src/components/loading';
import NoHourView from 'src/components/NoHourView';
import PlaygroundView from 'src/views/test/PlaygroundView';
import Messenger from 'src/views/chat';
import ReactGifted from 'src/components/ReactGiftedChat';
import ReactPolling from 'react-polling';
import jwt from 'jwt-decode';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

import 'intro.js/introjs.css';
import { Steps } from 'intro.js-react';

import 'src/ChatWidget.css';
import toast from 'react-hot-toast';
import {useSnackbar} from 'notistack';
import { Widget, addResponseMessage, addLinkSnippet, addUserMessage } from 'react-chat-widget';
import PageviewIcon from '@material-ui/icons/Pageview';

import CloseIcon from '@material-ui/icons/Close';

import RequestSentView from 'src/views/RequestSent';
import TransactionSuccessView from 'src/views/TransactionSuccess';

import { AutoRotatingCarousel } from 'material-auto-rotating-carousel';

import HelperModal from 'src/components/HelperModal';

import ChatUnderConstruction from 'src/components/ChatUnderConstruction';

import Websocket from 'react-websocket';

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

function useInterval(callback, delay){
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if(delay != null){
      const id = setInterval(tick, delay);
      return () => {
        clearInterval(id);
      };
    }
  }, [callback, delay])
}


function DashboardLayout (props){
  let classes = useStyles();
  let match = useRouteMatch();
  let location = useLocation();

  const [loaded, setLoaded] = useState(false);
  let [userData, setUserData] = useState();
  const user_id = jwt(localStorage.getItem('session_token')).id

  const [setUpcoming, changeUpcoming] = useState(false)
  const [setPending, changePending] = useState(false)
  const [setHistory, changeHistory] = useState(false)
  const [setTransaction, changeTransaction] = useState(false)
  const [setNotification, changeNotification] = useState('')
  const {enqueueSnackbar, closeSnackbar} = useSnackbar();
  const [showFab, setFab] = useState(true)

  const [open, setOpen] = useState(false)
  
  console.log('#loaded')
  console.log(loaded)

  if(!loaded){
    props.getUserData((userData) => {
      setUserData(userData);
      setLoaded(true);
    })
  }
  
  // if(loaded){
  //   userData['notifications'].forEach(notif => {
  //     enqueueSnackbar('notif', {
  //       'variant':'info'
  //     })
  //   })
  // }
  const closeNotif = (key) => {
    props.seenParentNotif()
    closeSnackbar(key)
  }

  const action = key => (
    <Fragment>
        {/* <IconButton color="inherit" onClick={() => { closeNotif(key)}}>
            <PageviewIcon />
        </IconButton> */}
        <IconButton color="inherit" onClick={() => { closeNotif(key)}}>
            <CloseIcon />
        </IconButton>
    </Fragment>
  );

  const refresh = () => {
    props.getUserData((userData) => {
      setUserData(userData);
      setLoaded(true);
      userData['notifications'].forEach(notif => {
        if(!notif.seen){
          const message = notif.message 
          enqueueSnackbar(message, {
            key: notif.id,
            variant:'info',
            persist: true,
            action
          })
        }
      })
    })
  }

  useInterval(() => {
    refresh()
  }, 30000)

  const showHelp = () => {
    setOpen(true)

  }

  const handleData = (data) => {
    const message = JSON.parse(data)
    if(message['message'] == 'update'){
      refresh()
    }
  }

  return (
    <div>

    {loaded ? 
    <div className={classes.root}>
      <TopBar id='topbar' refresh={refresh} closeSnackbar={closeSnackbar} seenParentNotif={props.seenParentNotif} seen={userData['seen']} notifications={userData['notifications']} credits={props.credits}/>
      {/* <NavBar
        onMobileClose={() => setMobileNavOpen(false)}
        openMobile={isMobileNavOpen}
      /> */}
      <Websocket url={'wss://api.akadsph.com/ws/'+'parent'+String(user_id)+'/'} onMessage={handleData}/>
      <div className={classes.wrapper}>
        <div className={classes.contentContainer}>
          <div className={classes.content}>
            <TransitionGroup>
            
            <CSSTransition key={location.key} in={true} timeout={{ enter: 300, exit: 300}} classNames={'fade'}>

            <Switch location={location}>
              <Route exact path={`${match.url}`}>
                <Container id="overview">
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
                    <FindTutorView refresh={refresh} credits={props.credits} {...userData['findtutorview']}/>
                  }
                </Fragment>
                </Container>
              </Route>
              <Route exact path={`${match.url}store`}>
                <Container>
                <Fragment>
                  {/* <CreditStoreView refresh={refresh} addCredit={props.addCredit}/> */}
                  <StoreUnderConstruction/>
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
                  {/* <ChatUnderConstruction/> */}
                </Fragment>
              </Route>
              <Route exact path={`${match.url}playground`}>
                <Fragment>
                  <PlaygroundView/>
                </Fragment>
              </Route>
              <Route exact path={`${match.url}request-sent`}>
                <Fragment>
                  <RequestSentView/>
                </Fragment>
              </Route>
              <Route exact path={`${match.url}transaction-successful`}>
                <Fragment>
                  <TransactionSuccessView/>
                </Fragment>
              </Route>
              <Route path='*' component={NotFoundView} /> 
            </Switch>


            </CSSTransition>

            </TransitionGroup>
          </div>
        </div>
      </div>
      {/* <Widget
      profileAvatar={''}
      title={'Hello there!'}
      subtitle={'Ask me anything'}
      /> */}
      <HelperModal open={open} setOpen={setOpen} user={"parent"}/>
      {showFab &&
      <Fab size="large" onClick={showHelp} color="primary" className={'floater'}>
        <img id="helper-oli" width='50' src='../static/images/helper-oli.png'/>
      </Fab>
      }
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
