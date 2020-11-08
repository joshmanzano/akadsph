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
  Button,
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

const useStyles = makeStyles(() => ({
  root: {},
  avatar: {
    width: 60,
    height: 60
  }
}));

const TopBar = ({
  className,
  onMobileNavOpen,
  ...rest
}) => {
  const classes = useStyles();
  const [notifications] = useState([]);

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
        <Hidden mdDown>
        <Container>
          <Grid container>
            <Grid item sm={2}>
              <IconButton color="inherit" href="/">
                <DashboardIcon/>
              </IconButton>
            </Grid>
            <Grid item sm={2}>
              <IconButton color="inherit" href="/findtutor">
                <BookIcon/>
              </IconButton>
            </Grid>
            <Grid item sm={2}>
              <IconButton color="inherit" href="/store">
                <StoreIcon/>
              </IconButton>
            </Grid>
            <Grid item sm={2}>
              <IconButton color="inherit" href="/account">
                <AccountBoxIcon/>
              </IconButton>
            </Grid>
            <Grid item sm={2}>
              <IconButton color="inherit" href="/settings">
                <SettingsIcon/>
              </IconButton>
            </Grid>
          </Grid>
        </Container>
        </Hidden>
        {/* <Box flexGrow={1} /> */}
        <IconButton color="inherit" href="/messages">
          <Badge
            badgeContent={notifications.length}
            color="primary"
            variant="dot"
          >
            <ForumIcon/>
          </Badge>
        </IconButton>
        <IconButton color="inherit">
          <Badge
            badgeContent={notifications.length}
            color="primary"
            variant="dot"
          >
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton color="inherit">
            <MeetingRoomIcon />
        </IconButton>
        <Hidden lgUp>
          <IconButton
            color="inherit"
            onClick={onMobileNavOpen}
          >
            <MenuIcon />
          </IconButton>
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
