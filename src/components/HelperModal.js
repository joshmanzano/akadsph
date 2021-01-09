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
  CircularProgress,
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
import { useConfirm } from 'material-ui-confirm';

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

const ModalWaiting = ({open, setOpen, className, user, ...rest }) => {
  const classes = useStyles();
  // const [open, setOpen] = React.useState(false);
  const confirm = useConfirm();
  const support = () => {
    confirm({ title:'Questions for AkadsPH' ,description: 'If you have any questions you can email support@akadsph.com' })
      .then(() => {
  
      })
      .catch(() => {

      });

  }


  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
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
    <Dialog
    open={open}
    onClose={handleClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
    
    >
        <DialogTitle onClose={handleClose} id="alert-dialog-title" className={classes.dialogTitle}>{"Oli is here to help!"}</DialogTitle>
        <DialogContent mx={4}>
          <Box align='center' mb={2}>
          <img width='100' src='../static/images/oli-happy.png'></img>
          </Box>
          <DialogContentText id="alert-dialog-description" align='center'>
            What do you need help with?
          </DialogContentText>
          <Box mt={2}>
            <Grid align="center" spacing={4}>
              <Grid item>
                <Box>
                  <Button color="primary" variant="contained">What do I do in this page?</Button>
                </Box>
              </Grid>
              <Grid item>
                <Box my={2}>
                  <Button color="primary" variant="contained" onClick={support}>I have a question.</Button>
                </Box>
              </Grid>
              <Grid item>
                <Box my={2}>
                  <Button color="primary" variant="contained" onClick={ () => { user=="parent" ? window.open('https://forms.gle/rJX41yq3kC21azHm7') : window.open('http://tiny.cc/AkadsEATutorFeedback')}}>I would like to give feedback about the website.</Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
    </Dialog>
  );
};

ModalWaiting.propTypes = {
  className: PropTypes.string
};

export default ModalWaiting;
