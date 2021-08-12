import React, { Component, Fragment, useState } from "react";
import { Container, Fade, makeStyles } from "@material-ui/core";
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

import jwt from "jwt-decode";
import AdminDashboardView from "src/views/AdminDashboardView";
import Loading from "src/components/loading";
import Messenger from "src/views/chat";
import SignUp from "src/components/signup.jsx";

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

function AdminDashboardLayout(props) {
  let classes = useStyles();
  let match = useRouteMatch();
  let location = useLocation();
  const [loaded, setLoaded] = useState(false);
  let [userData, setUserData] = useState();
  // const user_id = jwt(localStorage.getItem('session_token')).id
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
  if (!loaded) {
    props.getUserData((userData) => {
      setUserData(userData);
      setLoaded(true);
    });
  }

  return (
    <div>
      {loaded ? (
        <div className={classes.root}>
          <TopBar notifications={notifications} credits={props.credits} />
          {/* <Tutorial enabled={true}/> */}
          {/* <NavBar
        onMobileClose={() => setMobileNavOpen(false)}
        openMobile={isMobileNavOpen}
      /> */}
          <div className={classes.wrapper}>
            <div className={classes.contentContainer}>
              <div className={classes.content}>
                <Switch location={location}>
                  <Route exact path={`${match.url}`}>
                    <Container>
                      <Fragment>
                        <AdminDashboardView
                          register={props.register}
                          data={userData}
                        ></AdminDashboardView>
                      </Fragment>
                    </Container>
                  </Route>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Fade in={!loaded}>
          <Loading />
        </Fade>
      )}
    </div>
  );
}

export default AdminDashboardLayout;
