import React, { Component, Fragment, useState, useRef, useEffect } from "react";
import {
  Container,
  Fade,
  Fab,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useLocation,
  useParams,
} from "react-router-dom";
import NavBar from "./NavBar";
import TopBar from "./TopBar";

import MainLayout from "src/layouts/MainLayout";
import TutorAccountView from "src/views/tutorAccount/AccountView";
import FindTutorView from "src/views/customer/FindTutorView";
import PlaygroundView from "src/views/test/PlaygroundView";
import AuthView from "src/views/test/AuthView";
import NotFoundView from "src/views/errors/NotFoundView.jsx";
import ProductListView from "src/views/product/ProductListView";
import SettingsView from "src/views/settings/SettingsView";
// import TutorDashboardView from "src/views/TutorDashboardView";
import PayoutHistory from "src/views/PayoutHistory";
import RequestPage from "src/views/RequestPage";
import ChatView from "src/views/chat";
import LandingPage from "src/LandingPage";
import Login from "src/components/login";
import CreditStoreView from "src/views/CreditStore";
import Loading from "src/components/loading";
import NoRequestView from "src/components/NoRequestView";
import Messenger from "src/views/tutorChat";
import RequestAcceptedView from "src/views/RequestAccepted";

import TutorExtensionForm from "src/components/TutorExtensionForm"; //asking tutor if he accepts the extension
import { CSSTransition, TransitionGroup } from "react-transition-group";

import NoPayoutView from "src/components/NoPayoutView";

import ReactPolling from "react-polling";

import { get_user } from "src/Api";

import jwt from "jwt-decode";

import toast from "react-hot-toast";
import { useSnackbar } from "notistack";
// import {
//   Widget,
//   addResponseMessage,
//   addLinkSnippet,
//   addUserMessage,
// } from "react-chat-widget";
import PageviewIcon from "@material-ui/icons/Pageview";
import ChatUnderConstruction from "src/components/ChatUnderConstruction";

import CloseIcon from "@material-ui/icons/Close";
import HelperModal from "src/components/HelperModal";

import Websocket from "react-websocket";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    display: "flex",
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  wrapper: {
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
    paddingTop: 64,
  },
  contentContainer: {
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
  },
  content: {
    flex: "1 1 auto",
    height: "100%",
    overflow: "auto",
  },
}));

function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay != null) {
      const id = setInterval(tick, delay);
      return () => {
        clearInterval(id);
      };
    }
  }, [callback, delay]);
}

