import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  useTheme,
  makeStyles,
  colors,
  Grid,
  Tooltip,
  Button,
  Box,
  Container,
  TextField,
  InputAdornment,
  Snackbar,
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

import ModalZoomStart from './ModalZoomStart';

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
  dialogStyle:{
    minWidth: "60vh",
  },
}));

const ModalSure = ({open, setOpen, className, ...rest }) => {
  const classes = useStyles();
  const [openZoom, setOpenZoom] = React.useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };

  const handleStart = () => {
    setOpenZoom(true);
    setOpen(false);
  };

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
          <DialogTitle onClose={handleClose} id="alert-dialog-title" className={classes.dialogTitle}>{"Start Session"}</DialogTitle>
          <DialogContent className={classes.dialogStyle}>
            <DialogContentText id="alert-dialog-description" align='center' >
                Are you ready to start the Zoom call?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={()=> handleStart()} color="primary">
                Yes
            </Button>
            <Button onClick={handleClose} color="primary" autoFocus>
                No
            </Button>
          </DialogActions>
      </Dialog>
      <ModalZoomStart open={openZoom} setOpen={setOpenZoom}/>
    </React.Fragment>
  );
};

ModalSure.propTypes = {
  className: PropTypes.string
};

export default ModalSure;
