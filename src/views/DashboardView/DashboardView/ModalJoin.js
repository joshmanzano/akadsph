import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Divider,
  makeStyles,
  colors,
  Button,
  Box,
  Typography, 
  IconButton,
} from '@material-ui/core';
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    // DialogTitle,
  } from '@material-ui/core';
  
import MuiDialogTitle from '@material-ui/core/DialogTitle';
  
import CloseIcon from '@material-ui/icons/Close';

import { withStyles } from '@material-ui/core/styles';

import ModalZoomStart from 'src/components/ModalZoomStart.js';
import ExtensionPrompt from './ExtensionPrompt'; 

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%'
  },
  avatar: {
    backgroundColor: colors.red[600],
    height: 56,
    width: 56
  },
  differenceIcon: {
    color: colors.red[900]
  },
  differenceValue: {
    color: colors.red[900],
    marginRight: theme.spacing(1)
  },
  closeButton: {
    float:'right', marginTop: '5px'

  },
  dialogTitle:{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '4px 2px 5px 20px',
  },
}));

const ModalDeclined = ({open, setOpen, join_url, session_id, duration, className, ...rest }) => {
  const classes = useStyles();
  const [openZoom, setOpenZoom] = React.useState(false);
  const [openExtension, setOpenExtension] = React.useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };

  const handleJoinZoom = () => {
    setOpen(false);
    setOpenZoom(true);
  };

  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
    setOpen(false);
    // setOpenExtension(true);
}

  const DialogTitle = withStyles(useStyles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <React.Fragment>
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
          <Typography variant="h4">{children}</Typography>
          {onClose ? (
            <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
              <CloseIcon />
            </IconButton>
          ) : null}
        </MuiDialogTitle>
        <Divider/>
        <br/>
      </React.Fragment>
    );
  });

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        
        >
          <DialogTitle onClose={handleClose} id="alert-dialog-title" className={classes.dialogTitle}>{""}</DialogTitle>
          <DialogContent>
            <Box align='center' mb={2}>
            <img width='100' src='../static/images/oli-happy.png'></img>
            </Box>
            <DialogContentText id="alert-dialog-description" align='center'>
              Your tutorial session is about to start!<br/>Join the call now.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={() =>  {openInNewTab(join_url)}} color="primary" autoFocus>
              Join Session
            </Button>
          </DialogActions>
      </Dialog>
      <ModalZoomStart open={openZoom} setOpen={setOpenZoom}/>
      <ExtensionPrompt session_id={session_id} duration={duration} open={openExtension} setOpen={setOpenExtension}/>
    </React.Fragment>
  );
};

ModalDeclined.propTypes = {
  className: PropTypes.string
};

export default ModalDeclined;