function TutorDashboardLayout(props) {
  let classes = useStyles();
  let match = useRouteMatch();
  let location = useLocation();
  const [loaded, setLoaded] = useState(false);
  let [userData, setUserData] = useState();
  const [payoutPresent, setPayoutPresent] = useState(true);
  const [setUpcoming, changeUpcoming] = useState(false);
  const [setHistory, changeHistory] = useState(false);
  const [open, setOpen] = useState(false);
  const user_id = jwt(localStorage.getItem("session_token")).id;
  const notifData = [
    {
      image: "../static/images/oli-happy.png",
      message: "New request for Math (Algebra)",
      detailPage: "/viewrequest",
      receivedTime: "5m ago",
    },
    // {
    //   image: '../static/images/oli-happy.png',
    //   message: 'Accepted a session December 3, 2020 2PM-3PM',
    //   detailPage: '/',
    // },
  ];

  const [notifications, setNotifs] = useState(notifData);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [showFab, setFab] = useState(window.location.pathname != "/messages");

  if (!loaded) {
    props.getUserData((userData) => {
      setUserData(userData);
      setLoaded(true);
    });
  }

  const closeNotif = (key) => {
    props.seenTutorNotif();
    closeSnackbar(key);
  };

  const action = (key) => (
    <Fragment>
      {/* <IconButton color="inherit" onClick={() => { closeNotif(key)}}>
            <PageviewIcon />
        </IconButton> */}
      <IconButton
        color="inherit"
        onClick={() => {
          closeNotif(key);
        }}
      >
        <CloseIcon />
      </IconButton>
    </Fragment>
  );

  const refresh = () => {
    props.getUserData((userData) => {
      setUserData(userData);
      userData["notifications"].forEach((notif) => {
        if (!notif.seen) {
          const message = notif.message;
          enqueueSnackbar(message, {
            key: notif.key,
            variant: "info",
            persist: true,
            action,
          });
        }
      });
      setLoaded(true);
    });
  };

  useInterval(() => {
    refresh();
  }, 30000);

  const handleData = (data) => {
    console.log(data);
    const message = JSON.parse(data);
    if (message["message"] == "update") {
      refresh();
    }
  };

  const showHelp = () => {
    setOpen(true);
  };

  const [DashTutorial, setDashTutorial] = useState(
    localStorage.getItem("stepsTutorDash") == undefined
  );
  const [RequestTutorial, setRequestTutorial] = useState(
    localStorage.getItem("stepsTutorRequest") == undefined
  );
  const [PayoutTutorial, setPayoutTutorial] = useState(
    localStorage.getItem("stepsTutorPayout") == undefined
  );
  const [ProfileTutorial, setProfileTutorial] = useState(
    localStorage.getItem("stepsTutorProfile") == undefined
  );

  return (
    <div>
      {loaded ? (
        <div className={classes.root}>
          <TopBar
            id="topbar"
            seen={userData["seen"]}
            closeSnackbar={closeSnackbar}
            refresh={refresh}
            seenTutorNotif={props.seenTutorNotif}
            pendingIndicator={userData["pendingIndicator"]}
            notifications={userData["notifications"]}
            credits={props.credits}
          />
          {/* <Tutorial enabled={true}/> */}
          {/* <NavBar
        onMobileClose={() => setMobileNavOpen(false)}
        openMobile={isMobileNavOpen}
      /> */}
          <Websocket
            url={
              process.env.REACT_APP_WS_URL +
              "/ws/" +
              "tutor" +
              String(user_id) +
              "/"
            }
            onMessage={handleData}
          />
          <div className={classes.wrapper}>
            <div className={classes.contentContainer}>
              <div className={classes.content}>
                <TransitionGroup>
                  <CSSTransition
                    key={location.key}
                    in={true}
                    timeout={{ enter: 300, exit: 300 }}
                    classNames={"fade"}
                  >
                    <Switch location={location}>
                      {/* <Route exact path={`${match.url}`}>
                        <Container id="overview">
                          <Fragment>
                            <TutorDashboardView
                              tutorial={DashTutorial}
                              first_name={userData["accountview"]["first_name"]}
                              requests={userData["requestsview"].pending.length}
                              {...userData["dashboardview"]}
                            ></TutorDashboardView>
                          </Fragment>
                        </Container>
                      </Route> */}
                      <Route exact path={`${match.url}viewrequest`}>
                        <Container>
                          <Fragment>
                            {userData["requestsview"].pending.length > 0 ? (
                              <RequestPage
                                tutorial={RequestTutorial}
                                {...userData["requestsview"]}
                              />
                            ) : (
                              <NoRequestView />
                            )}
                          </Fragment>
                        </Container>
                      </Route>
                      <Route exact path={`${match.url}payout`}>
                        <Container>
                          <Fragment>
                            {PayoutTutorial ? (
                              <PayoutHistory tutorial={PayoutTutorial} />
                            ) : (
                              <NoPayoutView />
                            )}
                          </Fragment>
                        </Container>
                      </Route>
                      <Route exact path={`${match.url}account`}>
                        <Container>
                          <Fragment>
                            <TutorAccountView
                              tutorial={ProfileTutorial}
                              {...userData["accountview"]}
                            />
                          </Fragment>
                        </Container>
                      </Route>
                      <Route exact path={`${match.url}settings`}>
                        <Container>
                          <Fragment>
                            <SettingsView {...userData["settingsview"]} />
                          </Fragment>
                        </Container>
                      </Route>
                      <Route exact path={`${match.url}messages`}>
                        <Fragment>
                          <Messenger {...userData["chatview"]} />
                        </Fragment>
                      </Route>
                      <Route exact path={`${match.url}request-accepted`}>
                        <Fragment>
                          <RequestAcceptedView />
                        </Fragment>
                      </Route>
                      <Route path="*" component={NotFoundView} />
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              </div>
            </div>
          </div>
          <HelperModal open={open} setOpen={setOpen} user={"tutor"} />
          {showFab && (
            <Fab
              size="large"
              onClick={showHelp}
              color="primary"
              className={"floater"}
            >
              <img
                id="helper-oli"
                width="50"
                src="../static/images/helper-oli.png"
              />
            </Fab>
          )}
        </div>
      ) : (
        <Fade in={!loaded}>
          <Loading />
        </Fade>
      )}
    </div>
  );
}

export default TutorDashboardLayout;
