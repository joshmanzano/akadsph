import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  AppBar,
  Badge,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  makeStyles,
  Container,
  Grid,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import DashboardIcon from '@material-ui/icons/Dashboard';
import InputIcon from '@material-ui/icons/Input';
import Logo from 'src/components/Logo';
import SettingsIcon from '@material-ui/icons/Settings';
import BookIcon from '@material-ui/icons/Book';
import StoreIcon from '@material-ui/icons/Store';
import ForumIcon from '@material-ui/icons/Forum';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import FaceIcon from '@material-ui/icons/Face';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


const useStyles = makeStyles(() => ({
  root: {},
  avatar: {
    width: 60,
    height: 60
  }
}));

const TopBar = ({
  className, credits,
  onMobileNavOpen,
  ...rest
}) => {
  const classes = useStyles();
  const anchor = 'left';
  const [notifications] = useState([]);
  const logout = () => {
    localStorage.clear()
    window.location.replace('/')
  }

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Overview', 'Book A Tutor', 'Buy Credits', 'Profile', 'Settings'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <AppBar
      className={clsx(classes.root, className)}
      elevation={0}
      {...rest}
    >
      <Toolbar>
        <RouterLink to="/">
          <Logo />
        </RouterLink>
        <Box flexGrow={1} />
        <Hidden xsDown>
        <Container>

          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item sm={2}>
            </Grid>
            <Grid item sm={2}>
              <IconButton color="inherit" href="#/">
                <DashboardIcon/>
                <Box mx={1}>
                  <h5>
                    Overview
                  </h5>
                </Box>
              </IconButton>
            </Grid>
            <Grid item sm={2}>
              <IconButton color="inherit" href="#/findtutor">
                <BookIcon/>
                <Box mx={1}>
                  <h5>
                    Booking
                  </h5>
                </Box>
              </IconButton>
            </Grid>
            <Grid item sm={2}>
              <IconButton color="inherit" href="#/store">
                <ShoppingCartIcon/>
                <Box mx={1}>
                  <h5>
                    Buy Hours
                  </h5>
                </Box>
              </IconButton>
            </Grid>
            <Grid item sm={2}>
              <IconButton color="inherit" href="#/account">
                <AccountCircleIcon/>
                <Box mx={1}>
                  <h5>
                    Profile
                  </h5>
                </Box>
              </IconButton>
            </Grid>
            <Grid item sm={2}>
              <IconButton color="inherit" href="#/settings">
                <SettingsIcon/>
                <Box mx={1}>
                  <h5>
                    Settings
                  </h5>
                </Box>
              </IconButton>
            </Grid>
          </Grid>

        </Container>

        </Hidden>
        <Box flexGrow={1} />

        <Hidden xsDown>
          <Box mx={2}>
            Hours: {credits}
          </Box>
        </Hidden>
        <IconButton color="inherit" href="#/messages">
          <Badge
            badgeContent={3}
            color="primary"
            variant="dot"
          >
            <ForumIcon/>
          </Badge>
        </IconButton>
        <IconButton color="inherit">
          <Badge
            badgeContent={2}
            color="secondary"
            variant="dot"
          >
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton onClick={logout} color="inherit">
            <MeetingRoomIcon/>
        </IconButton>
        <Hidden smUp>
          <IconButton
            color="inherit"
            onClick={toggleDrawer(anchor, true)}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
        <Hidden smUp>
        <SwipeableDrawer
      anchor={anchor}
      open={state[anchor]}
      onClose={toggleDrawer(anchor, false)}
      onOpen={toggleDrawer(anchor, true)}
    >
      {list(anchor)}
    </SwipeableDrawer>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
  onMobileNavOpen: PropTypes.func
};

export default TopBar;
